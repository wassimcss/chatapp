const mongoose = require("mongoose");

const connectDB = () => {
    console.log(process.env.MONGO_URI)
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser:true,
    useFindAndModify:false

  },(err)=>err ? console.error(err) : console.log("Database connected ....."));
};
module.exports= connectDB
