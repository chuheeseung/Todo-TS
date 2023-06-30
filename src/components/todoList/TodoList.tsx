import React, { useState } from 'react';
import AddTodo from '../addTodo/AddTodo';
import TodoItem from '../todoItem/TodoItem';

export interface TodoInterface {
	// Q. Type으로 선언해야 하나 아니면 Interface로 선언해야 하나?
	id: number;
	completed: boolean;
	text: string;
}

function TodoList() {
	const [todos, setTodos] = useState([]);

	const handleAdd = (todo: TodoInterface) => {
		setTodos([...todos, todo]);
	};

	return (
		<div>
			<AddTodo onAdd={handleAdd} />
			<div>
				<TodoItem />
			</div>
		</div>
	);
}

export default TodoList;