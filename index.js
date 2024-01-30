require('dotenv').config()
const cors = require('cors')
const express = require('express')
const server = express()
const mongoose = require('mongoose')
const path = require('path')

// Router
const serverRouter = require('./Routers/routers')

// DB server
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://vishweshgupta30890:2498c496@cluster0.nte3m1n.mongodb.net/products?retryWrites=true&w=majority')
  console.log('DB server statrted !')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// path of build 
// console.log(path.join(__dirname,'/build'))
const staticPath = path.join(__dirname,'/build')

// middleware
server.use(cors())
server.use(express.json())
server.use('/api', serverRouter.router)
server.use(express.static(staticPath))
server.use('*', (req, res)=>{
  res.sendFile(path.join(__dirname,'/build','index.html'))
})

// express server
server.listen(process.env.PORT, ()=>console.log('server started !'))