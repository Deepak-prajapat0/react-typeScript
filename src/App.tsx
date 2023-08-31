import { useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import './App.css'
import { Footer } from "./Components/Footer";
import Signup from "./Components/Forms/Signup";
import UserApi from "./Components/Fetch-api/UserApi";



export default function App() {
  let list = ['Home',"Shop","About","Contact"]
  const [selected,setSelected] = useState(-1)

  const selectedLink=(item:number)=>{
    setSelected(item)
  }

  return (
    <div className=" flex flex-col ">
      <Header  />
      {/* passing children in component */}
     <div className="min-h-[80vh]">
      <UserApi/>
     </div>
      <Footer />
    </div>
  );
}

