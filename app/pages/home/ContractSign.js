import React, {PureComponent} from 'react';
import {SafeAreaView,StyleSheet,Image,FlatList,Platform,BackHandler,View,Text,TextInput,Alert,ImageBackground,TouchableOpacity} from 'react-native'
import Title from '../../components/Title'
import Select from "teaset/components/Select/Select";
export default class ContractSign extends PureComponent {
    // 默认属性
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }
    // 渲染
    render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'#eee'}}>
                <Title title={'合同签署'} back onPressBack={()=>this.props.navigation.goBack()} forward/>
                <View style={{height:verticalScale(44),justifyContent:'center'}}>
                    <View style={{marginLeft:moderateScale(16),marginRight:moderateScale(19), flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={{fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(15),
                            color: "#666666"}}>扣费状态：</Text>
                        <Select value={'已扣费'} valueStyle={{fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(14),
                            color: "#666666"}} style={{	width: scale(73),
                            height: verticalScale(28),
                            borderRadius: scale(4),
                            backgroundColor: "#f5f5f5",
                            shadowColor: "rgba(0, 0, 0, 0.06)",
                            shadowOffset: {
                                width: 0,
                                height: verticalScale(2)
                            },
                            shadowRadius: scale(10),
                            shadowOpacity: 1}}  icon={<Image source={Images.drop_down} style={{marginRight:moderateScale(11),width:scale(11),height:verticalScale(7)}}/>}/>
                    </View>
                </View>
                <View style={{paddingHorizontal:moderateScale(13),}}>
                    <View style={{	borderRadius: scale(5),
                        backgroundColor: "#f5f5f5",
                        shadowColor: "rgba(0, 0, 0, 0.06)",
                        shadowOffset: {
                            width: 0,
                            height: verticalScale(2)
                        },
                        paddingBottom:moderateScale(19),
                        shadowRadius: scale(10),
                        shadowOpacity: 1}}>
                    <View style={{height:verticalScale(40),justifyContent:'center',borderBottomWidth:StyleSheet.hairlineWidth,borderBottomColor:'#e6e6e6'}}>
                        <View style={{marginLeft:moderateScale(16),marginRight:moderateScale(13),flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={Images.un_check} resizeMode={'contain'} style={{width:scale(13),height:verticalScale(13)}}/>
                                <Text style={{fontFamily: "PingFangSC-Regular",
                                    fontSize: moderateScale(15),
                                    marginLeft:moderateScale(10),
                                    color: "#333333"}}>爱丽丝</Text>
                                <Image source={Images.separator_line__1} style={{marginLeft:moderateScale(11),marginRight:moderateScale(10),width:scale(1),height:verticalScale(15)}}/>
                                <Text style={{fontFamily: "PingFangSC-Regular",
                                    fontSize: moderateScale(15),
                                    color: "#666666"}}>1558343314641</Text>
                            </View>
                            <Text style={{fontFamily: "PingFangSC-Regular",
                                fontSize: moderateScale(14),
                                color: "#4a79e0"}}>等待签章</Text>
                        </View>
                    </View>
                        <View style={{marginTop:moderateScale(16),flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:moderateScale(35),marginRight:moderateScale(14)}}>
                            <View >
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(14),
                                        color: "#999999"}}>借款金额：</Text>
                                    <Text style={{	fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(15),
                                        lineHeight: 28,
                                        color: "#ef903e"}}>1000元</Text>
                                </View>
                                <View style={{marginTop:moderateScale(17),flexDirection:'row',alignItems:'center'}}>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(14),
                                        color: "#999999"}}>申请时间：</Text>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(14),
                                        color: "#666666"}}>2019-05-20 17:08:34</Text>
                                </View>
                            </View>
                            <Image source={Images.ykf} style={{width:scale(88),height:verticalScale(72)}}/>
                        </View>

                    </View>
                </View>
                <View style={{flex:1,justifyContent:'flex-end'}}>
                <View style={{height:verticalScale(54),backgroundColor: "#f5f5f5",
                    borderStyle: "solid",
                    borderWidth: scale(1),
                    borderColor: "#d0d0d0",
                    shadowColor: "rgba(0, 0, 0, 0.06)",
                    shadowOffset: {
                        width: scale(1),
                        height: verticalScale(3)
                    },
                    shadowRadius: scale(5),
                    shadowOpacity: 1,justifyContent:'center'}}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:moderateScale(15)}}>
                        <View style={{	borderRadius: scale(16),
                            backgroundColor: "#4a79e0"}}>
                        <Text style={{fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(13),
                            color: "#ffffff",paddingLeft:moderateScale(16),marginRight:moderateScale(17),paddingVertical:moderateScale(10)}}>发送签约</Text>
                        </View>
                        <View  style={{		borderRadius: scale(16),
                            backgroundColor: "#638bf0"}}>
                        <Text style={{fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(13),
                            color: "#ffffff",paddingLeft:moderateScale(18),marginRight:moderateScale(16),paddingVertical:moderateScale(10)}}>重置扣费</Text>
                        </View>
                        <View style={{		borderRadius: scale(16),
                            backgroundColor: "#638bf0"}}>
                        <Text style={{fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(13),
                            color: "#ffffff",paddingLeft:moderateScale(17),marginRight:moderateScale(17),paddingTop:moderateScale(9),paddingBottom:moderateScale(11)}}>完成签约</Text>
                        </View>
                        <View style={{		borderRadius: scale(16),
                            backgroundColor: "#638bf0"}}>
                        <Text style={{fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(13),
                            color: "#ffffff",paddingLeft:moderateScale(17),marginRight:moderateScale(18),paddingTop:moderateScale(9),paddingBottom:moderateScale(11)}}>终止项目</Text>
                        </View>
                    </View>
                </View>
                </View>
            </SafeAreaView>
        );
    }

}
