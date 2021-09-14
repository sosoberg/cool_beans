import React, { useEffect } from "react";
import { MENU } from "../../graphQL/api/querys";
import { useQuery } from "@apollo/client";
import Product from "../../components/ProductCard"
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
          <Product cardClass={"itemCard"} item={item}/>
        ))}
      </div>
    );
  }
}

export default Products;
