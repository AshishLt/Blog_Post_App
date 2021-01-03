import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity} from 'react-native';
import React,{useContext} from 'react';
import {Context} from '../context/BlogContext'; 
import { Feather } from '@expo/vector-icons';
const IndexScreen=({navigation})=>{
    const {state ,  deleteBlogPost} = useContext(Context);
    return(
        <View>
        
        <FlatList
        data = {state}
        keyExtractor = {blogPost=>blogPost.title}
        renderItem = {({item})=>{
            return (

                <TouchableOpacity
                onPress={()=>{navigation.navigate('Show',{id: item.id})}}
                
                >
                <View style={styles.row}>
                <Text style={styles.text}>{item.title}</Text>
                <TouchableOpacity
                onPress={()=>{deleteBlogPost(item.id)}}
                >
                <Feather style={styles.icon} name="trash"/>
                </TouchableOpacity>
                
                </View>

                </TouchableOpacity>
                );
        }}
        />

        </View>
        
        
    );
}

IndexScreen.navigationOptions =({navigation})=>{
    return{
        headerRight : (
            <TouchableOpacity
            onPress={()=>{navigation.navigate('Create')}}
            
            >
            <Feather name="plus" size={30} />
            </TouchableOpacity>
            
        )    
    }
};

const styles = StyleSheet.create({
    row:{
        flexDirection : 'row',
        justifyContent : 'space-between',
        borderColor:'gray',
        borderTopWidth: 1,
        paddingHorizontal:10,
        paddingVertical:10
        
    },
    text:{
        fontSize:18
    },
    icon:{
        fontSize:24
    },
    plus:{
        paddingRight:10
    }


});

export default IndexScreen;