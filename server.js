const express = require('express')
const cors = require('cors')


//CRUD
//CREATE
//READ
//UPDATE
//DELETE

const app = express()

// middleware

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


// routers
const router = require('./routes/productRouter.js')
app.use('/api/products', router)

//static Images Folder

app.use('/Images', express.static('./Images'))


//puerto

const PORT = 8060

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})