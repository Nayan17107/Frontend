import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

export default function Home() {
    const sliderImages = [
        { id: 1, src: "/img/Home/home-slider-1.webp" },
        { id: 2, src: "/img/Home/home-slider-2.webp" },
        { id: 3, src: "/img/Home/home-slider-3.webp" },
        { id: 4, src: "/img/Home/home-slider-4.webp" },
        { id: 5, src: "/img/Home/home-slider-5.webp" }
    ];

    const secondSlider = [
        [
            { id: 2, src: "/img/Home/home-2.webp" },
            { id: 3, src: "/img/Home/home-3.webp" },
            { id: 4, src: "/img/Home/home-4.webp" },
            { id: 5, src: "/img/Home/home-5.webp" },
            { id: 6, src: "/img/Home/home-6.webp" }
        ],
        [
            { id: 7, src: "/img/Home/home-7.webp" },
            { id: 8, src: "/img/Home/home-8.webp" },
            { id: 9, src: "/img/Home/home-9.webp" },
            { id: 10, src: "/img/Home/home-10.webp" },
            { id: 11, src: "/img/Home/home-11.webp" }
        ]
    ];


    const thirdSlider = [
        [
            { id: 2, src: "/img/Home/home-12.webp" },
            { id: 3, src: "/img/Home/home-13.webp" },
            { id: 4, src: "/img/Home/home-14.webp" },
            { id: 5, src: "/img/Home/home-15.webp" },
            { id: 6, src: "/img/Home/home-16.webp" },
            { id: 7, src: "/img/Home/home-17.webp" }
        ]
    ];


    return (
        <div className="hero-wrapper w-full">

            <div className="top-banner w-full">
                <img
                    src="/img/Home/home-1.webp"
                    alt="home-1"
                    className="hero-img"
                />
            </div>

            <div className="slider-wrapper w-full mt-3">
                <Carousel indicators={true} controls={true} interval={3000} fade pause="hover">
                    {sliderImages.map((img) => (
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
        </div>
    );
}
