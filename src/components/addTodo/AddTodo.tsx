import React, { useState } from 'react';
import { TodoInterface } from '../todoList/TodoList';
// import styles from './AddTodo.module.css';

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
		<form className="w-full mb-2" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="새로운 Todo를 입력해주세요."
				className="w-1/5 h-8 px-2 py-2 text-2xl focus:to-blue-600"
				value={newInput}
				onChange={handleChange}
			/>
			<button className="px-">추가</button>
		</form>
	);
}

export default AddTodo;
