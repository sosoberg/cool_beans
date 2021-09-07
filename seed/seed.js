
const db = require("../models/Product")
const mongoose = require("mongoose")
const connection = require("../config/connections.js")
const nonCustomItems = [
    {
        title: "Esspresso",
        image: "https://image.shutterstock.com/image-photo/cup-espresso-coffee-on-dark-260nw-518678794.jpg",
        sizes: "[`sm`,`md`,`lg`]",
        allergens: "No Alergens",
        prices: "[`₣ 2.50`,`₣ 3.00`,`₣ 3.50`]",
        ingredients: "Esspresso"

    },
    {
        title: "Latte",
        image: "https://image.shutterstock.com/image-photo/cup-espresso-coffee-on-dark-260nw-518678794.jpg",
        sizes: "[`sm`,`md`,`lg`]",
        allergens: "Dairy",
        prices: "[`₣ 4.50`,`₣ 5.00`,`₣ 5.50`]",
        ingredients: "Esspresso, Steamed Milk"

    },
    {
        title: "Frappe",
        image: "https://image.shutterstock.com/image-photo/cup-espresso-coffee-on-dark-260nw-518678794.jpg",
        sizes: "[`sm`,`md`,`lg`]",
        allergens: "Dairy",
        prices: "[`₣ 4.50`,`₣ 5.00`,`₣ 5.50`]",
        ingredients: "Esspresso, Chockolate Syrup, Ice Cream, Ice"

    },
    {
        title: "Americano",
        image: "https://image.shutterstock.com/image-photo/cup-espresso-coffee-on-dark-260nw-518678794.jpg",
        sizes: "[`sm`,`md`,`lg`]",
        allergens: "No Alergens",
        prices: "[`₣ 2.50`,`₣ 3.00`,`₣ 3.50`]",
        ingredients: "Esspresso, Water"

    },
    {
        title: "Cappueccino",
        image: "https://image.shutterstock.com/image-photo/cup-espresso-coffee-on-dark-260nw-518678794.jpg",
        sizes: "[`sm`,`md`,`lg`]",
        allergens: "Dairy",
        prices: "[`₣ 5.50`,`₣ 6.00`,`₣ 6.50`]",
        ingredients: "Esspresso, Milk, Whipped Milk"

    },
    {
        title: "Macchiato",
        image: "https://image.shutterstock.com/image-photo/cup-espresso-coffee-on-dark-260nw-518678794.jpg",
        sizes: "[`sm`,`md`,`lg`]",
        allergens: "Dairy",
        prices: "[`₣ 3.50`,`₣ 4.00`,`₣ 4.50`]",
        ingredients: "Esspresso, Hot Milk, Cold Milk"

    },
    {
        title: "Irish",
        image: "https://image.shutterstock.com/image-photo/cup-espresso-coffee-on-dark-260nw-518678794.jpg",
        sizes: "[`sm`,`md`,`lg`]",
        allergens: "Dairy",
        prices: "[`₣ 4.50`,`₣ 5.00`,`₣ 5.50`]",
        ingredients: "Esspresso, Wiskey, Wipped Cream"

    },
    {
        title: "Espresso Conpana",
        image: "https://image.shutterstock.com/image-photo/cup-espresso-coffee-on-dark-260nw-518678794.jpg",
        sizes: "[`sm`,`md`,`lg`]",
        allergens: "Dairy",
        prices: "[`₣ 2.50`,`₣ 3.00`,`₣ 3.50`]",
        ingredients: "Esspresso, Wipped Cream"

    },
    {
        title: "Mocha",
        image: "https://image.shutterstock.com/image-photo/cup-espresso-coffee-on-dark-260nw-518678794.jpg",
        sizes: "[`sm`,`md`,`lg`]",
        allergens: "Dairy",
        prices: "[`₣ 5.50`,`₣ 6.00`,`₣ 6.50`]",
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
