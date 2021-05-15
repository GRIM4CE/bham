import * as fs from 'fs'
import * as inquirer from 'inquirer'
import { scaffoldPackage } from './scaffolder'

// Helper Utils
const activePackages = fs.readdirSync('packages', { withFileTypes: true }).filter(source => source.isDirectory()).map(source => source.name)

const prompts = [
  {
    type: 'input',
    name: 'name',
    message: 'Please enter the package name in camelCase',
    validate: (value: string) => {
      const nameReg = /^[a-zA-Z]+$/
      if(!nameReg.test(value)) return 'Please enter a name without any numbers or special charcters. If multiple words use camelCase'
      if(activePackages.includes(value)) return `Package already exists with ${value} name please select another`;
      return true
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter the package description',
  },
]

inquirer.prompt(prompts).then(({ name, description }) => {
  scaffoldPackage(name, description)
})