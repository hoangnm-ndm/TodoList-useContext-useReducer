import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const HomePage = () => {
	const value = useContext(TodoContext);
	console.log(value);
	return <div>HomePage</div>;
};

export default HomePage;
