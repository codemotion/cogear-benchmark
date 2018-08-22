const faker = require('faker')
const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const mkdirp = require('mkdirp')
let pagesDir = path.join(__dirname,'src','pages','page')
rimraf.sync(pagesDir)
mkdirp.sync(pagesDir)
let limit = process.argv.slice(2).pop() || 1000
let i = 1
while(i<=limit){
	let content = `${faker.lorem.text()}`
	let filename = path.join(pagesDir,i+'.md')
	fs.writeFileSync(filename,content)
	console.log(filename)
	i++;
} 
