import React, { useState, useEffect } from 'react';

const Textchanger = () => {
    const text = ["Hi, I'm Uttam", "Welcome to my profile!", "Let's build something great!"];
    const [currentText, setCurrentText] = useState("");
    const [endValue, setEndValue] = useState(1);
    const [isForward, setIsForward] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText(text[index].substring(0, endValue));
            if (isForward) {
                setEndValue((prev) => prev + 1);
            } else {
                setEndValue((prev) => prev - 1);
            }

            if (isForward && endValue >= text[index].length + 10) {
                setIsForward(false);
            } else if (!isForward && endValue <= 0) {
                setIsForward(true);
                setIndex((prev) => (prev + 1) % text.length);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [endValue, isForward, index, text]);

    return (
        <div className='transition ease duration-300 text-4xl font-semibold text-center'>
            {currentText}
        </div>
    );
};

export default Textchanger;
