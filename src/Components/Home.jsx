import { useContext } from "react";
import { siteName } from "../App";

export const Home = () => {
  const{site,setSite}=useContext(siteName);
  const defSite = ()=>{
    setSite("Hossein Farahkordmahaleh")
  }
  return (
    <div className="container">
      <h1 className="mt-5">Welcome to My React Bootstrap Homepage</h1>
      <div className="alert alert-primary" role="alert">
        Main Page .

        {site ==="" && defSite()}
        {site}
      </div>
    </div>
  );
};
