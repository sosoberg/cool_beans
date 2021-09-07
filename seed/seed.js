
const db = require("../models/Product")
const mongoose = require("mongoose")
const connection = require("../config/connections.js")
const nonCustomItems = [
    {
        title: "Esspresso",
        image: "https://media.istockphoto.com/photos/espresso-coffee-and-machine-picture-id1030882758?k=20&m=1030882758&s=612x612&w=0&h=koH9T_nNKF30gZHxYTid5u4otD3qxRg0fg2cf7Rj48M=",
        sizes: ["sm","md","lg"],
        allergens: "No Alergens",
        prices: ["₣5.50","₣6.00","₣6.50"],
        ingredients: "Esspresso"

    },
    {
        title: "Latte",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWeEHcvpWUD6r-V-onW0s2nc7XS9YEG76eVw&usqp=CAU",
        sizes: ["sm","md","lg"],
        allergens: "Dairy",
        prices: ["₣5.50","₣6.00","₣6.50"],
        ingredients: "Esspresso, Steamed Milk"

    },
    {
        title: "Frappe",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwH7_N3LRQnIBTOok_LPSkSovwToMCa8wagg&usqp=CAU",
        sizes: ["sm","md","lg"],
        allergens: "Dairy",
        prices: ["₣5.50","₣6.00","₣6.50"],
        ingredients: "Esspresso, Chockolate Syrup, Ice Cream, Ice"

    },
    {
        title: "Americano",
        image: "https://drinsomniacs.com/wp-content/uploads/2017/04/cafe-americano-coffee.jpg",
        sizes: ["sm","md","lg"],
        allergens: "No Alergens",
        prices: ["₣5.50","₣6.00","₣6.50"],
        ingredients: "Esspresso, Water"

    },
    {
        title: "Cappueccino",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbaCTLdzXi_cSZH397YRsnpdxnJyQ2jZAvhw&usqp=CAU",
        sizes: ["sm","md","lg"],
        allergens: "Dairy",
        prices: ["₣5.50","₣6.00","₣6.50"],
        ingredients: "Esspresso, Milk, Whipped Milk"

    },
    {
        title: "Macchiato",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVG81i6w8e1vC3n24GsvB4ef3wU6nra9MybQ&usqp=CAU",
        sizes: ["sm","md","lg"],
        allergens: "Dairy",
        prices: ["₣5.50","₣6.00","₣6.50"],
        ingredients: "Esspresso, Hot Milk, Cold Milk"

    },
    {
        title: "Irish",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIENy4kw9sTz5J2A4zElqdJ4x4pV8KcbmQw&usqp=CAU",
        sizes: ["sm","md","lg"],
        allergens: "Dairy",
        prices: ["₣5.50","₣6.00","₣6.50"],
        ingredients: "Esspresso, Wiskey, Wipped Cream"

    },
    {
        title: "Espresso Conpana",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Uv9TD0WrUBvBl4IWROf6vzfy0o5CXWCJRQ&usqp=CAU",
        sizes: ["sm","md","lg"],
        allergens: "Dairy",
        prices: ["₣5.50","₣6.00","₣6.50"],
        ingredients: "Esspresso, Wipped Cream"

    },
    {
        title: "Mocha",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_DgwmCwWQVyDYSvMyn95ggmf8ByjsUY66eQ&usqp=CAU",
        sizes: ["sm","md","lg"],
        allergens: "Dairy",
        prices: ["₣5.50","₣6.00","₣6.50"],
        ingredients: "Esspresso, Wipped Cream, Milk, Chockolate"

    }
]
connection.once("open", () => {
    db.insertMany(nonCustomItems).then(data => {
        console.log(data)
        mongoose.disconnect()
    }).catch(err => {
        console.log(err)
    })

})
