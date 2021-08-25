const db = require("../models")
const{jwtSign} = require("../utils/auth.js")
const {ApolloError} = require("apollo-server-express")
module.exports = {
    Query: {
        // method: async function(parent, args, context){

        // }
        
    },
    Mutation: {
        login: async function(parent, args, context){
            try{
                let user = await db.User.findOne({
                    email: args.email
                })
        
                let token = await jwtSign(args, user)
                if(!token){
                    throw new ApolloError('Invalid Login Credentials')
                }
                return {user, token}
            }catch(err){
                throw new Error(err.message)
            }
            

        },
        createUser: async function(parent, args, context){
            try{
                let user = await db.User.create(args)
                let token = await jwtSign(args, user)
                if(!token){
                    throw new ApolloError('Invalid Login Credentials')
                }
                return {user, token}
            }catch(err){
                throw new ApolloError(err.message)
            }

        },

    }
}