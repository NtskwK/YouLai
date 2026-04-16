import { Outlet } from "react-router-dom";

export function Layout() {
	return (
		<div className="h-screen w-screen flex flex-col">
			<header className="shrink-0 bg-white border-b border-gray-100 px-4 py-2 md:px-6 md:py-4">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-sm md:text-xl font-bold text-gray-800">
						Welcome to YouLai
					</h1>
					<p className="text-xs md:text-sm text-gray-500">
						Your interactive map experience
					</p>
				</div>
			</header>
			<main className="flex-1 min-h-0 p-1 md:p-4">
				<div className="max-w-6xl mx-auto h-100 rounded-lg overflow-hidden">
					<Outlet />
				</div>
			</main>
		</div>
	);
}
