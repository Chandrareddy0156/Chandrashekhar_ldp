import { useEffect, useState } from "react";

function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items); 
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name} {item.price}
        </li>
      ))}
    </ul>
  );
}

export default MyComponent;
