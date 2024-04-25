import { useEffect, useState } from "react";
import "./App.css";
import { TodoContextProvider } from "./context/Context";
import TodoForm from "./components/TodoForm";

function App() {
	const [todos, setTodos] = useState([]);
	const addTodo = (todo) => {
		setTodos((prev) => [
			...prev,
			{ id: Date.now(), msg: todo, completed: false },
		]);

		console.log("add todo is calling");
	};
	const deleteTodo = (id) => {
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};
	const updateTodo = (id, todo) => {
		setTodos((prev) =>
			prev.map((prevTodo) => {
				console.log("hello this is update", prevTodo.id, prevTodo);
				return prevTodo.id === id ? { ...prevTodo, msg: todo } : prevTodo;
			})
		);
	};
	const toggleCompletedTodo = (id) => {
		setTodos((prev) =>
			prev.map((prevTodo) =>
				prevTodo.id === id
					? { ...prevTodo, completed: !prevTodo.completed }
					: prevTodo
			)
		);
	};
	useEffect(() => {
		const todoslocal = JSON.parse(localStorage.getItem("todosLocal"));
		if (todoslocal?.length > 0) {
			setTodos(todoslocal);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("todosLocal", JSON.stringify(todos));
	}, [todos]);

	return (
		<TodoContextProvider
			value={{ todos, addTodo, deleteTodo, updateTodo, toggleCompletedTodo }}
		>
			<TodoForm />
		</TodoContextProvider>
	);
}

export default App;
