import { Link } from "react-router-dom";

export function NotFound() {
	return (
		<div className="h-full flex items-center justify-center">
			<div className="text-center">
				<h1 className="text-9xl font-bold text-gray-200">404</h1>
				<p className="text-lg text-gray-500 mt-2">Page not found</p>
				<Link
					to="/"
					className="mt-4 inline-block text-sm text-blue-500 hover:text-blue-600"
				>
					Go back home
				</Link>
			</div>
		</div>
	);
}
