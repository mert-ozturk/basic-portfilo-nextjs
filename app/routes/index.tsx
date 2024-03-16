import { RouteObject } from "react-router";
import Home from "../page";

const routes: RouteObject[] = [
	{
		path: "/",
		children: [{ path: "", element: <Home /> }],
	},
];

export default routes;