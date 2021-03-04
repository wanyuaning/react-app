import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./store/reducer"
const store = createStore(reducer)

// 元素
//const ele = <h1>欢迎进入React的世界</h1>
const ele = React.createElement('h1', {className: 'blue', children: 'Hello, world'})

// 组件
function Demo(props) {
  return (
    <div className="red">
      {ele}
      { 
        props.list.map((item, index) => {
          return <span key={index}>{item}</span>
        })
      }
    </div>
  );
}


ReactDOM.render(  
  <React.StrictMode>
    <Provider store={store}>
      <App />
    
      <Demo list={['张三', '李四', '王五']} />
      {ele}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
