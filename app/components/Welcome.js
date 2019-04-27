import React from 'react';
import {
StyleSheet,
Text,
View,
TouchableOpacity,
} from 'react-native';
import Main from './Main';
export default class Note extends React.Component {
 render(){
    return (
        

<View style={styles.header}>
   <Text style={styles.headerText}>  Welcome to Ramadan To Do List </Text>
        <Button title="go on" onPress= {() => Components.Component('Main')}> </Button>
         </View>   
         
        );
    }
}

 const styles = StyleSheet.create({

    note:{
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 10,
        borderLeftColor: '#ededed',
    },
    noteText:{
        paddingLeft: 20,
        borderLeftWidth: 10, 
        borderLeftColor: '#FFC0CB',
    },
    noteDelete:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFA07A',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    noteDeleteText:{
        color: 'white',
    },

   });