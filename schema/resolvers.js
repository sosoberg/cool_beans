const db = require("../config/connection")
const{jwtSign} = require("../utils/auth.js")
module.exports = {
    Queries: {
        method: async function(parent, args, context){

        }
        
    },
    Mutations: {
        login: async function(parent, args, context){
            try{
                let user = await db.User.findOne({
                    email: args.email
                }).select("-password")
                let token = await jwtSign(user)
                return {user, token}
            }catch(err){
                throw new Error(err.message)
            }
            

        },
        createUser: async function(parent, args, context){
            try{
                let user = await db.User.create(args).select("-password")
                let token = await jwtSign(user)
                return {user, token}
            }catch(err){
                throw new Error(err.message)
            }

        },

    }
}