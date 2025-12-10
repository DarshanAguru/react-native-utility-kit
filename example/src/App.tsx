import { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Input, Button, Checkbox, Carousel, DropDown } from 'react-native-utility-kit';
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

  const images = [
    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    "https://t4.ftcdn.net/jpg/02/55/17/43/360_F_255174366_ojDuATz84e5h7lIlxh2moUJa9Kpd5wKk.jpg",
    "https://blog.adobe.com/en/publish/2024/10/14/media_1ca79b205381242c5f8beaaee2f0e1cfb2aa8f324.png"
]


  return (
    <View style={styles.container}>
     
      <Carousel
        data={images}
        imageExtractor={(uri: string) => uri}
        imageComponent={Image}
        containerStyle={{width: "90%"}}
        autoplay
        autoplayInterval={3000}
        loop
        playDirection="forward"
        disableAutoplayOnTouch={false}
        aspectRatio={16 / 9}
        dotProps={{ size: 10, activeColor: '#5A67D8' }}
      />

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

         <View style={{ padding: 20 }}>
      <DropDown
        title="Country"
        description="Please select your native country from the given options to change the content preferences based on your choice."
        closeOnBackdropPress
      >
        <TouchableOpacity style={{padding : 2}} onPress={()=>console.log("India")}><Text style={{fontWeight: '400', fontSize: 16}}>India</Text></TouchableOpacity>
        <TouchableOpacity style={{padding : 2}} onPress={()=>console.log("Others")}><Text style={{fontWeight: '400', fontSize: 16}}>Others</Text></TouchableOpacity>
      </DropDown>
    </View>

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


