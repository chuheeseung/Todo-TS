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
	const [todos, setTodos] = useState<TodoInterface[]>([]);

	const handleAdd = (todo: TodoInterface) => {
		setTodos([...todos, todo]);
	};

	const handleCheckBox = (id: number) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const handleUpdate = (id: number, newInput: string) => {
		setTodos(
			todos.map((todo) => (todo.id === id ? { ...todo, text: newInput } : todo))
		);
	};

	const handleDelete = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<div>
			<AddTodo onAdd={handleAdd} />
			<div>
				{todos.map((item) => (
					<TodoItem
						key={item.id}
						todo={item}
						onClickCheckBox={handleCheckBox}
						onUpdate={handleUpdate}
						onDelete={handleDelete}
					/>
				))}
			</div>
		</div>
	);
}

export default TodoList;
