const db = require("../models")
const{jwtSign, verify} = require("../utils/auth.js")
const {ApolloError} = require("apollo-server-express")
module.exports = {
    Query: {
        me: async function(parent, args, context){
            console.log(context.user)
            if(context.user){
                let user = await db.User.findById(context.user.userId).select("-password")
                
                return user
            }else{
                throw new ApolloError('You are not authorized sir')
            }
            

        },
        Menu: async function(parent, args, context){
                let menu = await db.Product.find()
                return menu
        },
        ProtectedMenu: async function(parent, args, context){
            if(context.user){
                let menu = await db.Product.find()
                return menu

            }else{
                throw new ApolloError("Login to order online")
            }
                
        },
        
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
                throw new ApolloError(err.message)
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
        addToCart: async function(parent, args, context){
            
            if(context.user){
                try{
                    let user = await db.User.findByIdAndUpdate(context.user.userId, {
                        $push: {cart: args.item}
                     })
                     return user
     
                }catch(err){
                    throw new ApolloError("unable to add to cart at this time")
                }
                
                
                
            }else{
                throw new ApolloError('You are not authorized sir')
            }
        },
        removeFromCart: async function(parent, args, context){
            console.log(args._id)
            try{
                if(!context.user){
                    throw new Error("Session expired! Please login")
                }
                let user = await db.User.findByIdAndUpdate(context.user.userId, {
                    $pull: {cart: {_id: args._id}}
                 })
                 
                 return user

            }catch(err){
                throw new ApolloError(err.message)
            }
            
        }

    }
}