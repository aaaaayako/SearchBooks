import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE,
  GET_NO_BOOKS,
} from '../actionTypes/bookActionType'

const initialState = {
  isFetching: false,
  items: [],
}

const books = (state = [initialState], action) => {
  switch (action.type) {
    case GET_BOOKS_REQUEST:
      return [
        ...state,
        {
          isFetching: true,
          items: [],
        },
      ]
    case GET_BOOKS_SUCCESS:
      return [
        ...state,
        {
          isFetching: false,
          items: action.books,
          lastUpdated: action.receivedAt,
        },
      ]
    case GET_BOOKS_FAILURE:
      return [
        ...state,
        {
          isFetching: false,
          error: action.error,
        },
      ]
    case GET_NO_BOOKS:
      return [
        ...state,
        {
          isFetching: false,
          message: action.message,
        },
      ]
    default:
      return state
  }
}

export default books
