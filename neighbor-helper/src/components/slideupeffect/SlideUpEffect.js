import React, {useRef} from 'react';
import {Animated} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {styles} from "./styles";

const SlideUp = ({children, translateYValue = -100, duration = 600}) => {
    const slideUpAnim = useRef(new Animated.Value(800)).current;

    const handleSlideUp = () => {
        Animated.timing(slideUpAnim, {
            toValue: translateYValue,
            duration: duration,
            useNativeDriver: true,
        }).start();
    };

    useFocusEffect(
        React.useCallback(() => {
            handleSlideUp();
            return () => {};
        }, []),
    );

    return (
        <Animated.View
            style={[
                styles.formWrapper,
                {transform: [{translateY: slideUpAnim}]},
            ]}>
            {children}
        </Animated.View>
    );
};

export default SlideUp;
