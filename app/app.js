import React from 'react'
import styled from 'styled-components'

import store from './store'
import getBooks from './actions/bookAction'
import SearchBox from './components/SearchBox'

import { GetBookList, GetErrorMsg } from './containers/GetBookListContainer'

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

const App = () => {
  const setSearchWord = ev => {
    ev.preventDefault()
    const inputWord = ev.target.inputText.value
    store.dispatch(getBooks(inputWord))
  }

  return (
    <ContentWrap>
      <SearchBox setSearchWord={ev => setSearchWord(ev)} />
      <GetErrorMsg />
      <BooksContainer>
        <GetBookList />
      </BooksContainer>
    </ContentWrap>
  )
}

export default App
