import React from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { AppLoading, Font, Icon } from 'expo';
import AppNavigator from './src/navigation/AppNavigator';

export default class App extends React.Component {
    state = {
        isLoadingComplete: false
    };

    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        } else {
            return (
                <SafeAreaView style={styles.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                    <AppNavigator />
                </SafeAreaView>
            );
        }
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Font.loadAsync({
                ...Icon.Ionicons.font
            })
        ]);
    };

    _handleLoadingError = error => {
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
