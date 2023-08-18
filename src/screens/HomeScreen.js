import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image, StyleSheet, TextInput } from 'react-native'
import Categories from '../components/Categories';
import SortCategories from '../components/SortCategories';
import Destination from '../components/Destination';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", marginTop: wp(8) }}>
      <ScrollView
showsVerticalScrollIndicator={false}
      >
        {/* avatar */}
        <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 10, flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold', fontSize: wp(7) }}>Let's Discover</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/images/avatar.png')} style={{ height: wp(12), width: wp(12) }} />
          </TouchableOpacity>
        </View>


        {/* search Bar */}
        <View style={{ marginTop: wp(10), marginBottom: wp(10) }}>
          <View style={{ margin: wp(3), display: "flex", flexDirection: "row", alignItems: "center", borderRadius: 50, backgroundColor: "rgba(0,0,255,0.2)", padding: 10 }}>
            <Icon name="search" size={32} color="grey" style={{ marginRight: 20 }} />
            <TextInput placeholder='Type Place' style={{ flex: 1, fontSize: 18 }} />
          </View>
        </View>
        {/* Categories components */}
        <View>
          <Categories />
        </View>
        {/* sort Categories */}
        <View>
          <SortCategories />
        </View>
        <View style={{ marginTop: wp(4) }}>

          <Destination />


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
const style = StyleSheet.create({
  container: {

  }

})