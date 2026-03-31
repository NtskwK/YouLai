import { invoke } from "@tauri-apps/api/core";
import { useEffect, useState } from "react";
import "./App.css";
import { MapContainer } from "./components/MapContainer";

function App() {
	const [greetMsg, setGreetMsg] = useState("");
	const [name, setName] = useState("");

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
		setGreetMsg(await invoke("greet", { name }));
	}

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
			<div className="flex-1 min-h-0 p-1 md:p-4">
				<div className="max-w-6xl mx-auto h-100 rounded-lg overflow-hidden">
					<MapContainer />
				</div>
			</div>
			<div className="shrink-0 bg-white border-t border-gray-100 px-4 py-2 md:px-6 md:py-4">
				<div className="max-w-6xl mx-auto">
					<form
						className="flex gap-2"
						onSubmit={(e) => {
							e.preventDefault();
							greet();
						}}
					>
						<input
							id="greet-input"
							className="flex-1 px-2 py-1.5 md:px-4 md:py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all text-sm"
							onChange={(e) => setName(e.currentTarget.value)}
							placeholder="Enter a name..."
						/>
						<button
							type="submit"
							className="px-3 py-1.5 md:px-5 md:py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm"
						>
							Greet
						</button>
					</form>
					{greetMsg && (
						<p className="mt-2 text-gray-700 bg-gray-50 rounded-lg px-3 py-2 text-xs">
							{greetMsg}
						</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
