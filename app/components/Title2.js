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
const Title = (props) => {
    StatusBar.setHidden(true)
    return (
        <NavigationBar
            title={props.title}
            titleStyle={{fontFamily: "PingFangSC-Medium",
                fontSize: moderateScale(17),
                color: "#666666"
            }}
            style={{height:verticalScale(64),backgroundColor: "#f5f5f5",
                shadowColor: "rgba(0, 0, 0, 0.08)",
                shadowOffset: {
                    width: 0,
                    height: verticalScale(5)
                },
                shadowRadius: moderateScale(10),
                shadowOpacity: 1,borderBottomWidth:StyleSheet.hairlineWidth,borderBottomColor:'#c6c6c6'}}
            backLabel={
                props.back? <View>
                    <TouchableOpacity onPress={props.onPressBack}>
                        <Image source={Images.back} style={{width:scale(7),height:verticalScale(14)}}/>
                    </TouchableOpacity>
                </View>:<View/>
            }
            forwardLabel={props.forward?
                <View>
                    <TouchableOpacity onPress={props.onPressForward}>
                        <Image source={Images.settings} style={{width:scale(18),height:verticalScale(17)}}/>
                    </TouchableOpacity>
                </View>:<View/>

            }
         />
    )

};
export  default Title
