import React, { useState } from 'react';
import { TodoInterface } from '../todoList/TodoList';

interface InputProps {
	onAdd: (todo: TodoInterface) => void;
}

function AddTodo({ onAdd }: InputProps) {
	// Q. onAdd 타입을 어떻게 선언해줘야 하는지 모르겠다
	const [newInput, setNewInput] = useState<string>('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// Q. e의 타입을 어떻게 선언해야 하지?
		setNewInput(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!newInput) {
			return;
		}

		const newTodo: TodoInterface = {
			id: Math.random(),
			completed: false,
			text: newInput,
		};

		onAdd(newTodo);
		setNewInput('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={newInput} onChange={handleChange} />
			<button>추가</button>
		</form>
	);
}

export default AddTodo;
