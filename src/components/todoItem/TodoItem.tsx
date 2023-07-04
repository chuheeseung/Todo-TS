import React from 'react';
import { TodoInterface } from '../todoList/TodoList';

type TodoProps = {
	todo: TodoInterface;
};

function TodoItem({ todo }: TodoProps): React.ReactElement {
	// Typescript에서 Props 선언하는 법 정리하기
	const { text, completed } = todo;
	return (
		<div style={{ display: 'flex' }}>
			<input type="checkbox" checked={completed} />
			<div>{text}</div>
			<button>수정</button>
			<button>삭제</button>
		</div>
	);
}

export default TodoItem;
