import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SideBarScreen from '../screens/SideBarScreen';

const MainDrawerNavigator = createDrawerNavigator({
    'Home': createStackNavigator({ HomeScreen }, getStackNavigatorConfig())
}, getDrawerNavigatorConfig());

function getStackNavigatorConfig() {
    return {
        navigationOptions: HomeScreen.navigationOptions,
        defaultNavigationOptions: {
            headerTintColor: '#F2F2F2',
            headerStyle: {
                backgroundColor: '#AA3300'
            }
        }
    };
}

function getDrawerNavigatorConfig() {
    return {
        contentComponent: SideBarScreen,
        drawerBackgroundColor: '#F2F2F2',
        contentOptions: {
            inactiveTintColor: '#333333',
            activeTintColor: '#AA3300'
        }
    };
}

export default createAppContainer(
    MainDrawerNavigator
);
