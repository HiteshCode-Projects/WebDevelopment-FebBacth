import React from "react";
import ProfieCard from "./ProfieCard";

function App(){

  //Js Part
  var company = "Amazon"

//{}- Indicates Js Part in HTML
  return(
    <div>
         
          <h1>Profile Card for {company}  </h1>
          <ProfieCard  />
          <ProfieCard  />
          <ProfieCard  />
    </div>
  )


}
export default App