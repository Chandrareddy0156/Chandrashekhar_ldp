



// Passing props through many components (prop drilling).


// Allows any child component to read shared data directly.
// Page.tsx
import { useContext } from "react";
import { ThemeContext } from "./val";

export default function Page() {
  const theme = useContext(ThemeContext);
  return <h1>Theme: {theme}</h1>;
}
