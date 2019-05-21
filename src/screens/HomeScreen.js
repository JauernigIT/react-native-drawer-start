import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialHeaderButtons, Item } from '../navigation/MaterialHeaderButtons';

export default class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'My application',
        drawerLabel: 'Home',
        headerLeft: (
            <MaterialHeaderButtons>
                <Item title="menu" iconName="menu" onPress={() => navigation.openDrawer()} />
            </MaterialHeaderButtons>
        ),
        headerRight: (
            <MaterialHeaderButtons>
                <Item title="search" iconName="search" onPress={() => console.warn('search')} />
            </MaterialHeaderButtons>
        )
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>My Home Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
        height: '100%'
    },
    headerTitle: {
        color: '#F2F2F2'
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: '#333333',
        marginTop: 200
    }
});
