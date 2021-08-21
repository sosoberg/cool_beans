const express = require("express")
const app = express()
const {ApolloServer} = require("apollo-server-express")
const db = require("./config/connections.js")
const {typeDefs, resolvers} = require("./schema")
const PORT = process.env.PORT || 8080
const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context

})
(function(){
server.applyMiddleware({app})
})()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

db.once("open", function(){
    app.listen(PORT, ()=>{
     console.log(`http://loclahost:${PORT}`)
     console.log(`http://loclahost:${PORT}/graphql`)
    })
})