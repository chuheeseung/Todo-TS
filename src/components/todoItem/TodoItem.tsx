import React, { useState } from 'react';
import { TodoInterface } from '../todoList/TodoList';
import styles from './TodoItem.module.css';

type TodoProps = {
	todo: TodoInterface;
	onClickCheckBox(id: number): void;
	onUpdate(id: number, newInput: string): void;
	onDelete(id: number): void;
};

// Typescript에서 Props 선언하는 법 정리하기
function TodoItem({
	todo,
	onClickCheckBox,
	onUpdate,
	onDelete,
}: TodoProps): React.ReactElement {
	const { id, text, completed } = todo;
	const [updated, setUpdated] = useState<boolean>(false);
	const [newInput, setNewInput] = useState<string>('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onClickCheckBox(id);
	};

	const handleNewInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewInput(e.target.value);
	};

	const handleUpdate = () => {
		setUpdated((active) => !active);
	};

	const submitUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (newInput !== '') {
			onUpdate(id, newInput);
		}
		setUpdated((active) => !active);
	};

	const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
		onDelete(id);
	};

	return (
		<div className={styles.todoItem} style={{ display: 'flex' }}>
			<input
				type="checkbox"
				className={styles.checkBox}
				checked={completed}
				onChange={handleChange}
			/>
			{updated ? (
				<input
					className={styles.newInput}
					placeholder={text}
					value={newInput}
					onChange={handleNewInput}
				/>
			) : (
				<div className={styles.text}>{text}</div>
			)}
			{updated ? (
				<button
					id={styles.update}
					className={styles.button}
					onClick={submitUpdate}
				>
					완료
				</button>
			) : (
				<button
					className={`${styles.button} ${styles.update}`}
					onClick={handleUpdate}
				>
					수정
				</button>
			)}
			<button className={styles.button} onClick={handleDelete}>
				삭제
			</button>
		</div>
	);
}

export default TodoItem;
