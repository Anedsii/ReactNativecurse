import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} 
        placeholder="add nombre"
        autoCorrect={false}
        autoCapitalize='none'
        
        ></TextInput>
        <Button style={styles.button} title="add" color="pink"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer:{
    marginTop:50,
    flexDirection:'row',
    marginHorizontal:20,
    justifyContent:'space-between'
  },
  input:{
    borderBottomColor:'#C5979D',
    borderBottomWidth:1,
    color:'pink',
    height:40,
    width:'75%',
    

  },
  
 
});