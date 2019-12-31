import { GET_ARTICLE, ADD_ARTICLE, DELETE_ARTICLE, GET_ONE_ARTICLE, UPDATE_ONE_ARTICLE} from './types';

import axios from 'axios';



export const getAtricle =  () => dispatch  => {
     axios.get('http://localhost:4000/api/routes/article')
	 
		 .then((result) => {
		// console.log(result)
		dispatch ({
			type: GET_ARTICLE,
			payload: result.data
		})
	})

};

export const addArticle = (article) => dispatch => {
	axios.post('http://localhost:4000/api/routes/article', article)
	 
	.then((result) => {
   console.log(result)
   dispatch ({
	type: ADD_ARTICLE,
	payload: result
   })
})

	// return {
	// 		type: ADD_ARTICLE,
	// payload: article
	// }
};

export const deleteAtricle = (_id) => dispatch => {
	// console.log('hell delete')
	axios
	.delete(`http://localhost:4000/api/routes/article/${_id}`)
	.then((res) => {
		// console.log(res)
		dispatch ({
			type: DELETE_ARTICLE,
		 payload: _id
		})
	 })
};


export const getOneArticle = (id) =>(dispatch)  => {
    axios
	.get(`http://localhost:4000/api/routes/article/${id}`)
		.then(res => {
			console.log(res)
			dispatch({
				type: GET_ONE_ARTICLE,
				payload:res.data
		})
	})
}


export const updateOne= (id, article) => dispatch => {
	axios.put(`http://localhost:4000/api/routes/article/${id}`, article)
	 
	.then((result) => {
   console.log(result)
   dispatch ({
	type: UPDATE_ONE_ARTICLE,
	payload: result
   })
})

	// return {
	// 		type: ADD_ARTICLE,
	// payload: article
	// }
};
