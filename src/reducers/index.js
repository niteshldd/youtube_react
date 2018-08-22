import {combineReducers } from 'redux';
import BookReducer from './reducer_book';

const rootReducer = combineReducers({
    books: BooksReducer
});

export default rootReducer;