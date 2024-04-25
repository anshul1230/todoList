import React, { useState } from "react";
import useTodo from "../context/Context";

function TodoItem({ todo }) {
	const { updateTodo, toggleCompletedTodo, deleteTodo } = useTodo();
	const [isEditable, setIsEditable] = useState(false);

	function handleReadOnlyInput(e) {
		e.preventDefault();
		e.stopPropagation();
		setIsEditable((prev) => !prev);
	}
	function handleDelete() {
		deleteTodo(todo.id);
	}

	return (
		<div className=" w-dvw  h-fit">
			<input
				type="checkbox"
				name=""
				id=""
				checked={todo.completed}
				onChange={() => toggleCompletedTodo(todo.id)}
			/>

			<input
				type="text"
				readOnly={!isEditable}
				className={`${todo.completed ? "bg-green-400" : "bg-blue-950"}`}
				value={todo.msg}
				onChange={(e) => {
					e.stopPropagation();
					return updateTodo(todo.id, e.target.value);
				}}
			/>
			<button
				id="editB"
				onClick={(e) => handleReadOnlyInput(e)}
				disabled={todo.completed}
			>
				{!isEditable ? "✍" : "📂"}
			</button>
			<button
				id="deleteB"
				onClick={handleDelete}
			>
				'❌'
			</button>
		</div>
	);
}

export default TodoItem;
