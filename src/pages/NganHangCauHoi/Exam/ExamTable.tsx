import React from 'react';
import { Table, Button } from 'antd';

const ExamTable = ({ exams, onEdit, onDelete }) => {
	const columns = [
		{
			title: 'Tên Đề Thi',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Môn Học',
			dataIndex: 'subject',
			key: 'subject',
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

	return <Table dataSource={exams} columns={columns} rowKey='id' />;
};

export default ExamTable;
