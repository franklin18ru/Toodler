import React, { Component } from 'react';
import {View, Text } from 'react-native';
import styles from '../Board/BoardStyles';
import taskStyle from './TaskStyle';
import CheckBox from 'react-native-check-box';



const Task = props => (
        <View style={ [(props.isFinished) ? taskStyle.finish : taskStyle.boards] }>
            {/* <CheckBox 
            style={{flex: 1, padding: 10}}
            onClick={()=>{
                {console.log(props.isFinished)}
                props.isFinished = props.isFinished == true ? false : true;
                
              }}
              checked={props.isFinished}
              isFinished={props.isFinished} /> */}
              <CheckBox style={ taskStyle.checkbox }
                title='Click Here'
                checked={props.isFinished}
                onClick={()=>{{props.action(props.id)}}}
                />
            <Text style={ taskStyle.title }>{ props.name }</Text>
            <Text style={ taskStyle.description }>{ props.description}</Text>
           
            
        </View>

        

       
)
   
export default Task
