import React, { useState } from 'react'
import { sortCategoryData } from '../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Text, TouchableOpacity, View, StyleSheet, elevation } from 'react-native'

const SortCategories = () => {
  const [activeSort, setActiveSort] = useState("Popular")

  return (
    <View style={{ borderRadius: wp(10), display: "flex", marginTop: wp(4), flexDirection: "row", alignItems: "center", padding: wp(3), marginHorizontal: wp(2), justifyContent: "center", backgroundColor: 'rgba(0,0,255, 0.1)' }}>

      {sortCategoryData.map((item, index) => {
        let isActive = item == activeSort;
        let activeButtonClass = isActive ? "bg-white" : ""
        return (
          <TouchableOpacity key={index} style={isActive ? style.sortcategorycontainer : style.bgwhite} onPress={() => setActiveSort(item)}>
            <Text style={isActive ? style.sortheaderActive : style.sortheader}>{item}</Text>

          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default SortCategories
const style = StyleSheet.create({
  sortheaderActive: {
    color: 'orange',
    fontSize: wp(4),
    elevation
  },
  sortheader: {
    color: 'black',
    fontSize: wp(4)
  },
  sortcategorycontainer:
  {
    padding: wp(2),
    marginTop: wp(5),
    alignItems: "center",
    justifyContent: "center",
    marginLeft: wp(3),
    backgroundColor: '#fff',
    borderRadius: wp(6),
    display: "flex",
    paddingHorizontal: wp(4),
    marginTop: wp(-1)
  },
  bgwhite: {
    backgroundColor: "transparent",
    boxShadow: '1 1 10 black',
    elevation,
    padding: wp(2),
    marginTop: wp(5),
    borderRadius: wp(3),
    marginTop: wp(-1)
  }
})