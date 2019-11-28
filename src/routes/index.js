import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Boards from '../Views/Boards';
import Lists from '../Views/Lists';
import Tasks from '../Views/Tasks';

const StackNavigator = createStackNavigator({
    Boards,
    Lists,
    Tasks,
});

export default createAppContainer(StackNavigator);