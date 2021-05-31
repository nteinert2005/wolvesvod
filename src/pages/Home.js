import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Home.scss';


const Home = () => {
    const [ mobile, setMobile ] = useState();
    const [ full, setFull ] = useState();

    useEffect(() => {
        if(window.innerWidth <= 640){
            setMobile("block");
            setFull("none");
        } else {
            setMobile('none');
            setFull('block');
        }
    }, []);

    useEffect(() => {
        function handleResize(){
            if(window.innerWidth <= 640){
                setMobile("block");
                setFull("none");
            } else {
                setMobile('none');
                setFull('block');
            }
        }

        window.addEventListener('resize', handleResize);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToShow: 1,
                    initialSlide: 1
                }
            }
        ]
    };


    return (
        <HomeWrapper>
            <Navbar show={full}>
                <ul>
                    <li>What to Expect </li>
                    <li>Stories of Hope </li>
                    <li>
                        <img src="/images/logo.png" alt="" />
                    </li>
                    <li>Resources  </li>
                    <li>Get Started </li>
                    <li class="search"><i class="bi bi-search"></i></li>
                </ul>
            </Navbar>
            <MobileNav show={mobile}>
                <MobileWrapper>
                <div><i class="bi bi-list"></i></div>
                <div><img src="/images/logo.png" alt="" /></div>
                <div><i class="bi bi-search"></i></div>
                </MobileWrapper>
            </MobileNav>
            <Hero>
                <h1>A better life starts here</h1>
                <h4> Wheter your life needs to be fine tuned or completely reassembled, Wolves is a safe place for you to reexamine and redefine your life.</h4>
                <img src="/images/offerings.png" alt="" />
                <h4>
                    There is hope for your life. Men have seen their lives transformed in spite of mental health, financial hardships, relationship difficulties, trauma, and other issues. 
                </h4>
                <p>
                    <a href="/stories">See transformed lives <i class="bi bi-chevron-double-right"></i> </a>
                </p> 
            </Hero>
            <Slider {...settings}>
                <div>
                    <img src="https://images.ctfassets.net/xnqwblfu5f4z/4RrJxmxFwCpImfiKRMSJgS/5701d0bc18a2e5ddb9182a41e3b6f64c/newlyandkaren-4x3.jpg?fm=webp&q=90&w=750" alt="" />
                </div>
                <div>
                    <img src="https://images.ctfassets.net/xnqwblfu5f4z/7w1W7SdBUWh7gGjGCgNzFa/bf8b2083c43d8edf6939ac370130c867/Castro_Jason_Mandy.jpg?fm=webp&q=90&w=750" alt="" />
                </div>
                <div>
                <img src="https://images.ctfassets.net/xnqwblfu5f4z/4RrJxmxFwCpImfiKRMSJgS/5701d0bc18a2e5ddb9182a41e3b6f64c/newlyandkaren-4x3.jpg?fm=webp&q=90&w=750" alt="" />
                </div>
                <div>
                <img src="https://images.ctfassets.net/xnqwblfu5f4z/7w1W7SdBUWh7gGjGCgNzFa/bf8b2083c43d8edf6939ac370130c867/Castro_Jason_Mandy.jpg?fm=webp&q=90&w=750" alt="" />
                </div>
                <div>
                <img src="https://images.ctfassets.net/xnqwblfu5f4z/7w1W7SdBUWh7gGjGCgNzFa/bf8b2083c43d8edf6939ac370130c867/Castro_Jason_Mandy.jpg?fm=webp&q=90&w=750" alt="" />
                </div>
            </Slider>
            <NewCourse>
                <div className="course-text">
                    <h4>Courses Update Weekly</h4>
                    <p>Every man needs improvement regularly. Wolves gives you a safe space to work on yourselves without judgement, worry of rejection, or fear of doubt. </p>
                    <p>With world class experts helping you every step of the way, Wolves lets you take recovery, improvement or learning new skills at your own pace.</p>
                    <p>
                        <a href="/expect">See what to expect when joining</a>
                    </p>
                </div>
                <div className="course-image">
                    <img src="https://www.authenticmanhood.com/images/r/vol-5_-kit_-fella_thumbnails_volumes_480x320_v1/c480x320/vol-5_-kit_-fella_thumbnails_volumes_480x320_v1.jpg" alt="" />
                </div>
            </NewCourse>
        </HomeWrapper>
    );
};

const HomeWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1460px;
    font-family: "Archivo";
`

const NewCourse = styled.div`
    display: flex;
    padding-top: 100px;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media screen and (max-width: 700px){
        flex-direction: column;
    }
    
    .course-text {
        flex: 6;

        h4 {
            font-family: "Volkhov";
            text-transform: uppercase;
            font-size: 24px;
        }

        p {
            font-size: 17px;
        }

         a {
             text-transform: uppercase;
             text-decoration: none;
             color: #DEB170;
             margin-top: 28px;
             display: block;
         }

         @media screen and (max-width: 700px){
            text-align: center;
        }
    }

    .course-image {
        flex: 6;
        padding-left: 2em;
        img {
            width: 100%;
        }

        @media screen and (max-width: 700px){
            padding: 0;
            margin-top: 1em;
        }
    }
`

const Hero = styled.div`
    padding: 45px 0;
    max-width: 1000px;
    text-align: center;
    margin: 0 auto;

    h1 {
        font-size: 48px;
        font-family: "Volkhov";

        @media screen and (max-width: 700px){
            font-size: 36px;
        }
    }

    h4 {
        font-family: "Archivo";
        font-weight: 400;
        color: #28312f;
        line-height: 36px;
        font-size: 24px;

        @media screen and (max-width: 700px){
            font-size: 1.125em;
            line-height: 28px;
        }
    }

    img {
        width: 100%;
    }

    a {
        text-transform: uppercase;
        text-decoration: none;
        color: #DEB170;
        font-family: "Archivo";
        font-size: 24px;

        @media screen and (max-width: 700px){
            font-size: 16px;
        }
    }
`

const MobileNav = styled.div`
    display: ${props => props.show};
    min-height: 30px;
    width: 100%;
`

const MobileWrapper = styled.div`
    display: flex;
    padding: 1em;
    align-items: center;
    justify-content: center;

    div {
        flex: 4 30%;
        &:last-child {
            text-align: right;
        }
    }

    i {
        font-size: 24px;
    }

    img {
        height: 50px;
        width: 50%;
        margin: 0 auto;
        display: block;
    }
`

const Navbar = styled.div`
    display: ${props => props.show};

    ul {
        font-family: "Archivo";
        width: 100%;
        margin: 0 auto;
        display: flex;
        list-style: none;
        height: 200px;
        align-items: center;

        li {
            flex: 2;
            text-transform: uppercase;
            line-height: 20px;
            font-size: 1.1rem;
            text-align: center;

            img {
                height: 100px;
            }
        }

        .search {
            flex: 1;
        }
    }
`



export default Home;