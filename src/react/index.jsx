import { createRoot } from "react-dom/client";

import("./app").then(({ App }) => {
  createRoot(document.getElementById("root")).render(<App />);
});
