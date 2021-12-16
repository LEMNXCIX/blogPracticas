import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Posts from "../components/posts/Posts";
import Sidebar from "../components/sidebar/Sidebar";
import styled from "styled-components";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts?new=true" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Container>
        {" "}
        aqui va a ir algo mas
        <hr/>
        los ultimos posts
        <Posts posts={posts} />
        <Sidebar />
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
`;
