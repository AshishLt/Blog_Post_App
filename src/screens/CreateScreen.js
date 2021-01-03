import React,{useContext,useState} from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Context} from '../context/BlogContext';



const CreateScreen = ({navigation})=>{
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');

    const {addBlogPost} = useContext(Context);


    return(
        <View>
        <Text style={styles.text}>Enter Title</Text>
        <TextInput 
        style={styles.input}
        value={title}
        onChangeText={(text)=>{setTitle(text)}}
        />
        <Text style={styles.text}>Enter Content</Text>
        <TextInput 
        style={styles.input}
        value={content}
        onChangeText={(text)=>{setContent(text)}}
        />
        <Button 
        title="Add Post"
        onPress={()=>{addBlogPost(title,content,()=>{
            navigation.navigate('Index')
        })}}
        />
        </View>
    );
}


const styles = StyleSheet.create({
    input:{
        fontSize:18,
        backgroundColor:'#F0EEEE',
        marginHorizontal:10,
        marginBottom:20
    },
    text :{
       fontSize:20,
       marginLeft:10,
       marginBottom:10
    }
})

export default CreateScreen;