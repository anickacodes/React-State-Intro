import { useState } from "react";

// const ToggleExample = (props) => {
//   // const [v,f] = usestate(startingVariableState)
//   const [hiOrBye, setHiOrBye] = useState(false);
//   console.log("state of hiBye", hiOrBye);

//    const [h2Text, setH2Text] = useState(true)

//   return (
//     <>
//       <h1>
//         <img src="" alt="" />{" "}
//       </h1>
//       <h2
//         onClick={(syntheticEvent) => {
//           setHiOrBye(!hiOrBye);
//         }}
//       >
//         Hello!
//       </h2>
//     </>
//   );
// };

// export default ToggleExample;

const ToggleExample = (props) => {
  // const [v,f] = usestate(startingVariableState)
  const [hiOrBye, setHiOrBye] = useState(false);
  console.log("state of hiBye", hiOrBye);

  const [h2Text, setH2Text] = useState("Hello, is it me you're looking for?!!");
  console.log("stateofh2text", h2Text);

  function handleToggleText() {
    if (hiOrBye === false) {
      setH2Text("Hello, is it me you're looking for?!!");
    } else {
      setH2Text("Nah fam, Try again! 🙏🏽");
    }
  }
  return (
    <>
      <h1>
        <img src="" alt="" />{" "}
      </h1>
      <h2
        onClick={(syntheticEvent) => {
          console.log("state of hiBye", hiOrBye);
          setHiOrBye(!hiOrBye);
          handleToggleText();
        }}
      >
        {h2Text}
      </h2>
    </>
  );
};

export default ToggleExample;
// conditional Rendering
