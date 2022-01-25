import { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/Loading';
import Posts from './components/posts/Posts';
import Post from './components/posts/Post';
import PostForm from './components/posts/PostForm';
import axios from 'axios'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(posts => {
        setPosts(posts.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={posts ? <Posts posts={posts} /> : <Loading />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/new" element={<PostForm state={posts} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
