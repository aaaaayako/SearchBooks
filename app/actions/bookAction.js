import axios from 'axios'
import {
  GET_BOOKS,
  GET_MORE_BOOKS,
  GET_BOOKS_FAILURE,
} from '../actionTypes/bookActionType'

const createCommonAction = (json, searchWord) => ({
  type: GET_BOOKS,
  books: json,
  receiveAt: Date.now(),
  searchWord,
})

const createMoreSearchAction = (json, searchWord) => ({
  type: GET_MORE_BOOKS,
  books: json,
  booksItems: json.items,
  receiveAt: Date.now(),
  searchWord,
})

const createFailAction = (errorMessage, searchWord) => ({
  type: GET_BOOKS_FAILURE,
  receiveAt: Date.now(),
  searchWord,
  errorMessage,
})

const getBooks = (searchWord, startIndex = 0) => dispatch =>
  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchWord}&startIndex=${startIndex}&maxResults=40`,
    )
    .then(res => {
      // 検索ワードにマッチする書籍が存在しない場合
      if (startIndex === 0 && res.data.items === undefined) {
        dispatch(
          createFailAction('該当する書籍が見つかりませんでした', searchWord),
        )
      } else if (startIndex === 0) {
        dispatch(createCommonAction(res.data, searchWord))
      } else {
        dispatch(createMoreSearchAction(res.data, searchWord))
      }
    })
    .catch(
      err =>
        err.message === 'Network Error'
          ? dispatch(
              createFailAction(
                `【オフライン】"${searchWord}"はオンライン時に未検索、または全書籍表示していないため、現在表示できません`,
                searchWord,
              ),
            )
          : dispatch(createFailAction(err.message, searchWord)),
    )

export default getBooks
