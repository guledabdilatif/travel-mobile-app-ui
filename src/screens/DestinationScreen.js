import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'react-native';
import { Text, Image, View, SafeAreaView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {ChevronLeftIcon, ClockIcon, HeartIcon, MapPinIcon, SunIcon} from 'react-native-heroicons/solid'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const DestinationScreen = (props) => {
    const navigation = useNavigation()
    const item = props.route.params
    const [isfavorite, toggleFavorite] = useState(false)
    return (
        <View style={{ backgroundColor: 'black', flex: 1 }}>
            <StatusBar translucent backgroundColor='rgba(255,255,255,0.7)' color='#fff' />
            {/* destination image */}
            <Image
                source={item.image}
                style={{ width: wp(100), height: hp(55) }}

            />
            <SafeAreaView style={{ width: wp(100), position: 'absolute', top: 40, flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: 'transparent', marginLeft: wp(2), borderRadius: 50 }}>
                    <ChevronLeftIcon color='white' size={wp(10)} strokeWidth={6} style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: 10, borderRadius: 50 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleFavorite(!isfavorite)} style={{ backgroundColor: 'transparent', marginRight: wp(2), borderRadius: 50 }}>
                    <HeartIcon color={isfavorite ? 'red' : 'white'} size={wp(10)} strokeWidth={1} style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: 10, borderRadius: 50 }} />
                </TouchableOpacity>
            </SafeAreaView>
            {/* title description and booking button */}
            <View style={{ paddingHorizontal: wp(5),position:'relative', display: "flex", flexDirection: 'row', backgroundColor: 'white', flex: 1, borderTopRightRadius: 40, borderTopLeftRadius: 40, marginTop: wp(-10) }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    
                >
                    <View style={{ display: "flex", flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', marginTop: wp(6) }}>

                        <Text style={{ fontWeight: 'bold', fontSize: wp(7) }}>{item.title}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: wp(5), color: 'orange' }}>$ {item.price}</Text>
                    </View>
                    <Text style={{ fontSize: wp(4.7), color: 'rgba(0,0,0,0.7)', marginTop: wp(3) }}>{item.longDescription}</Text>
                    <View style={{ display: 'flex', flexDirection: 'row',marginTop:wp(3), marginHorizontal: 1, justifyContent: 'space-between', gap: wp(2) }}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: wp(4), gap: wp(2) }}>
                            <ClockIcon color="rgba(0,0,255,0.5)" size={38} />
                            <View style={{ display: "flex" }}>
                                <Text style={{ fontWeight: "bold", fontSize: wp(4) }}>{item.duration}</Text>
                                <Text style={{ fontWeight: 600, fontSize: wp(4) }}>Duration</Text>
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: wp(4), gap: wp(2) }}>
                            <MapPinIcon color="rgba(255,0,0,0.5)" size={38} />
                            <View style={{ display: "flex" }}>
                                <Text style={{ fontWeight: "bold", fontSize: wp(4) }}>{item.distance}</Text>
                                <Text style={{ fontWeight: 600, fontSize: wp(4) }}>Distance</Text>
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: wp(4), gap: wp(2) }}>
                            <SunIcon color="orange" size={38} />
                            <View style={{ display: "flex" }}>
                                <Text style={{ fontWeight: "bold", fontSize: wp(4) }}>{item.weather}</Text>
                                <Text style={{ fontWeight: 600, fontSize: wp(4) }}>Weather</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                    <TouchableOpacity style={{backgroundColor:'orange',paddingHorizontal:wp(10),paddingVertical:wp(5), borderRadius:wp(10), position:'absolute',width:wp(90), bottom:0, marginHorizontal:wp(4), display:'flex',alignItems:'center', justifyContent:"center", flexDirection:'row' }}>
                        <Text style={{color:'white', fontSize:wp(5), fontWeight:'bold'}}>Book Now</Text>
                    </TouchableOpacity>

            </View>

        </View>
    )
}

export default DestinationScreen