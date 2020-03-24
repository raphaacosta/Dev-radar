import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';
import Add from './pages/Add';

const Routes = createAppContainer(
    createStackNavigator({
        Add: {
            screen: Add,
            navigationOptions: {
                title: 'Cadastrar Dev',
            },
        },
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar',
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil do Github',
            },
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerStyle: {
                backgroundColor: "#7D40E7",
            },
        },
    })
);

export default Routes;