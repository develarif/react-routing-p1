import React from 'react';
import './Home.css';
import { Carousel, Container } from 'react-bootstrap';

const Home = () => {
	return (
		<section className='hero-slider'>
			<Container>
				<Carousel>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_960_720.jpg'
							alt='First slide'
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>
								Nulla vitae elit libero, a pharetra augue mollis
								interdum.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_960_720.jpg'
							alt='Second slide'
						/>

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512_960_720.jpg'
							alt='Third slide'
						/>

						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque
								nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Container>
		</section>
	);
};

export default Home;
