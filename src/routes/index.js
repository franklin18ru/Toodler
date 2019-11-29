import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Boards from '../Views/Boards';
import Lists from '../Views/Lists';
import Tasks from '../Views/Tasks';
import Home from '../Views/Home';

const StackNavigator = createStackNavigator({
    Home,
    Boards,
    Lists,
    Tasks,
});

export default createAppContainer(StackNavigator);