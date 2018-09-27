import {
  GET_BOOKS,
  GET_MORE_BOOKS,
  GET_BOOKS_FAILURE,
} from '../actionTypes/bookActionType'

const initialState = {
  isFetching: false,
  bookArray: { totalItems: 0, items: [] },
  word: '',
  error: '',
}

const books = (state = initialState, action) => {
  const increasedBooks = state.bookArray.items.concat(action.booksItems)
  switch (action.type) {
    case GET_BOOKS: {
      return {
        ...state,
        isFetching: false,
        bookArray: action.books,
        word: action.searchWord,
        error: '',
      }
    }
    case GET_MORE_BOOKS: {
      return {
        ...state,
        isFetching: false,
        bookArray: { ...action.books, items: increasedBooks },
        word: action.searchWord,
        error: '',
      }
    }
    case GET_BOOKS_FAILURE: {
      return {
        ...state,
        isFetching: false,
        bookArray: { totalItems: 0, items: [] },
        word: action.searchWord,
        error: action.errorMessage,
      }
    }
    default:
      return state
  }
}

export default books
