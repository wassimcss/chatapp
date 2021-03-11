require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB");
const Comment = require("./model/Comment")

const app = express()
app.use(express.json())
app.use(cors())


connectDB()

const PORT = process.env.PORT || 5000;
const http = require("http").createServer(app)
const io = require("socket.io")(http)
// app.listen(PORT,(err) => {
//     err ? console.error(err) : console.log(`Server is running on port ${PORT}`)
// })
io.on("connection",(socket) => {
    console.log(socket.id,"connected")

    socket.on("createComment",async msg => {
        
        const {username,content,product_id,createdAt,rating} = msg
        const newComment = new Comment({username,content,product_id,createdAt,rating})
        console.log(newComment)
        await newComment.save()
    })

    io.on("disconnect",() => {
        console.log(socket.id , "disconnected")
    })
})


app.use("/api",require("./routes/productRouter"))
app.use("/api",require("./routes/commentsRouter"))

http.listen(PORT,(err) => {
    err ? console.error(err) : console.log(`Server is running on port ${PORT}`)
})



