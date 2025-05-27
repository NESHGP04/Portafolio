// Home
import { useNavigate } from "react-router-dom";
import "@styles/Home.css";
import "@styles/About.css";

import Header from '@components/home/Header'
import About from "@components/home/About";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="background">
        <Header />

        <About />
    </div>
  );
}