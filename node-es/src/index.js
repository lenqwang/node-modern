import { readFileSync } from 'fs'
import path from 'path'
import Test, { add, plus } from './test'

const pkgContent = readFileSync(path.resolve(process.cwd(), 'package.json'), 'utf8')

console.log(pkgContent)

const addResult = add(1, 2)
const plusResult = plus(18, 3)

console.log(addResult, plusResult, Test('node-es'))
