import React from 'react';
import {
    View,
    ScrollView,
    SafeAreaView,
    StyleSheet,
    Platform,
    StatusBar,
    Text
} from 'react-native';
import { DrawerItems } from 'react-navigation';

export default (props) => {
    return (
        <ScrollView>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>My application</Text>
                </View>
                <DrawerItems {...props} />
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: '#AA3300',
        paddingLeft: 18,
        paddingTop: (Platform.OS === 'android' ? StatusBar.currentHeight : 0),
        height: 80 + (Platform.OS === 'android' ? StatusBar.currentHeight : 0),
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    title: {
        color: '#F2F2F2',
        fontSize: 18
    }
});
