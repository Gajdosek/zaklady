const express = require ("express")

const router = express.Router()


const maincontroller = require ("../controllers/maincontroller")


router.get("/",maincontroller.home)

module.exports=router

