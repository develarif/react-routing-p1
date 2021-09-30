import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const BlogSingle = () => {
    const { postID } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        let postUrl = `https://jsonplaceholder.typicode.com/posts/${postID}`;
        fetch(postUrl)
            .then((res) => res.json())
            .then((err) => setPost(err));
    }, []);

    return (
        <Container>
            <article>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </article>
        </Container>
    );
};

export default BlogSingle;
