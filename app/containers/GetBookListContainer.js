import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import getBooks from '../actions'
import SearchBox from '../components/SearchBox'
import BookList from '../components/BookList'
import ErrorMessage from '../components/ErrorMessage'

const ContentWrap = styled.div`
  font-family: '游ゴシック体', YuGothic, '游ゴシック Medium', 'Yu Gothic Medium',
    '游ゴシック', 'Yu Gothic', 'メイリオ', sans-serif;
  color: #333;
  min-width: 320px;
  background-color: #eee;
  height: 100%;
`
const BooksContainer = styled.div`
  max-width: 1024px;
  padding: 20px;
  margin: 0 auto;
  min-height: 100vh;
`

const MoreViewButton = styled.div`
  margin: 20px auto;
  padding: 20px;
  width: 200px;
  text-align: center;
  border-radius: 4px;
  background-color: #3f51b5;
  color: #fff;
`

const mapStateToPorps = state => ({
  books: state.books,
})

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(getBooks, dispatch),
})

const GetBookListContainer = props => {
  const { books, action } = props
  const bookArrLength = books.bookArray.items.length
  return (
    <ContentWrap>
      <SearchBox getBooks={action.getBooks} />
      {books.error === '' ? null : <ErrorMessage errorMessage={books.error} />}
      <BooksContainer>
        <BookList books={books} />
      </BooksContainer>
      {bookArrLength === books.bookArray.totalItems ? null : (
        <MoreViewButton
          onClick={ev => {
            ev.preventDefault()
            action.getBooks(books.word, bookArrLength)
          }}
        >
          もっと見る
        </MoreViewButton>
      )}
    </ContentWrap>
  )
}

export default connect(
  mapStateToPorps,
  mapDispatchToProps,
)(GetBookListContainer)
