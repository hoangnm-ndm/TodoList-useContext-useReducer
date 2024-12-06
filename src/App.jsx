import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
	return (
		<>
			<TodoProvider>
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</TodoProvider>
		</>
	);
}

export default App;
