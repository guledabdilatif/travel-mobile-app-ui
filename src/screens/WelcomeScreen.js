import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
const WelcomeScreen = () => {
  const navigation =useNavigation()
  return (
    
    <View style={style.container}>
      <StatusBar translucent backgroundColor='rgba(0,0,0,0.3)' />

      <ImageBackground style={{ flex: 1, position: "relative"}}
        source={require('../../assets/images/welcome.png')}
      >        
        <View style={style.welcomecontent}>
          <View>
            <Text style={style.h1}>Travelling made easy!</Text>
            <Text style={style.p}>Embark on a journey to uncharted horizons, where every step unveils the world's hidden wonders and cultural treasures</Text>
          </View>

          <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
            <Text style={style.button}>Let's go</Text>
          </TouchableOpacity>

        </View>
         </ImageBackground>
    </View >
  )
}

export default WelcomeScreen
const style = StyleSheet.create({
  container:{
    flex: 1, 
    },
  welcomecontent: {
    position: "absolute",
    bottom: 20,
    alignItems: "center",
    justifyContent: "center",
    height: hp("40"),
           
  },
  h1: {
    fontSize: wp(10),
    color: "#fff",
    fontWeight: "bold",
    padding: 20,
    textAlign: 'left',
    marginBottom: -30,

  },
  p: {
    fontSize: wp(4.5),
    color: "#fff",
    fontWeight: "regular",
    padding: 20,
    textAlign: 'left'
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 30,
    backgroundColor: "orange",
    fontSize: 24,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center"

  }
})