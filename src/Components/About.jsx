import Axios from "axios";
import { useQuery } from "react-query";

export const About = () => {
  const imgadd =
    "https://www.purina.co.uk/sites/default/files/styles/ttt_image_510/public/2021-10/Bathing%20Cats%20Everything%20You%20Need%20to%20Know1.jpg?itok=cixxswTb";
  const {
    data: cat,
    isLoading,
    refetch,
  } = useQuery(["name"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            tellus nec risus semper consectetur. Quisque sollicitudin libero sit
            amet justo tincidunt, nec vestibulum velit lacinia.
          </p>
        </div>
        <div className="col-md-6">
          <img src={imgadd} alt="img" style={{borderRadius: "15px",width: "275px"}}/><br/>
          <button onClick={refetch}>New Fact</button>
          {isLoading ? <h5>Loadind ...!</h5> : <h5>{cat?.fact}</h5>}
        </div>
      </div>
    </div>
  );
};
