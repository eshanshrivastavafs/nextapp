function EcommerceForm(props){
	return (
          <div>
            <form onSubmit = {props.addProduct}>
              <input type="text" name = "name" placeholder = "enter productName" />
              <input type="number" name = "price" placeholder = "enter productPrice"/>
              <button>Submit</button>
            </form>

          </div>

		);
}
export default EcommerceForm;