import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {HeartIcon} from 'react-native-heroicons/solid'
import { Text,View, Image, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { destinationData } from '../constants'
import { useNavigation} from '@react-navigation/native';


const Destination = () => {
        const navigation = useNavigation();
    return (
        <View style={{ display: "flex", alignItems: "center", flexWrap: 'wrap', flexDirection: 'row', justifyContent:'center'}}>
            {
                destinationData.map((item, index) => {                   
                    
                    return (

                        <TouchableOpacity key={index} onPress={()=>navigation.navigate('Destination', {...item})} style={{ width:wp(44), height:wp(65), display: "flex", justifyContent:'flex-end', position:'relative', flexDirection:'row',margin:7}}>

                            <Image source={item.image} 
                            style={{ width:wp(44), height:wp(65), borderRadius:35}}
                            />
                            
                            <View style={{position:'absolute', bottom:10, width:wp(44), padding:wp(1), backgroundColor:"rgba(255,255,255,0.1)"}}>
                            <TouchableOpacity onPress={()=>togglefavorite(!isfavorite)} style={{position:'absolute', right:wp(3), top:wp(-20), backgroundColor:'rgba(255,255,255,0.3)', borderRadius:wp(50), padding:wp(2)}}>
                                <HeartIcon size={0.3} color="white" style={{padding:wp(5)}}/>
                            </TouchableOpacity>
                            <Text style={{fontWeight:'bold', fontSize:wp(5), textAlign:'left'}}>{item.title}</Text>
                            <Text style={{fontSize:wp(4)}} >{item.shortDescription}</Text>
                            </View>                          
                        
                                                        
                        </TouchableOpacity>

                    )
                })
            }

        </View >
    )
}

export default Destination