
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
        image: "https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg",
        sizes: "[`sm`,`md`,`lg`]",
        allergens: "Dairy",
        prices: "[`₣ 4.50`,`₣ 5.00`,`₣ 5.50`]",
        ingredients: "Esspresso, Steamed Milk"

    },
    {
        title: "Frappe",
        image: "https://image.shutterstock.com/image-photo/chocolate-frappe-coffee-whipped-cream-260nw-590079974.jpg",
        sizes: "[`sm`,`md`,`lg`]",
        allergens: "Dairy",
        prices: "[`₣ 4.50`,`₣ 5.00`,`₣ 5.50`]",
        ingredients: "Esspresso, Chockolate Syrup, Ice Cream, Ice"

    },
    {
        title: "Americano",
        image: "https://www.caffesociety.co.uk/assets/recipe-images/how-to-make-an-americano.jpg",
        sizes: "[`sm`,`md`,`lg`]",
        allergens: "No Alergens",
        prices: "[`₣ 2.50`,`₣ 3.00`,`₣ 3.50`]",
        ingredients: "Esspresso, Water"

    },
    {
        title: "Cappueccino",
        image: "https://coffee-brewing-methods.com/wp-content/uploads/latte-art-e1480039722212.jpg",
        sizes: "[`sm`,`md`,`lg`]",
        allergens: "Dairy",
        prices: "[`₣ 5.50`,`₣ 6.00`,`₣ 6.50`]",
        ingredients: "Esspresso, Milk, Whipped Milk"

    },
    {
        title: "Macchiato",
        image: "https://knowyourgrinder.com/wp-content/uploads/2019/01/cafe-espresso-macchiato.jpg",
        sizes: "[`sm`,`md`,`lg`]",
        allergens: "Dairy",
        prices: "[`₣ 3.50`,`₣ 4.00`,`₣ 4.50`]",
        ingredients: "Esspresso, Hot Milk, Cold Milk"

    },
    {
        title: "Irish",
        image: "data:image/jpeg;base64,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",
        sizes: "[`sm`,`md`,`lg`]",
        allergens: "Dairy",
        prices: "[`₣ 4.50`,`₣ 5.00`,`₣ 5.50`]",
        ingredients: "Esspresso, Wiskey, Wipped Cream"

    },
    {
        title: "Espresso Conpana",
        image: "https://www.seriouseats.com/thmb/Aqtj4gCcOkernGaGaPt573cFXag=/735x0/__opt__aboutcom__coeus__resources__content_migration__serious_eats__drinks.seriouseats.com__images__2011__08__20110825-con-panna-610-4f5740cf9765459281c899e69cf56964.jpg",
        sizes: "[`sm`,`md`,`lg`]",
        allergens: "Dairy",
        prices: "[`₣ 2.50`,`₣ 3.00`,`₣ 3.50`]",
        ingredients: "Esspresso, Wipped Cream"

    },
    {
        title: "Mocha",
        image: "https://parade.com/wp-content/uploads/2017/01/cafe-mocha-1.jpg",
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
