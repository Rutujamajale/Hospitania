import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import { CardCountContext } from "./Context/CardCountContext";
import { useState } from "react";

function App() {
	const [count, setCount] = useState(1);
	const clearCount = ()=>{

	}	
	return (
		<Third.Provider value="">
			<Second.Provider value="">
				<CardCountContext.Provider value={{ count, setCount,clearCount }}>
					<Navbar />
					<Body />
				</CardCountContext.Provider>
			</Second.Provider>
		</Third.Provider>
	);
}

export default App;
