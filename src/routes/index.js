import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Boards from '../Views/Boards';
import Lists from '../Views/Lists';

const StackNavigator = createStackNavigator({
    Boards,
    Lists
});

export default createAppContainer(StackNavigator);