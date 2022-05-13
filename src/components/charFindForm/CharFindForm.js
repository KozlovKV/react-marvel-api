import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Spinner from '../spinner/Spinner';

import useMarvelService from '../../services/MarvelService';

import './charFindForm.scss';

export default function CharFindForm(props) {
	const { loading, getCharactersByNamePart } = useMarvelService();
	const [chars, setChars] = useState([]);

	function getCharsResultList() {
		if (loading) return <Spinner width="150px" />;
		if (!chars.length) return null;
		return <>
			<h3 className="success">
				Founded {chars.length} char{chars.length > 1 ? 's' : ''}
			</h3>
			<ul className="char__find__results-list">
				{chars.map(char =>
					<li key={char.id} className="row char__find__results-item">
						<h4>{char.name}</h4>
						<Link to={`/chars/${char.id}`} className="button button__secondary">
							<div className="inner">char page</div>
						</Link>
					</li>
				)}
			</ul>
		</>
	}

	return <div className="char__find">
		<h3>Or find a characters by name:</h3>
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
				<button type="submit" className="button button__main">
					<div className="inner">find</div>
				</button>
				<ErrorMessage name="name" className="error" component="h3" />
			</Form>
		</Formik>
		{getCharsResultList()}
	</div>
}