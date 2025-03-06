import React from 'react';
import { Table, Button } from 'antd';

const QuestionBank = ({ questions, onEdit, onDelete }) => {
	const columns = [
		{
			title: 'Mã Câu Hỏi',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'Nội Dung Câu Hỏi',
			dataIndex: 'content',
			key: 'content',
		},
		{
			title: 'Mức Độ Khó',
			dataIndex: 'difficulty',
			key: 'difficulty',
		},
		{
			title: 'Khối Kiến Thức',
			dataIndex: 'knowledgeBlock',
			key: 'knowledgeBlock',
		},
		{
			title: 'Lựa Chọn',
			key: 'action',
			render: (text, record) => (
				<span>
					<Button onClick={() => onEdit(record)}>Sửa</Button>
					<Button onClick={() => onDelete(record)} type='primary' danger style={{ marginLeft: 10 }}>
						Xóa
					</Button>
				</span>
			),
		},
	];

	return <Table dataSource={questions} columns={columns} rowKey='id' />;
};

export default QuestionBank;
