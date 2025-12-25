import { createRoot } from "react-dom/client";
// import Gallery from "./Gallery"
// import Events from "./Events";

import Form from "./Practice/Events";

const rootElement = document.getElementById("root")!;



createRoot(rootElement).render(
  <>
  {/* <Gallery /> */}
  {/* <Events /> */}
  {/* <Button1 /> */}
  <Form />
  </>
);
