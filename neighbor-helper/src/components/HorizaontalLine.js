import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalLine = () => {
    return (
        <View style={styles.line} />
    );
};

const styles = StyleSheet.create({
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '100%',
        alignSelf: 'center',
        marginVertical: 10, // Add some margin to separate the line from other components
    },
});

export default HorizontalLine;
