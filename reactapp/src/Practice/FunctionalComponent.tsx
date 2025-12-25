// import { useState, useEffect } from "react";
// import Button from "./components/Button/Button";
// import Label from "./components/Label/Label";
// import Input from "./components/Input/Input";
// import Checkbox from "./components/Checkbox/Checkbox";

// function PageTitle1() {
//   const [count, setCount] = useState(0);
//   const [checked, setChecked] = useState(false);

//   useEffect(() => {
//     document.title = `Count: ${count}`;
//   }, [count]);

//   console.log("Rendered PageTitle1");

//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <Button label="Add ME" onClick={() => setCount(count + 1)} />
//       <br></br>
//       <br></br>
//       <Label text="Email :" htmlFor="email" required={true} />
//       <Checkbox
//         label="Please Accept Terms & Conditions"
//         checked={checked}
//         onChange={(checked) => setChecked(checked)}
//       />
//       <Input id="email" type="email" placeholder="Enter email" />
//     </>
//   );
// }

// export default PageTitle1;

// import { useState } from "react";

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return <button onClick={handleClick}>Clicked {count} times</button>;
// }
// export default MyButton;

// import { useState } from "react";

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Counters that update separately</h1>
//       <MyButton />
//       <MyButton />
//     </div>
//   );
// }

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return <button onClick={handleClick}>Clicked {count} times</button>;
// }

// import React from "react";
// import { useState } from "react"; // Unused import removed/commented
import React from 'react';

const INITIAL_LIST = [
  {
    id: "0",
    title: "React with RxJS for State Management Tutorial",
    url: "https://www.robinwieruch.de/react-rxjs-state-management-tutorial/",
  },
  {
    id: "1",
    title: "React with Apollo and GraphQL Tutorial",
    url: "https://www.robinwieruch.de/react-graphql-apollo-tutorial",
  },
];

function App() {
  const [list] = React.useState(INITIAL_LIST); // explicit unused setList removed


  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default App;
