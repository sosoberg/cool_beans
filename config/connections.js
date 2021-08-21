const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB || "mongodb://localhost/daBeans",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
module.exports = mongoose.connection
