const express = require("express")
const commentCtrl = require("../controllers/commentCtrl")
const Router = express.Router()

Router.get("/comments",commentCtrl.getComments)

module.exports = Router