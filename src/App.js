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
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [HasMore, setHasMore] = useState(true);

  //on initial mount
  useEffect(() => {
    loadMoreItems();
  }, []);

  function loadMoreItems() {
    setIsFetching(true);

    //using axios to access the third party API
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
      params: { _page: page, _limit: 15 },
    })
      .then(res => {
        setPosts((prevPosts) => {
          return [...new Set([...prevPosts, ...res.data.map((item) => item)])];
        });
        setPage((prevPageNumber) => prevPageNumber + 1);
        setHasMore(res.data.length > 0);
        setIsFetching(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={posts ? <Posts
            posts={posts}
            isFetching={isFetching}
            HasMore={HasMore}
            loadMoreItems={loadMoreItems}
          /> : <Loading />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/new" element={<PostForm state={posts} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
