import React, { Component } from 'react';
import {View, Text } from 'react-native';
import styles from '../Board/BoardStyles';
import taskStyle from './TaskStyle';
import CheckBox from 'react-native-check-box';
import { Icon } from 'react-native-elements'



const Task = props => (

  <View style={ taskStyle.test }>
    <View style={ taskStyle.boards }>      
      <Text style={ taskStyle.title }>{ props.name }</Text>
      <Text style={ taskStyle.description }>{ props.description}</Text>
    </View>
    <View styles={ {alignSelf: 'flex-end'}}>
      <Icon 
          style={ taskStyle.icon } 
          name='ios-checkmark' color={[(props.isFinished) ? 'green' : '#272936']} size={20} type='ionicon' reverse
          
          onPress={()=> {props.action(props.id)}} 
      />
      </View>
  </View>
    


        

       
)

{/* <CheckBox style={ taskStyle.checkbox }
  checked={props.isFinished}
  onClick={()=>{{props.action(props.id)}}}
  /> */} 
   
export default Task
