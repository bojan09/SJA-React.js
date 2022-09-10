import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// components
import { Nav } from "./components/Nav.js";
import { Posts } from "./components/Posts.js";
import { Comments } from "./components/Comments.js";
import { Gallery } from "./components/Gallery.js";
import { API_URL, POSTS_SIZE } from "./utilities/Constants.js";

import { GalleryProvider } from "./providers/GalleryProvider";

const App = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/posts?_limit=${POSTS_SIZE}`);
      const data = await response.json();
      await new Promise((r) => setTimeout(r, 5000));
      setPosts(data);
    };

    fetchData();
  }, []);

  console.log("APP", posts);

  return (
    <div>
      <Nav />
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      <GalleryProvider>
        <Routes>
          <Route path="/posts" element={<Posts posts={posts} />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </GalleryProvider>
    </div>
  );
};

export default App;
