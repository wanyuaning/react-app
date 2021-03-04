const initialState = {
  articles: [
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
  ],
  title: '全局变量'
}

const reducer = (state = initialState, action) => {
  return state
}
export default reducer