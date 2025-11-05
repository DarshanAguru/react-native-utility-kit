import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Input, Button, Checkbox} from 'react-native-utility-kit';

export default function App() {
  const [userDetails, setUserDetails] = useState(
    {
      username:"",
      password:""
    }
  );

  const [value, setValue] = useState(false);

  const handelUsernameText = (txt:string)=>{
    setUserDetails(prev=> ({...prev, username:txt}))
  }

  
  const handlePasswordText = (txt:string)=>{
    setUserDetails(prev=> ({...prev, password:txt}))
  }

  return (
    <View style={styles.container}>
     
      <Input
        label="Username"
        value={userDetails.username}
        onChangeText={handelUsernameText}
        placeholder="Enter username here..."
        containerStyle={{width: "80%"}}
        />
      <Input
        label="Password"
        value={userDetails.password}
        onChangeText={handlePasswordText}
        placeholder="Enter password here..."
        containerStyle={{width: "80%"}}
        secureTextEntry={true}
        />

        <Checkbox
          value={value}
          onValueChange={setValue}
        >
          <Text>Accept terms and conditions.</Text>
        </Checkbox>

        <Button
        title="Submit"
        onPress={()=>console.log("Pressed")}
        backgroundColor="#007BFF"
        style={{width: "80%"}}
        disabled={false}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex:1,
  display:'flex',
  gap:10,
  justifyContent: 'center',
  alignContent:'center',
  alignItems: 'center'
}
});


