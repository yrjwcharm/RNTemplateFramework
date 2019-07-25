import React, {PureComponent} from 'react';
import {SafeAreaView,StyleSheet,Image,FlatList,Platform,BackHandler,View,Text,TextInput,Alert,ImageBackground,TouchableOpacity} from 'react-native'
import Title from '../../components/Title'
import Select from "teaset/components/Select/Select";
export default class FinancialReconciliation extends PureComponent {
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
                <Title title={'财务对账'} back onPressBack={()=>this.props.navigation.goBack()} forward />
                <View style={{height:verticalScale(44),justifyContent:'center'}}>
                    <View style={{marginLeft:moderateScale(16),marginRight:moderateScale(19), flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={{fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(15),
                            color: "#666666"}}>查账状态：</Text>
                        <Select value={'未放款'} valueStyle={{fontFamily: "PingFangSC-Regular",
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
                <View style={{position:'relative',left:0,right:0,flexDirection:'row',justifyContent:'center'}}>
                    <ImageBackground source={Images.cwdz} resizeMode={'stretch'} style={{width:scale(345),}}>
                        <View style={{width:scale(345),}}>
                        <View style={{height:verticalScale(40),justifyContent:'center'}}>
                            <View style={{marginTop:moderateScale(7),marginLeft:moderateScale(30),marginRight:moderateScale(28),flexDirection:'row',justifyContent:'space-between'}}>
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
                                <View style={{borderRadius: scale(4),
                                    backgroundColor: "#638bf0"}}>
                                <Text style={{fontFamily: "PingFangSC-Regular",
                                    fontSize: moderateScale(13),
                                    paddingHorizontal:moderateScale(12),
                                    paddingTop:moderateScale(5),
                                    paddingBottom:moderateScale(6),
                                    color: "#ffffff"}}>放款</Text>
                                </View>
                            </View>
                        </View>
                            <View style={{marginTop:moderateScale(21),flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:moderateScale(34),marginRight:moderateScale(36)}}>
                            <View>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Text style={{	fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(18),
                                        color: "#ef903e"}}>2,183.55</Text>
                                    <Image source={Images.question} resizeMode={'contain'} style={{marginLeft:moderateScale(5),width:scale(14),hieght:verticalScale(14)}}/>
                                </View>
                                <Text style={{	fontFamily: "PingFangSC-Regular",
                                    fontSize: moderateScale(13),
                                    color: "#999999"}}>应还合计(元)</Text>
                            </View>
                            <View>
                                <Text style={{fontFamily: "PingFangSC-Regular",
                                    fontSize: moderateScale(14),
                                    color: "#666666"}}>2019-05-17</Text>
                                <Text style={{	fontFamily: "PingFangSC-Regular",
                                    fontSize: moderateScale(13),
                                    marginTop:moderateScale(9),
                                    color: "#999999"}}>计划还款日</Text>
                            </View>
                           <Image source={Images.call} style={{width:scale(22),height:verticalScale(22)}}/>
                        </View>
                            <View style={{paddingHorizontal:moderateScale(8),marginTop:moderateScale(21)}}>
                            <View style={{height:verticalScale(35),backgroundColor: "#ebeff8",justifyContent:'center'}}>
                                <View style={{marginLeft:moderateScale(26),flexDirection:'row',alignItems:'center'}}>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(13),
                                        color: "#999999"}}>实还合计</Text>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(14),
                                        color: "#67bb32"}}>2,183.55</Text>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(13),
                                        color: "#999999"}}>元; </Text>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(13),
                                        color: "#999999"}}>实际还款日 2019-05-17</Text>
                                </View>
                            </View>
                        </View>
                        </View>
                    </ImageBackground>
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
                        <View style={{marginHorizontal:moderateScale(61),flexDirection:'row',alignItems:'center',justifyContent:'space-around',}}>
                            <View style={{	borderRadius: scale(16),
                                backgroundColor: "#4a79e0"}}>
                                <Text style={{fontFamily: "PingFangSC-Regular",
                                    fontSize: moderateScale(14),
                                    color: "#ffffff",paddingLeft:moderateScale(30),marginRight:moderateScale(34),paddingTop:moderateScale(9),paddingBottom:moderateScale(10)}}>批量对账</Text>
                            </View>
                            <View  style={{borderRadius: scale(16),
                                backgroundColor: "#638bf0"}}>
                                <Text style={{fontFamily: "PingFangSC-Regular",
                                    fontSize: moderateScale(14),
                                    color: "#ffffff",paddingLeft:moderateScale(18),marginRight:moderateScale(18),paddingTop:moderateScale(9),paddingBottom:moderateScale(10)}}>批量协议支付</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }

}
