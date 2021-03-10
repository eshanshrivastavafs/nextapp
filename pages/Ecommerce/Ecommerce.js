import { useState } from  "react";
import EcommerceForm from "./EcommerceForm";
import EcommerceProductList from "./EcommerceProductList";
import axios from "axios";

function Ecommerce(){
	let [products, setProducts] = useState([{name:'Tshirt', price:2000},{name:"jeans", price:4000}]);
   
   function getProducts(){

   	   axios.get("/products.json")
     .then(function(res){
    	console.log(res.data);
    	setProducts(res.data);
    })
    .catch(function(err){
    	console.log(err);
    })

   }
    


   function addProduct(e){
   	//e is called event object
   	e.preventDefault();
   	let newProducts = products.concat({name:e.target.name.value, price:e.target.price.value});
   	setProducts(newProducts);
     //clearing the input values
     e.target.name.value ="";
     e.target.price.value ="";
   }
   
   function deleteProduct(indexToDelete){
   	alert(indexToDelete);

   	// let nproducts = [...products];
   	// nproducts.splice(indexToDelete,1);
   	// setProducts(nproducts);
   }

	return(
      <div>
        <EcommerceForm addProduct = {addProduct}/>


        <h1>List of Products</h1>
        <EcommerceProductList products = {products} deleteProduct = {deleteProduct}/>
        <button onClick = {getProducts}>Get Data</button>

      </div>
		)
}
export default Ecommerce;