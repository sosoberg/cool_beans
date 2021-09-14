import React from 'react'
import "./style.css"

export default function Product(props) {
    return (
        <div
        key={props.item.id}
          className={props.cardClass}
          style={{
            background: `url(${props.item.image})`,
            backgroundSize: "cover",
          }}
        >
          <div className="productTextContainer">
            <h1>{props.item.title}</h1>
            <hr></hr>
            <table className="priceSizeTable">
              <tbody>
              <tr>
                {props.item.sizes.map((size) => (
                  <th className="th">{size}</th>
                ))}
              </tr>
              <tr>
                {props.item.prices.map((price) => (
                  <th>{price}</th>
                ))}
              </tr>
              </tbody>
            </table>
            <hr></hr>
            <h3>Contains</h3>
            <br></br>
            <p>{props.item.ingredients}</p>
            <hr></hr>
            <h3>Alergens</h3>
            <br></br>
            <p>{props.item.allergens}</p>
          
          
            </div>
        </div>
    )
}
