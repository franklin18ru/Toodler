

const AppContainer = createAppContainer(AppNavigator);
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
  }
);



export default AppContainer(AppNavigator);