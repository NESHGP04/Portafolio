// Home

import { useNavigate } from "react-router-dom";
import myPhoto from "@assets/yo.JPG";
import "@styles/Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="background">
      <div className="overlay-box">
        
          {/* <img src={logo} alt="EntrApp Logo" className="logo" /> */}
          <p>In today's news</p>
          <h1>Marinés García</h1>
          
          {/* <button className="button-home" onClick={() => navigate("/login")}>Ingresar</button> */}
      </div>
    </div>
  );
}