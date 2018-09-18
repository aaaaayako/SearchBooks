import axios from 'axios'
import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE,
  GET_NO_BOOKS,
} from '../actionTypes/bookActionType'

const getBooksRequest = () => ({ type: GET_BOOKS_REQUEST })

const getBooksSuccess = json => ({
  type: GET_BOOKS_SUCCESS,
  books: json,
  receiveAt: Date.now(),
})

const getBooksFailure = error => ({
  type: GET_BOOKS_FAILURE,
  err: error.message,
})

const getNoBooks = error => ({
  type: GET_NO_BOOKS,
  message: error,
})

const getBooks = searchWord => dispatch => {
  dispatch(getBooksRequest())
  return axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchWord}&startIndex=1&maxResults=40`,
    )
    .then(res => {
      // 検索ワードにマッチする書籍が存在しない場合
      if (res.data.items === undefined) {
        dispatch(getNoBooks('該当する書籍が見つかりませんでした'))
      } else {
        dispatch(getBooksSuccess(res.data.items))
      }
    })
    .catch(
      err =>
        err.message === 'Network Error'
          ? dispatch(
              getNoBooks(
                '【オフライン】検索したことのある書籍のみ検索できます',
              ),
            )
          : dispatch(getBooksFailure(err)),
    )
}

export default getBooks
