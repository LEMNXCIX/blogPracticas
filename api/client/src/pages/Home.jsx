import { useEffect, useState } from "react";
import Posts from "../components/posts/Posts";
import { Slider } from "../components/Slider";
import { Footer } from "../components/Footer";
import { axios } from "axios";
import { useLocation } from "react-router";
import { axiosInstance } from "../config";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get("/posts?new=true" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Slider />
      <h1 style={{margin:"20px"}} >Los ultimos posts</h1>
      <Posts posts={posts} />
      <Footer />
    </>
  );
}
