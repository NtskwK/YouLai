import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
		],
	},
]);
