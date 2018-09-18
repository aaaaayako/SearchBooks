import { connect } from 'react-redux'
import BookList from '../components/BookList'
import ErrorMsg from '../components/ErrorMsg'

const mapStateToPorps = state => {
  const length = state.books.length
  const currentState = state.books[length - 1]
  return { books: currentState.items, message: currentState.message }
}

export const GetBookList = connect(mapStateToPorps)(BookList)
export const GetErrorMsg = connect(mapStateToPorps)(ErrorMsg)
