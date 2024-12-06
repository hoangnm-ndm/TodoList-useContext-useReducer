import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { Link } from "react-router-dom";

const HomePage = () => {
	const { todos } = useContext(TodoContext);

	return (
		<div>
			<table className="table table-bordered table-striped">
				<thead>
					<tr className="text-center">
						<th>ID</th>
						<th>Title</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{todos.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.title}</td>
							<td>
								<label htmlFor="">{item.status}</label>
								<input type="checkbox" />
							</td>
							<td>
								<button className="btn btn-danger">Delete</button>
								<Link to={`/todos/update/${item.id}`}>Update</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default HomePage;
