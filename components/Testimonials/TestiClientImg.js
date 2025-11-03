"use client";
import React, { useState, useEffect } from 'react';
import { items } from './Data';
import { ReactComponent as ArrowLeft } from "./chevron-left-solid.svg";
import { ReactComponent as ArrowRight } from "./chevron-right-solid.svg";
import { ReactComponent as Circle } from "./circle-solid.svg";
import styles from "./TestiClientImg.module.css";
import './Carousel.css';
import Image from 'next/image';

import { Col, Container, Row } from 'react-bootstrap';

const inactiveColour = 'hsla(221, 0%, 88%, 0.81)';
const activeColour = 'hsla(221, 0%, 49%, 0.98)';


const TestiClientImg = () => {
    const [leftCardd, setLeftCardd] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [rightCardd, setRightCardd] = useState(0);
    const [arrayLength, setArrayLength] = useState(0);

    useEffect(() => {
        const length = items.length;
        setArrayLength(length);
        for (let i = 0; i < length; i++) {
            if (items[i].status === 'active') {
                setLeftCardd(i - 1);
                setActiveIndex(i);
                setRightCardd(i + 1);
                break;
            }
        }
    }, []);

    const activatePreviousSlide = () => {
        const newLeftIndex = leftCardd - 1 === -1 ? arrayLength - 1 : leftCardd - 1;
        setRightCardd(activeIndex);
        setActiveIndex(leftCardd);
        setLeftCardd(newLeftIndex);
    };

    const activateNextSlide = () => {
        const newRightIndex = rightCardd + 1 === arrayLength ? 0 : rightCardd + 1;
        setLeftCardd(activeIndex);
        setActiveIndex(rightCardd);
        setRightCardd(newRightIndex);
    };

    const trackerArray = [];
    for (let i = 0; i < arrayLength; i++) {
        trackerArray.push(
            <div className='circle' key={i}>
                <Circle fill={i === activeIndex ? activeColour : inactiveColour} />
            </div>
        );
    }


    return (
        <div className={styles.TestiClientImgBg}>
            <Container>
                <Row>
                    <Col>
                        <div className="carousel-container">
                            <div className="carddss">
                                <div className="cardd leftCardd">
                                    <Image className="avatars" src={items[leftCardd].imgSrc} alt="avatar" width={724}height={427}/>

                                </div>
                                <div className="cardd active">
                                    <Image className="avatars" src={items[activeIndex].imgSrc} alt="avatar" width={687}height={482} />
                                    <span>

                                        <div className="arrow-container">
                                            <ArrowLeft
                                                className="arrow arrow-left"
                                                fill="hsla(221, 0%, 49%, 0.98)"
                                                onClick={activatePreviousSlide}
                                            />
                                            <ArrowRight
                                                className="arrow arrow-right"
                                                fill="hsla(221, 0%, 49%, 0.98)"
                                                onClick={activateNextSlide}
                                            />
                                        </div>
                                    </span>
                                </div>
                                <div className="cardd rightCardd">
                                    <Image className="avatars" src={items[rightCardd].imgSrc} alt="avatar" width={724}height={427} />

                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TestiClientImg;
