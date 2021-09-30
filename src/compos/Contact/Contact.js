import React from 'react';
import './Contact.css';
import {
	Col,
	Container,
	FloatingLabel,
	Form,
	Row,
	Button,
} from 'react-bootstrap';

const Contact = () => {
	return (
		<div className='form-contact'>
			<Container>
				<Form>
					<Row>
						<Col md>
							<FloatingLabel label='Full Name' className='mb-3'>
								<Form.Control
									type='text'
									placeholder='Full Name'
								/>
							</FloatingLabel>
							<FloatingLabel
								label='Phone Number'
								className='mb-3'>
								<Form.Control
									type='tel'
									placeholder='Phone Number'></Form.Control>
							</FloatingLabel>
						</Col>
						<Col md>
							<FloatingLabel
								label='Email Address'
								className='mb-3'>
								<Form.Control
									type='email'
									placeholder='Email Address'
								/>
							</FloatingLabel>
							<FloatingLabel label='User Notes' className='mb-3'>
								<Form.Control
									type='text'
									placeholder='User notes'></Form.Control>
							</FloatingLabel>
						</Col>
					</Row>
					<Button variant='success' type='submit' className='ms-auto'>
						Submit
					</Button>
				</Form>
			</Container>
		</div>
	);
};

export default Contact;
