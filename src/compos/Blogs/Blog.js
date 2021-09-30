import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = (props) => {
    const { id, title, body } = props.post;
    return (
        <Col xs={12} sm={6} md={4}>
            <h3>{title.slice(0, 25)}</h3>
            <p>{body.slice(0, 150)}</p>
            <Link to={`Blog/${id}`}>Read More</Link>
        </Col>
    );
};

export default Blog;
