import React from 'react';
import { TodoInterface } from '../todoList/TodoList';

type TodoProps = {
	todo: TodoInterface;
	onClickCheckBox(id: number): void;
	onUpdate(): void;
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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.checked);
		onClickCheckBox(id);
	};

	const handleUpdate = () => {
		console.log('update');
	};

	const handleDelete = () => {
		console.log('delete');
	};

	return (
		<div style={{ display: 'flex' }}>
			<input type="checkbox" checked={completed} onChange={handleChange} />
			<div>{text}</div>
			<button onClick={handleUpdate}>수정</button>
			<button onClick={handleDelete}>삭제</button>
		</div>
	);
}

export default TodoItem;
