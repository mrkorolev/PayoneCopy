import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const TransactionDetail = ({ parameter, value, icon }) => {
    return (
        <View style={styles.detailsContainer}>
            <View style={styles.detailsLayout}>
                <Text style={styles.detailsTitle}>{parameter}</Text>
                <Text style={styles.detailsData}>{value}</Text>
            </View>
            <View style={{flex: 0.2 }} />
            <TouchableOpacity onPress={() => {alert(`Pressed on ${parameter}!`)}}>
                {icon}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        flexDirection: 'row', 
        padding:  20 
    },
    detailsLayout: {
        flex: 1, 
        justifyContent: 'center'
    },
    detailsTitle: {
        color: '#293462', 
        fontWeight: 'bold', 
        fontSize: 13
    },
    detailsData: {
        color: 'gray', 
        fontWeight: 'bold', 
        fontSize: 8
    }
});