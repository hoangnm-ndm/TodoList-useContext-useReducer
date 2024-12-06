## 1. Sử dụng createContext() để tạo ra React Context

```jsx
//contexts/TodoContext.js
const TodoContext = createContext();
```

Có thể cấu hình luôn Provider trong file TodoContext.js

```jsx
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
```

## 2. Bọc các component cần chia sẻ dữ liệu trong Provider

```jsx
//App.jsx
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
```

## 3. Sử dụng useContext() để lấy dữ liệu từ Context

```jsx
//pages/TodoList.jsx

const { todos, setTodos } = useContext(TodoContext);
```
