import { createBrowserRouter } from "react-router-dom";
import {Routes_Public} from "./routerConst"

export const router = createBrowserRouter([
    {
      path: "/",
      async lazy(){
        let {default:App} = await import("../App");
        return {
            Component: App
        }
      },
      children: [
        {
          path: Routes_Public.notification,
          async lazy() {
            let {Notification} = await import("../pages/notification/notification");
            return {
              Component: Notification
            }
          }
        }
      ]
    },
  ]);
