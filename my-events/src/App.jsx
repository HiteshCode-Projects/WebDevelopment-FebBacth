// import React from "react";


// function App(){

// function handleClick(){
//   alert('Logged In Successfully')
// }

// return(
//   <div>
//     <button  onClick={handleClick}  >Click Me</button>
//   </div>
// )

// }

// export default App

//Example 2 : Instagram Follow Button

// import { useState } from "react";

// function App(){

//  const [isFollowed , setIsFollowed] = useState(false)

//   return(
//     <div>
//         <button onClick={()=>setIsFollowed(!isFollowed)  }> 
//           {isFollowed ? "Following" : "Follow" }
//         </button>
//     </div>
//   )
// }

// export default App

//Example 3- Live Search 

//import { useState } from "react";


// function App(){
    
//   const [text , setText] = useState("")

//   return(
//     <div>
//       <input  
//        placeholder="Search..."
//        onChange={ (e)=> setText(e.target.value)  }
//       />

//       <h3>You Typed : {text} </h3>
//     </div>
//   )
// }

// export default App


// import { useState } from "react";


// function App(){
    
//   const [color , setColor] = useState("white")
//   const [dark , setDark] = useState(false)

//   function handleClick(){
//     setColor("black")
//     setDark(!dark)
//   }

//   return(
//     <div style={{backgroundColor: color  , height:'100vh'}}>

//      <button onClick={handleClick}>
//      {dark ? "☀️" : "🌙"}
//      </button>
     
//     </div>
//   )
// }

// export default App

