import React from "react";


function Button(){

    function Notifcation(){
        alert("Applied")
    }

    return(
        <div>
            <button onClick={Notifcation}  style={{ border:'none' , backgroundColor:'blue' , color:'white' , padding:'10px'   }}>Apply now</button>
        </div>
    )
}

export default Button