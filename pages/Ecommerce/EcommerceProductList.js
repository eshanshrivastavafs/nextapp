export default  function EcommerceProductList(props){

    return(
          <div>
            {
            	props.products.map(function(val, index){
            		return <div> name: {val.name}, price: {val.price} <button onClick={()=>{props.deleteProduct(index)}}>Delete</button></div>
            	})
            }
          </div>
    )


	}