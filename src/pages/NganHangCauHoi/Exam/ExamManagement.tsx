import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import ExamForm from './ExamForm';
import ExamTable from './ExamTable';

const ExamManagement = () => {
	const [exams, setExams] = useState([]);
	const [visible, setVisible] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [currentExam, setCurrentExam] = useState(null);

	useEffect(() => {
		const storedExams = JSON.parse(localStorage.getItem('exams') || '[]');
		setExams(storedExams);
	}, []);

	const handleAddExam = () => {
		setVisible(true);
		setIsEdit(false);
		setCurrentExam(null);
	};

	const handleEditExam = (exam) => {
		setVisible(true);
		setIsEdit(true);
		setCurrentExam(exam);
	};

	const handleDeleteExam = (exam) => {
		const updatedExams = exams.filter((e) => e.id !== exam.id);
		localStorage.setItem('exams', JSON.stringify(updatedExams));
		setExams(updatedExams);
	};

	const handleSaveExam = (values) => {
		const updatedExams = isEdit
			? exams.map((e) => (e.id === currentExam.id ? { ...currentExam, ...values } : e))
			: [...exams, { ...values, id: Date.now() }];
		localStorage.setItem('exams', JSON.stringify(updatedExams));
		setExams(updatedExams);
		setVisible(false);
	};

	return (
		<div>
			<Button type='primary' onClick={handleAddExam}>
				Thêm Đề Thi
			</Button>
			<ExamTable exams={exams} onEdit={handleEditExam} onDelete={handleDeleteExam} />
			<Modal
				title={isEdit ? 'Sửa Đề Thi' : 'Thêm Đề Thi'}
				visible={visible}
				onCancel={() => setVisible(false)}
				footer={null}
			>
				<ExamForm initialValues={currentExam} onFinish={handleSaveExam} isEdit={isEdit} />
			</Modal>
		</div>
	);
};

export default ExamManagement;
