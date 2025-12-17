import React from "react";
import "./Home.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Home() {
    const firstSlider = [
        { id: 1, src: "./img/Home/home-slider-1.webp" },
        { id: 2, src: "./img/Home/home-slider-2.webp" },
        { id: 3, src: "./img/Home/home-slider-3.webp" },
        { id: 4, src: "./img/Home/home-slider-4.webp" },
        { id: 5, src: "./img/Home/home-slider-5.webp" }
    ];

    const secondSlider = [
        [
            { id: 2, src: "./img/Home/home-2.webp" },
            { id: 3, src: "./img/Home/home-3.webp" },
            { id: 4, src: "./img/Home/home-4.webp" },
            { id: 5, src: "./img/Home/home-5.webp" },
            { id: 6, src: "./img/Home/home-6.webp" }
        ],
        [
            { id: 7, src: "./img/Home/home-7.webp" },
            { id: 8, src: "./img/Home/home-8.webp" },
            { id: 9, src: "./img/Home/home-9.webp" },
            { id: 10, src: "./img/Home/home-10.webp" },
            { id: 11, src: "./img/Home/home-11.webp" }
        ]
    ];

    const thirdSlider = [
        [
            { id: 2, src: "./img/Home/home-12.webp" },
            { id: 3, src: "./img/Home/home-13.webp" },
            { id: 4, src: "./img/Home/home-14.webp" },
            { id: 5, src: "./img/Home/home-15.webp" },
            { id: 6, src: "./img/Home/home-16.webp" },
            { id: 7, src: "./img/Home/home-17.webp" }
        ]
    ];

    const fourthSlider = [
        [
            { id: 2, src: "./img/Home/home-18.webp" },
            { id: 3, src: "./img/Home/home-19.webp" },
            { id: 4, src: "./img/Home/home-20.webp" },
            { id: 5, src: "./img/Home/home-21.webp" },
            { id: 6, src: "./img/Home/home-22.webp" },
            { id: 7, src: "./img/Home/home-23.webp" }
        ],
        [
            { id: 8, src: "./img/Home/home-24.webp" },
            { id: 9, src: "./img/Home/home-25.webp" },
            { id: 10, src: "./img/Home/home-26.webp" },
            { id: 11, src: "./img/Home/home-27.webp" },
            { id: 12, src: "./img/Home/home-29.webp" },
            { id: 13, src: "./img/Home/home-30.webp" }
        ],
        [
            { id: 14, src: "./img/Home/home-31.webp" },
            { id: 15, src: "./img/Home/home-32.webp" },
            { id: 16, src: "./img/Home/home-33.webp" },
            { id: 17, src: "./img/Home/home-34.webp" },
            { id: 18, src: "./img/Home/home-35.webp" },
            { id: 19, src: "./img/Home/home-36.webp" }
        ]
    ];

    const fifthSlider = [
        [
            { id: 2, src: "./img/Home/home-37.webp" },
            { id: 3, src: "./img/Home/home-38.webp" },
            { id: 4, src: "./img/Home/home-39.webp" },
            { id: 5, src: "./img/Home/home-40.webp" },
            { id: 6, src: "./img/Home/home-41.webp" },
            { id: 7, src: "./img/Home/home-42.webp" }
        ]
    ];

    const images = [];
    for (let i = 1; i <= 32; i++) {
        images.push(`/img/Home/home-catogary-${i}.jpg`);
    }

    const itemsPerSlide = 6;
    const slides = [];
    for (let i = 0; i < images.length; i += itemsPerSlide) {
        slides.push(images.slice(i, i + itemsPerSlide));
    }

    return (
        <>
        <Header/>
            <div className="hero-wrapper w-full">

                <div className="top-banner w-full">
                    <img
                        src="./img/Home/home-1.webp"
                        alt="home-1"
                        className="hero-img"
                    />
                </div>

                {/* ✅ FIRST SLIDER WRAPPER UPDATED */}
                <div className="slider-wrapper slider-first w-full mt-3">
                    <Carousel indicators={true} controls={true} interval={3000} fade pause="hover">
                        {firstSlider.map((img) => (
                            <Carousel.Item key={img.id}>
                                <img
                                    className="d-block w-100 slider-img"
                                    src={img.src}
                                    alt={`slider-${img.id}`}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>

                <div className="second-slider-wrapper w-full mt-4">
                    <h3 className="section-title">RISING STARS</h3>

                    <Carousel indicators={true} controls={true} interval={2000} pause="hover">
                        {secondSlider.map((group, idx) => (
                            <Carousel.Item key={idx}>
                                <div className="multi-img-slide">
                                    {group.map((img) => (
                                        <img
                                            key={img.id}
                                            className="multi-slider-img"
                                            src={img.src}
                                            alt={`multi-${img.id}`}
                                        />
                                    ))}
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>

                <div className="second-slider-wrapper w-full mt-4">
                    <h3 className="section-title">LUXE GRAND REDUCTION DEALS</h3>

                    <Carousel indicators={false} controls={false} interval={2000} pause="hover">
                        <Carousel.Item>
                            <div className="third-slider-container">
                                {thirdSlider[0].map((img) => (
                                    <div className="third-slide-box" key={img.id}>
                                        <img
                                            src={img.src}
                                            alt={`third-${img.id}`}
                                            className="third-slider-img"
                                        />
                                    </div>
                                ))}
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className="second-slider-wrapper w-full mt-4">
                    <h3 className="section-title">GREAT OFFERS</h3>

                    <Carousel indicators={true} controls={true} interval={2000} pause="hover">
                        {fourthSlider.map((group, idx) => (
                            <Carousel.Item key={idx}>
                                <div className="slider4">
                                    {group.map((img) => (
                                        <img
                                            key={img.id}
                                            className="multi-slider-img"
                                            src={img.src}
                                            alt={`multi-${img.id}`}
                                        />
                                    ))}
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>


                <div className="second-slider-wrapper w-full mt-4">
                    <h3 className="section-title">BARGAINS BLOWOUT</h3>

                    <Carousel indicators={false} controls={false} interval={2000} pause="hover">
                        <Carousel.Item>
                            <div className="third-slider-container">
                                {fifthSlider[0].map((img) => (
                                    <div className="third-slide-box" key={img.id}>
                                        <img
                                            src={img.src}
                                            alt={`third-${img.id}`}
                                            className="third-slider-img"
                                        />
                                    </div>
                                ))}
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            <Footer/>
        </>
    );
}
