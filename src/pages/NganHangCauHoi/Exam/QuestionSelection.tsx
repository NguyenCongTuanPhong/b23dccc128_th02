import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';

const QuestionSelection = ({ selectedQuestions, setSelectedQuestions }) => {
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		const storedQuestions = JSON.parse(localStorage.getItem('questions') || '[]');
		setQuestions(storedQuestions);
	}, []);

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
				<Button
					onClick={() => {
						if (selectedQuestions.some((q) => q.id === record.id)) {
							setSelectedQuestions(selectedQuestions.filter((q) => q.id !== record.id));
						} else {
							setSelectedQuestions([...selectedQuestions, record]);
						}
					}}
				>
					{selectedQuestions.some((q) => q.id === record.id) ? 'Bỏ Chọn' : 'Chọn'}
				</Button>
			),
		},
	];

	return <Table dataSource={questions} columns={columns} rowKey='id' />;
};

export default QuestionSelection;
