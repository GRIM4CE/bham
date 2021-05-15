import * as fs from 'fs'
import * as path from 'path'
import * as rimraf from 'rimraf'
const convertStringToKabob = (string: string) => string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()

const copyDir = (src: string, dest: string) => {
  fs.mkdirSync(dest, { recursive: true })
  const entries = fs.readdirSync(src, { withFileTypes: true })
    entries.forEach(async (entry) => {
      const srcPath = path.join(src, entry.name)
      const destPath = path.join(dest, entry.name)
  
      entry.isDirectory() ?
        await copyDir(srcPath, destPath) :
        await fs.copyFileSync(srcPath, destPath)
  })
}

// Main Function
export const scaffoldPackage = (name: string, description: string) => {
  try {
    const packageName = name[0].toLowerCase() + name.substring(1)
    const packageNameKabob = convertStringToKabob(name)
    const src = `${__dirname.replace('/dist', '/')}scaffolds/package`
    const dist = `../../packages/${packageNameKabob}`
  
    console.log(`📦 creating ${packageName}...`)
  
    copyDir(src, dist)
  
    fs.readdir(dist, (err, files) => {
      if(err) throw err
      files.forEach(file => {
        patchFileVars(dist, file, packageName, description)
      })
    })
  } catch {
    const packageNameKabob = convertStringToKabob(name)
    rimraf.sync(`../../packages/${packageNameKabob}`)
  }

}

scaffoldPackage('test', '')

// Updates project files with correct var names matching project
const patchFileVars = (dist: string, file: string, name: string, description: string) => {
  // const nameCap = name[0].toUpperCase() + name.substring(1)
  // const nameUpper = name.toUpperCase()
  const nameKabob = convertStringToKabob(name)
  const filePath = `${dist}/${file}`
  
  return fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) { throw err }

    const result = data.replace(/\[scaffoldName\]/g, name)
      .replace(/\[packageName\]/g, name)
      .replace(/\[package-name\]/g, nameKabob)
      .replace(/\[packageDescription\]/g, description)

    fs.writeFileSync(filePath, result, 'utf8')
  })
}