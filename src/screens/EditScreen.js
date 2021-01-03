import React ,{useState,useContext}from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Context} from '../context/BlogContext'


const EditScreen=({navigation})=>{

    const {editBlogPost,state}= useContext(Context);

    const id = navigation.getParam('id');

    const blogPost =state.find((blogPost)=>blogPost.id == id)

    const [title,setTitle] = useState(blogPost.title);
    const [content,setContent] = useState(blogPost.content);

    

    
    return(
        <View>
        <Text>Change Title</Text>
        <TextInput 
        style={styles.input}
        value={title}
        onChangeText={text=>setTitle(text)}
        
        />
        <Text>Change Content</Text>
        <TextInput 
        style={styles.input}
        value={content}
        onChangeText={text=>setContent(text)}
        />
        <Button
        title="Edit Post"
        onPress={()=>{
            editBlogPost(id,title,content,()=>{
                    navigation.navigate('Index')
                })
        }}
        
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
    }

})

export default EditScreen;

