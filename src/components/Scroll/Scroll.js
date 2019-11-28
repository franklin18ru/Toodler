import React from "react";
import { SafeAreaView, StatusBar, View, ScrollView, Dimensions } from "react-native";
import styles from './ScrollStyle';

const { height } = Dimensions.get('window');

export default class Container extends React.Component {
  state = {
    screenHeight: 0,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  render() {
    
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <SafeAreaView style={styles.container}>
        {/* <StatusBar barStyle="light-content" backgroundColor="#468189" /> */}
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollview}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >
          <View style={styles.content}>
            {this.props.children}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}