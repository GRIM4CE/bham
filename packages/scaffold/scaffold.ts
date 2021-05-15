const { readdir, readdirSync, readFile, writeFile } = require('fs')
const inquirer = require('inquirer')
const copydir = require('copy-dir')

// Helper Utils
const activePackages = readdirSync('./packages', { withFileTypes: true }).filter(source => source.isDirectory()).map(source => source.name)
const convertStringToKabob = (string) => string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()


// Main Function
const scaffoldPackage = (name, description) => {
  const graphName = name[0].toLowerCase() + name.substring(1)
  const graphNameKabob = convertStringToKabob(name)

  console.log(`📦 creating ${graphName}...`)
  copydir.sync('./scaffolds/subgraph', `./packages/${graphNameKabob}`)

  readdir(`./packages/${graphNameKabob}`, (err, files) => {
    files.forEach(file => {
      console.log(file)
    })
  })

  // filesToUpdate.forEach(file => PatchProjectFileVariables(file, graphName))
  // console.log(`${graphName} has been and is accessable at ${port}`)
}

// // Updates project files with correct var names matching project
// const PatchProjectFileVariables = (file, name, port) => {
//   const nameCap = name[0].toUpperCase() + name.substring(1)
//   const nameUpper = name.toUpperCase()
//   const nameKabob = convertStringToKabob(name)

//   const filePath = `./packages/${nameKabob}/${file}`
//   readFile(filePath, 'utf8', (err,data) => {
//     if (err) { return err }

//     const result = data.replace(/\[scaffoldName\]/g, name)
//       .replace(/\[scaffold-name\]/g, nameKabob)
//       .replace(/\[ScaffoldName\]/g, nameCap)
//       .replace(/\[SCAFFOLDNAME\]/g, nameUpper)
//       .replace(/\[scaffoldPort\]/g, port);

//     writeFile(filePath, result, 'utf8', (err) => { if (err) { return err } })
//   })
// }

const prompts = [
  {
    type: "input",
    name: "name",
    message: "Please enter the package name in camelCase",
    validate: (value) => {
      const nameReg = /^[a-zA-Z]+$/
      if(!nameReg.test(value)) return 'Please enter a name without any numbers or special charcters. If multiple words use camelCase'
      if(activePackages.includes(value)) return `Package already exists with ${value} name please select another`;
      return true
    }
  },
  {
    type: "input",
    name: "description",
    message: "Please enter the package description",
  },
]

inquirer.prompt(prompts).then(({ name, description }) => {
  scaffoldPackage(name, description)
})


