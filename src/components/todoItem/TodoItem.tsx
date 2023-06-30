import React from 'react';

function TodoItem() {
	return (
		<div style={{ display: 'flex' }}>
			<input type="checkbox" name="" id="" />
			<div>text</div>
			<button>수정</button>
			<button>삭제</button>
		</div>
	);
}

export default TodoItem;
