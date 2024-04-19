import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      async lazy(){
        let {default:App} = await import("../App");
        return {
            Component: App
        }
      }
    },
  ]);
