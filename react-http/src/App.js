import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './component/PostList';
import PostForm from './component/PostForm';

function App() {
  return (
    <div className="App">
      {/** Get HTTP call */}
      {/* <PostList/> */}

      {/** Post Http Call */}
      <PostForm/>
    </div>
  );
}

export default App;
