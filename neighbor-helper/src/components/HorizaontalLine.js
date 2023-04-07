import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalLine = () => {
    return (
        <View style={styles.line} />
    );
};

const styles = StyleSheet.create({
    line: {
        borderBottomColor: '#727272',
        borderBottomWidth: 1,
        width: '100%',
        alignSelf: 'center',
        marginVertical: 4, // Add some margin to separate the line from other components
        opacity: 0.3
    },
});

export default HorizontalLine;
