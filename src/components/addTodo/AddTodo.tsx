import React, { useState } from 'react';
import { TodoInterface } from '../todoList/TodoList';
import styles from './AddTodo.module.css';

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
		<form className={styles.formWrap} onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="새로운 Todo를 입력해주세요."
				className={styles.formInput}
				value={newInput}
				onChange={handleChange}
			/>
			<button className={styles.formButton}>추가</button>
		</form>
	);
}

export default AddTodo;
