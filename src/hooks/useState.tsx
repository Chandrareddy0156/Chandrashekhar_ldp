// import React ,{ useState } from "react";
// function App() {
//   const [count, setCount] = useState(4);

//   function decrementVal() {
//     setCount((prevCount) => prevCount - 1);
//   }

  
//   function incrementVal() {
//     setCount((prevCount) => prevCount + 1);
//   }

//   return (
//     <>
//       <button onClick={decrementVal}>-</button>
//       <span>{count}</span>
//       <button onClick={incrementVal}>+</button>
//     </>
//   );
// }

// export default App;


import { useEffect, useState } from "react";

/** Item type coming from API */
interface Item {
  id: number;
  name: string;
  price: number;
}

/** API response shape */
interface ItemsResponse {
  items: Item[];
}

const MyComponent: React.FC = () => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json() as Promise<ItemsResponse>;
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items);
        },
        (err: Error) => {
          setIsLoaded(true);
          setError(err);
        }
      );
  }, []);

  

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} {item.price}
        </li>
      ))}
    </ul>
  );
};

export default MyComponent;
