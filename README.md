# Reactはじめの一歩

stateとpropsの概念を理解する

## 課題7
・課題
GoogleBooks APIを叩いて、ユーザの欲する書籍のデータを取得し、表示させる。

・課題について
前回の課題でmock APIから提供されるデータの整理を実施しましたね。
それに検索窓をつけて、好きな書籍データを取得できるようにしようってところです。
復習 + 新規要素(検索窓)追加みたいなイメージ。
デザインは検索窓がついてて、書籍一覧が綺麗に表示できていれば何でも構いません。

・リポジトリ及びブランチ
- リポジトリ
http://gitlab102.gnavi.co.jp/nakamura-ge/react-practice-01.git
- ブランチ
masterを更新しましたので、最新のmasterから適当な作業ブランチを切ってください. npm iも忘れずに.
- MR先
feature/bookSearch_MR


・使うAPI
https://www.googleapis.com/books/v1/volumes?q=japan

普通はAPI Keyとか取得しないといけないっぽいけど、一旦使えるのでこれで。
末尾のjapanの部分を変えると、違う書籍を取得できます。