const express = require("express")
const app = express()
const {ApolloServer} = require("apollo-server-express")
const dotenv = require("dotenv")
const db = require("./config/connections.js")
const {typeDefs, resolvers} = require("./schema")
const {verify} = require("./utils/auth")
const PORT = process.env.PORT || 8080
dotenv.config()
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: verify

})
const appmiddle = async() => {
    await server.start()
    server.applyMiddleware({app})
}

appmiddle()


app.use(express.urlencoded({extended: true}))
app.use(express.json())

db.once("open", function(){
    app.listen(PORT, ()=>{
     console.log(`http://localhost:${PORT}`)
     console.log(`http://localhost:${PORT}/graphql`)
    })
})