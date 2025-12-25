// // import React from "react";
// import { Button } from "@mui/material";

// function Events() {
//   // function handleClick(){
//   //   return alert ("Button clicked")
//   // }
//   return (
//     <>
//       <Button  onClick={()=>{alert("button pressed")} } >Events</Button>
//     </>
//   );
// }

// export default Events;



// import React from "react";  
// interface CustomButtonProps {
//   message: string;
//   children: React.ReactNode;
// }

// function CustomButton({ message, children }: CustomButtonProps) {
//   return (
//     <button onClick={() => { alert(message) }}>{children}</button>
//   )
// }

// export default function Button1(){
//   return(
//     <>
//     <CustomButton message="playing flim">Play flim</CustomButton>
    

//     <CustomButton message="playing football">Play football</CustomButton>
//     </>
//   )
// }



// The useState Hook provides those two things:

// A state variable to retain the data between renders.
// A state setter function to update the variable and trigger React to render the component again.


import { useState } from 'react';



function sendMessage(message: string) {
  alert(`Sending message: ${message}`);
}


export default function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('Hi!');
  if (isSent) {
    return <h1>Your message is on its way!</h1>
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setIsSent(true);
      sendMessage(message);
    }}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
