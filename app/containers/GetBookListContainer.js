import { connect } from 'react-redux'
import BookList from '../components/BookList'

const mapStateToPorps = state => {
  const length = state.books.length
  const currentState = state.books[length - 1]
  return { books: currentState.items }
}

const GetBookList = connect(mapStateToPorps)(BookList)

export default GetBookList
