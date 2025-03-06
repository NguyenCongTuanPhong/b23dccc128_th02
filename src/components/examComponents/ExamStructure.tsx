import React from 'react';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

const ExamStructure = ({ initialValues, onFinish, isEdit }) => {
	return (
		<Form initialValues={initialValues} onFinish={onFinish}>
			<Form.Item
				name='name'
				label='Tên Cấu Trúc Đề Thi'
				rules={[{ required: true, message: 'Vui lòng nhập tên cấu trúc đề thi' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item name='subject' label='Môn Học' rules={[{ required: true, message: 'Vui lòng chọn môn học' }]}>
				<Select>
					<Option value='Math'>Toán</Option>
					<Option value='Physics'>Vật Lý</Option>
					<Option value='Chemistry'>Hóa Học</Option>
				</Select>
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					{isEdit ? 'Lưu Thay Đổi' : 'Thêm Cấu Trúc Đề Thi'}
				</Button>
			</Form.Item>
		</Form>
	);
};

export default ExamStructure;
