import React, {useEffect, useState} from "react";
import {Text, View} from "react-native";

const TypingText = ({
    text = "",
    typingSpeed = 200,
    deletingSpeed = 100,
    pauseDuration = 3000,
    style
}) => {
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [pause, setPause] = useState(false);

    useEffect(() => {
        let timer;

        if (displayText.length === text.length && !isDeleting && !pause) {
            setPause(true);
            timer = setTimeout(() => {
                setPause(false);
                setIsDeleting(true);
            }, pauseDuration);
        }

        if (displayText.length === 0 && isDeleting) {
            setIsDeleting(false);
        }

        if (!pause) {
            if (isDeleting) {
                timer = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, deletingSpeed);
            } else {
                timer = setTimeout(() => {
                    setDisplayText(text.slice(0, displayText.length + 1));
                }, typingSpeed);
            }
        }

        return () => {
            clearTimeout(timer);
        };
    }, [displayText, isDeleting, pause]);

    return (
        <View>
            <Text style={style}>{displayText}</Text>
        </View>
    );
};

export default TypingText;
