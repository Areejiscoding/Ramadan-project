import React from 'react';
import {
StyleSheet,
Text,
View,
TouchableOpacity,
} from 'react-native';

export default class Note extends React.Component {
 render(){
    return (
            <View key={this.props.keyval} style={styles.note}> 
            <Text style={styles.noteText}> {this.props.val.date} </Text>
            <Text style={styles.noteText}> {this.props.val.note} </Text>
            <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
            <Text style={styles.noteDeleteText}> Done </Text>
            </TouchableOpacity>
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