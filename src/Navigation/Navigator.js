import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import AuthScreen from '../screens/AuthScreen'
import HomeScreen from '../screens/HomeScreen'

const Navigator = createSwitchNavigator(
        {
            Auth : {screen : AuthScreen},
            Home : {screen : HomeScreen}
        },
        {
            initialRouteName : "Auth"
        }
    )


export default AppContainer = createAppContainer(Navigator)