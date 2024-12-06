import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoForm = () => {
	const { todos, setTodos } = useContext(TodoContext);
	console.log(todos);
	return <div>TodoForm</div>;
};

export default TodoForm;
