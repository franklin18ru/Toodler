import React from 'react';
import {View, Text } from 'react-native';
import styles from './TaskStyle';
import { Icon } from 'react-native-elements'



const Task = props => (

  <View style={ props.toggle ? styles.body : styles.bodyLight}>
    <View style={ props.toggle ? styles.tasks : styles.tasksLight}>      
      <Text style={ props.toggle ? styles.title : styles.titleLight}>{ props.name }</Text>
      <Text style={ props.toggle ? styles.description : styles.descriptionLight}>{ props.description}</Text>
    </View>
    <View styles={styles.box}>
      <Icon 
          style={ styles.icon } 
          name='ios-checkmark' color={(props.isFinished) ? 'green' : '#181A24'} size={20} borderWidth={0.3} borderColor={'white'} type='ionicon' reverse
          
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
