
//         📗             react📚
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ToggleExample from "../Components/ToggleExample";



function App() {
  
  const [count, setCount] = useState(100);
  //count = 11; //no bueno bc const ;(







  const theResultOfUseState = useState(":0");
  //console.log(theResultOfUseState);

  function showUseStateExample() {
    const someVar = "Y'all are doing great";
    const someSetterFunction = () => {
      //some magic
    };
    return [someVar, someSetterFunction];
  }
  //console.log(showUseStateExample());
  //const [christine, mike, jeremy] = ["christine :)", "mike :)", "jeremy :)"];
  // const christine = "christine :)"
  // const mike = "mike :)"
  // const jeremy = "jeremy :)"
  //console.log("christine", christine);
  //console.log("jeremy", jeremy);
  //console.log("mike", mike);

  // Obje destructuring
  let sam = {
    name: "Sammay :)",
  };
  // console.log(sam.name)

  //const { name } = sam;
  // console.log("destructured Key 'name", {name})
  //console.log("destructured", name)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
<ToggleExample />

      <div className="card">
        {/* <button onClick={(syntheticEvent) => setCount((count) => count + 1)}> */}
        {/* <button onClick={(newDog) => console.log("Youwishthiswasadoglmfao", newDog)}> */}
        <button onClick={(syntheticE) => {
          setCount( count + 1)
          console.log("10.1 Rocks")}}>
        {/* <button onClick={() => setCount((count) => count + 1)}> */}
          {/* const onlyButton = document.querySelector("button")
console.log(onlyButton)
onlyButton.addEventListener("click", (e)=>{
}) */}
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
