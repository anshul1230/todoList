import { useContext, createContext } from "react";

export const TodoContext = createContext({
	todos: [{ id: 1, msg: "hello ", completedTodo: false }],
	addTodo: (todo) => {},
	deleteTodo: (id) => {},
	updateTodo: (id, todo) => {},
	toggleCompletedTodo: (id) => {},
});

const TodoContextProvider = TodoContext.Provider;
export { TodoContextProvider };
export default function useTodo() {
	return useContext(TodoContext);
}
