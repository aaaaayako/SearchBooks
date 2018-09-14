import axios from 'axios'
import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE,
} from '../actionTypes/bookActionType'

const getBooksRequest = () => ({ type: GET_BOOKS_REQUEST })

const getBooksSuccess = json => ({
  type: GET_BOOKS_SUCCESS,
  books: json,
  receiveAt: Date.now(),
})

const getBooksFailure = error => ({
  type: GET_BOOKS_FAILURE,
  error,
})

const getBooks = searchWord => dispatch => {
  dispatch(getBooksRequest())
  return axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${searchWord}`)
    .then(res => dispatch(getBooksSuccess(res.data.items)))
    .catch(err => dispatch(getBooksFailure(err)))
}

export default getBooks
