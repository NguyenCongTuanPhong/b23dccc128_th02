import React, { useState } from 'react';
import { Form, Input, Select, Button, InputNumber, message } from 'antd';

const { Option } = Select;

const ExamForm = ({ initialValues, onFinish, isEdit }) => {
	const [requirements, setRequirements] = useState(initialValues?.requirements || {});

	const generateQuestions = (questionRequirements) => {
		const storedQuestions = JSON.parse(localStorage.getItem('questions') || '[]');
		let selectedQuestions = [];

		for (const [difficulty, count] of Object.entries(questionRequirements)) {
			const questionsByDifficulty = storedQuestions.filter((q) => q.difficulty === difficulty);
			if (questionsByDifficulty.length < count) {
				return [];
			}
			selectedQuestions = selectedQuestions.concat(questionsByDifficulty.slice(0, count));
		}

		return selectedQuestions;
	};

	const handleFinish = (values) => {
		const questionRequirements = values.requirements; // ✅ Đổi tên để tránh trùng lặp
		const generatedQuestions = generateQuestions(questionRequirements);

		if (generatedQuestions.length === 0) {
			message.error('Không có đủ câu hỏi phù hợp.');
			return;
		}

		onFinish({ ...values, questions: generatedQuestions });
	};

	return (
		<Form initialValues={initialValues} onFinish={handleFinish}>
			<Form.Item name='name' label='Tên Đề Thi' rules={[{ required: true, message: 'Vui lòng nhập tên đề thi' }]}>
				<Input />
			</Form.Item>
			<Form.Item name='subject' label='Môn Học' rules={[{ required: true, message: 'Vui lòng chọn môn học' }]}>
				<Select>
					<Option value='Math'>Toán</Option>
					<Option value='Physics'>Vật Lý</Option>
					<Option value='Chemistry'>Hóa Học</Option>
				</Select>
			</Form.Item>
			<Form.Item label='Số lượng câu hỏi theo mức độ khó'>
				<Form.Item label='Dễ' name={['requirements', 'easy']} noStyle>
					<InputNumber min={0} onChange={(value) => setRequirements({ ...requirements, easy: value })} />
				</Form.Item>
				<Form.Item label='Trung bình' name={['requirements', 'medium']} noStyle>
					<InputNumber min={0} onChange={(value) => setRequirements({ ...requirements, medium: value })} />
				</Form.Item>
				<Form.Item label='Khó' name={['requirements', 'hard']} noStyle>
					<InputNumber min={0} onChange={(value) => setRequirements({ ...requirements, hard: value })} />
				</Form.Item>
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					{isEdit ? 'Lưu Thay Đổi' : 'Thêm Đề Thi'}
				</Button>
			</Form.Item>
		</Form>
	);
};

export default ExamForm;
