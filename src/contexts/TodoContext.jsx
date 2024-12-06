import { createContext, useEffect, useState } from "react";
import { getAll, removeById } from "../services/crudServices";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		(async () => {
			const data = await getAll("/todos");
			setTodos(data);
		})();
	}, []);
	return <TodoContext.Provider value={{ todos, setTodos }}>{children}</TodoContext.Provider>;
};
