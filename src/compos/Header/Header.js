import './Header.css';
import React from 'react';
import Logo from '../../logo.svg';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import GetPosts from '../Blogs/GetPosts';
import BlogSingle from '../BlogSingle/BlogSingle';

const Header = () => {
    return (
        <BrowserRouter>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Container>
                    <Link to='/' className='navbar-brand'>
                        <img src={Logo} alt='' />
                        OurLogo
                    </Link>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse
                        id='responsive-navbar-nav'
                        className='mx-3'
                    >
                        <Nav className='ms-auto'>
                            <Link to='/getposts' className='nav-link'>
                                Blog
                            </Link>
                            <Link to='/contact' className='nav-link'>
                                Contact
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Switch>
                <Route exact path='/'>
                    <Home></Home>
                </Route>
                <Route path='/contact'>
                    <Contact></Contact>
                </Route>
                <Route path='/getposts'>
                    <GetPosts></GetPosts>
                </Route>
                <Route path='/blog/:postID'>
                    <BlogSingle></BlogSingle>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Header;
