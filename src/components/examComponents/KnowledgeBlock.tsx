import React from 'react';
import { Form, Input, Button } from 'antd';

const KnowledgeBlock = ({ initialValues, onFinish, isEdit }) => {
	return (
		<Form initialValues={initialValues} onFinish={onFinish}>
			<Form.Item
				name='name'
				label='Tên Khối Kiến Thức'
				rules={[{ required: true, message: 'Vui lòng nhập tên khối kiến thức' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					{isEdit ? 'Lưu Thay Đổi' : 'Thêm Khối Kiến Thức'}
				</Button>
			</Form.Item>
		</Form>
	);
};

export default KnowledgeBlock;
