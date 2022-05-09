import "./Payment.css"
import {Link} from "react-router-dom"
export const  Payment = () => {
    return (
<div >
<div className="form1">
<form>
    <label>
        <input className="address" placeholder="Flat Number, Building Name, Street/Locality"/>
</label>

<label>
<input placeholder="Landmark(optional)"/>
</label>

<label>
<input placeholder="Pin code"/>
</label>

<label>
<input placeholder="Locality"/>
</label>

<label>
<input placeholder="City"/>
</label>

<label>
<input placeholder="State"/>
</label>

<label>
<input placeholder="Customer Name"/>
</label>

<label>
<input placeholder="10 Digit Mobile No." type="number"/>
</label>
    </form>


<button><Link to = "/delivery" >Save</Link> </button>


</div>

</div>
    )
}