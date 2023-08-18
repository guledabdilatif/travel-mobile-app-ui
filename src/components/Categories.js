import React from 'react'
import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { categoriesData } from '../constants';

const Categories = () => {
    return (
        <View style={{ marginHorizontal: wp(3), marginTop: -20 }}>
            <View style={{ display: "flex", alignItems: "center", justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={{ fontWeight: 500, fontSize: wp(7) }}>Categories</Text>
                <TouchableOpacity>
                    <Text style={{ fontWeight: 400, fontSize: wp(6), color: 'orange' }}>see all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    categoriesData.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <Image source={item.image} style={{ borderRadius: 24, width: wp(18), height: wp(18), marginRight: wp(5), marginTop: wp(6) }} />
                                <Text style={{ fontWeight: "bold", marginTop: wp(2), fontSize: wp(4) }}>{item.title}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Categories