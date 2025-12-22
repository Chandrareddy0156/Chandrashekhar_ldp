import { createRoot } from "react-dom/client";

// import Hello from "./Components/Picture";
// import Gallery from './Gallery.tsx'
// import App from './App'
const rootElement = document.getElementById("root")!;
// import Counter from "./UseeffectCount";
// import Example from "./UseeffectCount";
// import Cart from "./functional&Class-components.js";
// import Countdown from "./functional&Class-components.js";
// import NameInput from "./functional&Class-components.js";
// import { Page } from "./stories/Page.js";

// import Hello from "./ClassComponent";
// import PageTitle1 from "./FunctionalComponene";

import MyButton from "./FunctionalComponene";
createRoot(rootElement).render(
  <>
    {/* <Countdown /> */}
    {/* <NameInput /> */}
    {/* <Countdown /> */}
    {/* <Hello /> */}
    {/* <PageTitle1 /> */}
    <MyButton />
  </>

  // <App />
);
