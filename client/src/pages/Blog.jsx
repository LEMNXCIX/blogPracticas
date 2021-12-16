import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Posts from "../components/posts/Posts";
import styled from "styled-components";
import axios from "axios";
import { useLocation } from "react-router";
import Sidebar from "../components/sidebar/Sidebar";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />

      <Container>
        <Posts posts={posts} />
<Sidebar/>
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
`;
