import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Spinner from '../spinner/Spinner';

import useMarvelService from '../../services/MarvelService';

import './charFindForm.scss';

export default function CharFindForm(props) {
	const { loading, getCharactersByNamePart } = useMarvelService();
	const [chars, setChars] = useState([]);

	useEffect(() => { console.log(chars) }, [chars]);

	return <div className="char__find">
		<h3>Or find a character by name:</h3>
		<Formik
			initialValues={{ name: '' }}
			validationSchema={Yup.object({
				name: Yup.string().required('Name is required').min(2, '2 symbols minimum')
			})}
			onSubmit={({ name }) => {
				getCharactersByNamePart(name)
					.then(setChars);
			}}
		>
			<Form className="char__find__form row">
				<Field name="name" placeholder="Enter name" />
				{!loading ?
				<button className="button button__main">
					<div className="inner">find</div>
				</button>
				: <Spinner />}
				<ErrorMessage name="name" className="error" component="h3" />
			</Form>
		</Formik>
		{chars.length ? <div className="row">
			<h3 className="success">
				Founded {chars.length} char{chars.length > 1 ? 's' : ''}
			</h3>
			<button className="button button__secondary">
				<div className="inner">Char page</div>
			</button>
		</div> : null}
	</div>
}