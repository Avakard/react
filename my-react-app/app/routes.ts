import { type RouteConfig, route } from "@react-router/dev/routes";
import { loader as aboutLoader} from "./routes/about";
import { loader2 as aboutLoader2} from "./routes/about";
import type { LoaderFunction } from "react-router";

type CustomConfig = RouteConfig & {loader?: LoaderFunction}

const combinatedAboutLoder =() =>({
    ...aboutLoader(),
    ...aboutLoader2()
});

export default [
    route("/","routes/home.tsx"),
    route("/about","routes/about.tsx"),
    route("/documents","routes/documents.tsx"),
    route("/contacts","routes/contacts.tsx"),
    route("/jobs","routes/jobs.tsx"),
] satisfies RouteConfig;
