import { useContext, useState } from "react";
import { siteName } from "../App";
export const Footer = () => {
  const{name,setName}=useContext(siteName);
  const[inputName,setInputName]= useState("");
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Me</h5>
            <address>
              Finland
              <br />
              TAMPERE
              <br />
              Email: h.farah61@gmail.com
            </address>
          </div>
          <div className="col-md-4">
            {/* Hossein Farahkordmahaleh */}
            <input type="text" onChange={(e)=>{
              return setInputName(e.target.value)
            }}/>
            <button onClick={()=>{return setName(inputName)}}>Set New Site Name</button>
            {name}
          </div>
        </div>
      </div>
    </footer>
  );
};
