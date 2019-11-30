import React, {Component} from 'react';
import {View, Text, Switch} from 'react-native';
import styles from '../resources/Styles';
import { Button } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchValue:false,
            toggle: true,
        }
    }

    toggleSwitch = (value) => {
        this.setState({
            switchValue: value,
            toggle: this.state.toggle ? false : true
        })
        
     }
    

    render(){
        return(
            <View style={this.state.toggle ? styles.bodyFrontPage : styles.bodyFrontPageLight }>
                <Text style={this.state.toggle ? styles.toodler : styles.toodlerLight}>
                    TOODLER
                </Text>
                <Button 
                title='Go to boards' 
                type='outline' 
                onPress={()=> this.props.navigation.navigate('Boards', {toggle: this.state.toggle})}/>
                <Text style={ this.state.toggle ? styles.switchText : styles.switchTextLight}>{this.state.switchValue? 'Light Mode' : 'Dark Mode'}</Text>
                <Switch
                    title={this.state.switchValue?'Light Mode':'Dark Mode'}
                    onValueChange = {this.toggleSwitch}
                    value = {this.state.switchValue}
                />
            </View>
        );
    }
}


export default Home;