import { GET_ARTICLE, ADD_ARTICLE, DELETE_ARTICLE, GET_ONE_ARTICLE,UPDATE_ONE_ARTICLE} from '../actions/types';

export const initalstate = {
	articles: []
	// { id: 1 ,title: 'game of thrones', author: 'fortune', description: 'best book ever' }
};

const articleReducer = (state = initalstate, action) => {
	switch (action.type) {
		case GET_ARTICLE:
			return {
				...state,
				articles: action.payload
			};

		case ADD_ARTICLE:
			return {
				...state,
				articles:[action.payload, ...state.articles]
            };
        case GET_ONE_ARTICLE:
            return {
                ...state,
                articles: action.payload
            }
		case UPDATE_ONE_ARTICLE:
			return {
				...state,
				articles:[action.payload, ...state.articles]
			}
		case DELETE_ARTICLE:
			return {
				...state,
                articles: state.articles.filter((article) => article._id !== action.payload)
			};
		default:
			return state;
	}
};

export default articleReducer;
