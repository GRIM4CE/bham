import * as fs from 'fs'
import * as path from 'path'
import * as rimraf from 'rimraf'
import { convertStringToKabob } from '@bham/utils'

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

const getDirFiles = (dir: string, fileArray: string[] = []) => {
  const files = fs.readdirSync(dir)
  files.forEach((file) => {
    if (fs.statSync(`${dir}/${file}`).isDirectory()) {
      fileArray = getDirFiles(`${dir}/${file}`, fileArray)
    } else {
      fileArray.push(`${dir}/${file}`)
    }
  })
  return fileArray
}

// Updates project files with correct var names matching project
const patchFileVars = (filePath: string, name: string, description: string) => {
  // const nameCap = name[0].toUpperCase() + name.substring(1)
  // const nameUpper = name.toUpperCase()
  const nameKabob = convertStringToKabob(name)
  return fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) { throw err }
    if(data) {
      const result = data.replace(/\[package-name\]/g, nameKabob)
        .replace(/\[packageDescription\]/g, description)
      fs.writeFile(filePath, result, 'utf8', (err) => {
        if(err) throw err
      })
    }
  })
}

// Main Function
export const scaffoldPackage = (name: string, description: string) => {
  const packageName = name[0].toLowerCase() + name.substring(1)
  const packageNameKabob = convertStringToKabob(name)

  try {
    const src = `${__dirname.replace('/dist', '/')}scaffolds/package`
    const dist = `packages/${packageNameKabob}`
  
    console.log(`📦 creating ${packageName}...`)
  
    copyDir(src, dist)
  
    const files = getDirFiles(dist, [])

    files.forEach(filePath => {
      patchFileVars(filePath, packageName, description)
    })
  } catch {
    rimraf.sync(`packages/${packageNameKabob}`)
  }
}
