import React, { useState } from "react";
import TodoItem from "./TodoItem";
import useTodo from "../context/Context";

function TodoForm() {
	const { todos, addTodo } = useTodo();
	const [todo, setTodo] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		addTodo(todo);
		setTodo("");
		console.log("form is submitted");
	}

	return (
		<form
			className="  h-96  w-96 bg-blue-950  mx-auto "
			onSubmit={(e) => handleSubmit(e)}
		>
			<div className=" flex w-auto h-1/3 ">
				<input
					type="text"
					className=" w-full"
					placeholder="write todo here..."
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
				/>
				<button
					type="submit"
					className=" w-8  bg-red-400 "
				>
					Add
				</button>
			</div>
			<div className=" flex flex-col">
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
					/>
				))}
				{console.log(todos)}
			</div>
		</form>
	);
}

export default TodoForm;
