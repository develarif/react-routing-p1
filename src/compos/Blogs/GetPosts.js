import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import { Container, Row } from 'react-bootstrap';

const GetPosts = () => {
    const axios = require('axios');
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => setPosts(res.data))
            .catch((err) => console.log(err));
    }, [axios]);

    return (
        <Container>
            <Row>
                {posts.map((post) => (
                    <Blog post={post} key={post.id}></Blog>
                ))}
            </Row>
        </Container>
    );
};

export default GetPosts;
