// Home
import { useNavigate } from "react-router-dom";
import "@styles/Home.css";
import "@styles/About.css";

import Header from '@components/Header'
import About from "@components/About";
import MyImg from "@components/MyImg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="background">
        <Header />

        <About />

        <MyImg />
    </div>
  );
}