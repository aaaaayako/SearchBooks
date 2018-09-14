import React from 'react'
import styled from 'styled-components'

import store from './store'
import getBooks from './actions/bookAction'
import SearchBox from './components/SearchBox'

import GetBookList from './containers/GetBookListContainer'

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

// const ErrorText = styled.p`
//   color: #ff0033;
//   font-size: 14px;
//   text-align: center;
// `

// const ErrorMessage = props => {
//   const { isUndefindBooks } = props
//   const errorMsg = '該当書籍がありません'
//   return <ErrorText>{isUndefindBooks && errorMsg}</ErrorText>
// }

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       books: [],
//       isUndefindBooks: false,
//     }
//     this.setSearchWord = this.setSearchWord.bind(this)
//   }

//   render() {
//     const { books, isUndefindBooks } = this.state
//     return (
//       <ContentWrap>
//         <SearchBox setSearchWord={this.setSearchWord} />
//         <ErrorMessage isUndefindBooks={isUndefindBooks} />
//         <BookList books={books} />
//       </ContentWrap>
//     )
//   }
// }

const App = () => {
  const setSearchWord = ev => {
    ev.preventDefault()
    if (ev.target.inputText.value) {
      const inputWord = ev.target.inputText.value
      store.dispatch(getBooks(inputWord))
    } else {
      alert('検索ワードを入力してください')
    }
  }

  return (
    <ContentWrap>
      <SearchBox setSearchWord={ev => setSearchWord(ev)} />
      <BooksContainer>
        <GetBookList />
      </BooksContainer>
    </ContentWrap>
  )
}

export default App
