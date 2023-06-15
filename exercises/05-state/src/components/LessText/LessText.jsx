import { useState } from "react";

function LessText () {
  const [Less] = useState(true);
  if (Less) {
    return <div className="container pt-4 pb-4">
    <button className="close">More Text</button>
    </div>
  } else
  return <div><button className="open">Less Text</button></div>
}

export default LessText;
// const commentButton = document.querySelector("#commentButton");
//   const comments = document.querySelector("#comments");

//   commentButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (comments.classList.contains("hidden")) {
//       comments.classList.remove("hidden");
//       commentButton.textContent = "Hide Comments";
//     } else {
//       comments.classList.add("hidden");
//       commentButton.textContent = "View Comments";
//   }})

// import { useState } from "react";
// import picture from "./picture.jpg";

// function Warning() {
//   const [showWarning, setShowWarning] = useState(true);
//   if (showWarning) {
//     return <div className="alert alert-warning" role="alert">
//         <strong>Warning!</strong> If you dismiss this, you will see a disturbing picture.
//         <button className="close">
//           <span>&times;</span>
//         </button>
//       </div>
//   }
//   else return <img src={picture} width="300" />;
// }