import React, { useState } from 'react';
import { TodoInterface } from '../todoList/TodoList';

type TodoProps = {
	todo: TodoInterface;
	onClickCheckBox(id: number): void;
	onUpdate(id: number, newInput: string): void;
	onDelete(): void;
};

// Typescript에서 Props 선언하는 법 정리하기
function TodoItem({
	todo,
	onClickCheckBox,
	onUpdate,
	onDelete,
}: TodoProps): React.ReactElement {
	const { id, text, completed } = todo;
	const [active, setActive] = useState<boolean>(false);
	const [newInput, setNewInput] = useState<string>('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onClickCheckBox(id);
	};

	const handleNewInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewInput(e.target.value);
	};

	const handleUpdate = () => {
		setActive((active) => !active);
	};

	const submitUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
		// e.preventDefault();

		onUpdate(id, newInput);
		setActive((active) => !active);
	};

	const handleDelete = () => {
		console.log('delete');
	};

	return (
		<div style={{ display: 'flex' }}>
			<input type="checkbox" checked={completed} onChange={handleChange} />
			{active ? (
				<input placeholder={text} value={newInput} onChange={handleNewInput} />
			) : (
				<div>{text}</div>
			)}
			{active ? (
				<button onClick={submitUpdate}>완료</button>
			) : (
				<button onClick={handleUpdate}>수정</button>
			)}

			<button onClick={handleDelete}>삭제</button>
		</div>
	);
}

export default TodoItem;
