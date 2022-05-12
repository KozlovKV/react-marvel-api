import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './charFindForm.scss';
import { useState } from 'react';

export default function CharFindForm(props) {
	const [name, setName] = useState('');

	return <div className="char__find">
		<h3>Or find a character by name:</h3>
		<Formik
			initialValues={{ name: '' }}
			validationSchema={Yup.object({
				name: Yup.string().required('Name is required').min(2, '2 symbols minimum')
			})}
			onSubmit={({ name }) => { setName(name) }}
		>
			<Form className="char__find__form row">
				<Field name="name" placeholder="Enter name" />
				<button className="button button__main">
					<div className="inner">find</div>
				</button>
				<ErrorMessage name="name" className="error" component="h3" />
			</Form>
		</Formik>
		{name ? <div className="row">
			<h3 className="success">Char {name} founded</h3>
			<button className="button button__secondary">
				<div className="inner">Char page</div>
			</button>
		</div> : null}
	</div>
}