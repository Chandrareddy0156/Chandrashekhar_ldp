import Button from "./Child.tsx";
// import Card from "./Child";

// const Parent = () => {
//   return (
//     // <div>
//     //   <h1>Parent Component</h1>
//     //   <Button label="Click Me" />
//     // </div>
//     <Card>
//       <h2>Title</h2>
//       <p>This content comes from parent</p>
//     </Card>
//   );
// };

// export default Parent;

const App = () => {
  const handleClick = () => {
    alert("Clicked from Parent!");
  };

  return <Button onClick={handleClick} />;
};
export default App;
