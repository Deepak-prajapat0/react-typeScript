import { useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import './App.css'
import { Footer } from "./Components/Footer";

export default function App() {

  let list = ['Home',"Shop","About","Contact"]
  const [selected,setSelected] = useState(-1)

  const selectedLink=(item:number)=>{
    setSelected(item)
  }

  return (
    <div className="flex flex-col ">
      <Header {...{ list, selected, selectedLink }} />
      {/* passing children in component */}
      <div className=" min-h-screen ">
        <Home>
          <div>
            <h4>Hlo this is child component</h4>
            <span>And your selected item is {list[selected]}</span>
          </div>
        </Home>
      </div>
      <Footer />
    </div>
  );
}
