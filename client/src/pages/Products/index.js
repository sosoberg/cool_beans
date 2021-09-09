import React, { useEffect } from "react";
import { MENU } from "../../graphQL/api/querys";
import { useQuery } from "@apollo/client";
import "./style.css";

function Products() {
  const { data, loading, error } = useQuery(MENU);
  console.log(data);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error...</p>;
  }
  if (data) {
    return (
      <div id="menuContain">
        {data.Menu.map((item) => (
          <div
          key={item.id}
            className="itemCard"
            style={{
              background: `url(${item.image})`,
              backgroundSize: "cover",
            }}
          >
            <div className="productTextContainer">
              <h1>{item.title}</h1>
              <hr></hr>
              <table className="priceSizeTable">
                <tbody>
                <tr>
                  {item.sizes.map((size) => (
                    <th className="th">{size}</th>
                  ))}
                </tr>
                <tr>
                  {item.prices.map((price) => (
                    <th>{price}</th>
                  ))}
                </tr>
                </tbody>
              </table>
              <hr></hr>
              <h3>Contains</h3>
              <br></br>
              <p>{item.ingredients}</p>
              <hr></hr>
              <h3>Alergens</h3>
              <br></br>
              <p>{item.allergens}</p>
            
            
              </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
