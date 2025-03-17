import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    route("/","routes/home.tsx"),
    route("/about","routes/about.tsx"),
    route("/documents","routes/documents.tsx"),
    route("/contacts","routes/contacts.tsx"),
    route("/jobs","routes/jobs.tsx"),
] satisfies RouteConfig;
