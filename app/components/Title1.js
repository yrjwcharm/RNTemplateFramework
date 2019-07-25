/**
 * Created by Rabbit 下午6:40
 */

import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    Platform, StatusBar
} from 'react-native';
import { NavigationBar,Slider } from 'beeshell';
const Title1 = (props) => {
    StatusBar.setHidden(true)
    return (
        <NavigationBar
            title={props.title}
            titleStyle={{fontFamily: "PingFangSC-Medium",
                fontSize: moderateScale(17),
                color: "#666666"
            }}
            style={{height:verticalScale(64),backgroundColor:'transparent'}}
            backLabel={
                props.back?
                    <TouchableOpacity onPress={props.onPressBack}>
                        <View>
                        <Image source={Images.message} style={{width:scale(20),height:verticalScale(20)}}/>
                        </View>
                    </TouchableOpacity>
                :<View/>
            }
            forwardLabel={props.forward?
                <TouchableOpacity onPress={props.onPressForward} activeOpacity={0.8}>
                <View style={{
                    opacity: 0.3,
                    borderRadius: moderateScale(3),
                    backgroundColor: "transparent",
                    borderStyle: "solid",
                    borderWidth: moderateScale(1),
                    borderColor: "#d7d7d7",
                }}>
                    <Text style={{	fontFamily: "PingFangSC-Regular",
                        fontSize: moderateScale(13),
                        lineHeight: 30,
                        color: "#f1f1f8",paddingLeft:moderateScale(10),paddingRight:moderateScale(8),paddingTop:moderateScale(6),paddingBottom:moderateScale(7)}}>切换</Text>

                </View>
                </TouchableOpacity>
               :<View/>

            }
        />
    )

};
export  default  Title1;
