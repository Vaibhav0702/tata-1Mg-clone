// import { Button } from './Button/Button'
import {Checkboxes} from "../checkbox"
// import {Checkboxes}
import './Cart.css'
import {Pay} from "../payment/Payment"
import {Link} from "react-router-dom"

export const Cart = () =>{

return(
    
      <div className="maincart">
          <div className='Navbar'>
          <img className='logo' src='https://www.1mg.com/images/tata_1mg_logo.svg' alt='logo' />
          <input className='searchbox' placeholder='Search for Medicines and Health Products' />
          <a className='help'style={{color:"black",textDecoration: 'none'}} href='https://www.1mg.com/help'>Need Help?</a>
          </div>

          
          <div className='bodyContainer'>

              <div className='first'>
                  <div cartdetails>
                     
                  </div>


              </div>

              <div className='second'>
              <div className='careplan'>
              <img src='https://onemg.gumlet.io/image/upload/v1625657833/ekjkxafxcqqg0oinr3fu.png' alt='careplan'/>
              <h4 style={{color : "green"}}>You can save extra ₹43 on this order</h4>
              <h6>Become a member</h6>
             <span>Care plan membership ₹165 / 3 months</span> 

             
          <div className='buttons'>
          <button className='fbutton'>Know More</button>
           <button className='sbutton'>Add to Cart</button>
          </div> 
          </div>

          <div className='healthcheck'>
         <span className='vital'>Check the health of your vital organs</span>
         {/* <Check/> */}
         <div className="checkcontainer">
         <Checkboxes /> <p className="checkpara">Book Good Health Silver Package for just ₹649</p>
         </div>
         <p>Get the tests done easily from your home. This package will help you in identifying potential disorders and deficiencies at an early stage.</p>
         <span style={{color : "green"}}>Pay later on home sample collection</span>
<div>
    <button><Link to = "/payment" >continue</Link> </button>
</div>
<div>
   
</div>
         
          </div> 
         

              </div>
          </div>

        
          
          
      </div>
)
}