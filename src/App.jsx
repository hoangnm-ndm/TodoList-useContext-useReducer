import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { TodoProvider } from "./contexts/TodoContext";
import TodoForm from "./pages/TodoForm";

function App() {
	return (
		<>
			<TodoProvider>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/add" element={<TodoForm />} />
				</Routes>
			</TodoProvider>
		</>
	);
}

export default App;
