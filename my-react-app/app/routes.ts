import { type RouteConfig, route } from "@react-router/dev/routes";
//import { loader as aboutLoader} from "./routes/about";
//import { loader2 as aboutLoader2} from "./routes/about";
import type { LoaderFunction } from "react-router";

import { createBrowserRouter, redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import PrivatePage from "./routes/private";

/*function checkAuth(){
    if(!isAuthenticated()){
        throw redirect("/")
    }
    return null;
}
*/
//type CustomConfig = RouteConfig & {loader?: LoaderFunction}

const combinatedAboutLoder =() =>({
//    ...aboutLoader(),
  //  ...aboutLoader2()
});

export default [
    route("/","routes/home.tsx"),
    route("/about","routes/about.tsx"),
    route("/documents","routes/documents.tsx"),
    route("/contacts","routes/contacts.tsx"),
    route("/jobs","routes/jobs.tsx"),
    route("/private","routes/private.tsx"),
    route("/login","routes/login.tsx"),

        //,{
           // loader: checkAuth,
  //  }),
] satisfies RouteConfig;

/*export const router = createBrowserRouter([
    {
        path: "/private",
        element: <Priv>,
        loader: checkAuth,
     //   element: typeof PrivatePage
    // element: "routes/private.tsx",
    }
])*/