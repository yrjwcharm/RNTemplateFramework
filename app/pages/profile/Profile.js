import React, {PureComponent} from 'react';
import {StyleSheet, View, Image, SafeAreaView, Dimensions, Text} from 'react-native' ;
import Title from "../../components/Title2";
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
import {Select} from "teaset";
import PieChartScreen from "../../components/PieChartScreen";
import Calendar from "../../../screens/expandableCalendar";
export default class Profile extends PureComponent {
    // 默认属性
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            index: 0,
            routes: [
                {key: 'first', title: '审核信息'},
                {key: 'second', title: '我的业绩'},
                {key: 'third', title: '业务日历'},
                {key: 'fourth', title: '我的消息'},
            ],
        };
    }
    _userSettings=()=>{
        this.props.navigation.navigate('UserSettings')
    }
    // 渲染
    render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'#eee'}}>
                <Title title={'我的'} forward onPressForward={this._userSettings}/>
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: () => <FirstRoute {...this.props} />,
                        second: () => <SecondRoute {...this.props} />,
                        third: () => <ThirdRoute {...this.props} />,
                        fourth: () => <FourthRoute {...this.props} />,
                    })}
                    onIndexChange={index => this.setState({index})}
                    initialLayout={{width: Dimensions.get('window').width}}
                    renderTabBar={props =>
                        <TabBar
                            {...props}
                            style={{
                                backgroundColor: "#f5f5f5",
                                shadowColor: "#d4d4d4",
                                shadowOffset: {
                                    width: 0,
                                    height: verticalScale(1)
                                },
                                shadowRadius: 0,
                                shadowOpacity: moderateScale(1)
                            }}
                            getLabelText={({route}) => route.title}
                            labelStyle={{
                                fontFamily: "PingFangSC-Regular",
                                fontSize: moderateScale(15),
                            }}
                            tabStyle={{height: verticalScale(44)}}
                            indicatorStyle={{backgroundColor: '#4a79e0'}}
                            activeColor={'#4a79e0'}
                            inactiveColor={'#666666'}

                        />
                    }
                />
            </SafeAreaView>
        );
    }

}
class FirstRoute extends  PureComponent{
    render(){
        return(
            <View/>
        );
    }
}
class SecondRoute extends  PureComponent{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{marginTop:moderateScale(15),paddingHorizontal:moderateScale(13)}}>
                    <View style={{borderRadius: scale(5),
                        backgroundColor: "#f5f5f5",
                        shadowColor: "rgba(0, 0, 0, 0.06)",
                        shadowOffset: {
                            width: 0,
                            height: verticalScale(2)
                        },
                        shadowRadius: scale(10),
                        shadowOpacity: 1,}}>
                        <View style={{height:verticalScale(40),justifyContent:'center',borderBottomColor:'#e6e6e6',borderBottomWidth:scale(1/2)}}>
                            <View style={{marginHorizontal:moderateScale(15),flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={Images.separator_line} style={{width:scale(3),height:verticalScale(15)}}/>
                                <Text style={{marginLeft:moderateScale(7),	fontFamily: "PingFangSC-Medium",
                                    fontSize: moderateScale(15),
                                    color: "#666666"}}>审核通过率</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{fontFamily: "PingFangSC-Regular",
                                    fontSize:moderateScale(15),
                                    marginRight:moderateScale(9),
                                    color: "#666666"}}>
                                    数据统计
                                </Text>
                                <Select style={{width: scale(60),
                                    height: verticalScale(28),
                                    borderRadius: scale(4),
                                    backgroundColor: "#f5f5f5",
                                    borderStyle: "solid",
                                    borderWidth: scale(1),
                                    borderColor: "#e4e4e4",
                                    shadowColor: "rgba(0, 0, 0, 0.06)",
                                    shadowOffset: {
                                        width: 0,
                                        height: verticalScale(2)
                                    },
                                    shadowRadius: scale(10),
                                    shadowOpacity: 1
                                }} value={'当天'} valueStyle={{fontFamily: "PingFangSC-Regular",
                                    fontSize: moderateScale(14),
                                    color: "#666666"}} icon={<Image source={Images.dropdown} style={{width:scale(11),height:verticalScale(7),marginRight:moderateScale(9)}}/> }/>
                            </View>
                            </View>
                        </View>
                        <View style={{marginTop:moderateScale(29)}}/>
                        <PieChartScreen/>
                        <View style={{marginTop:moderateScale(29)}}/>
                        <View style={{height:verticalScale(45),justifyContent:'center',backgroundColor: "#ebf0fa"}}>
                            <View style={{marginHorizontal:moderateScale(25),flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Image source={Images.square_shtg} resizeMode={'contain'} style={{with:scale(6),height:verticalScale(6)}}/>
                                    <Text style={{marginLeft:moderateScale(6),fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(12),
                                        color: "#999999"}}>审核通过</Text>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(16),
                                        color: "#666666",marginLeft:moderateScale(4)}}>160</Text>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Image source={Images.square_rgjj} resizeMode={'contain'} style={{with:scale(6),height:verticalScale(6)}}/>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(12),
                                        color: "#999999",marginLeft:moderateScale(6),}}>人工拒绝</Text>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                            fontSize: moderateScale(16),
                                            color: "#666666",marginLeft:moderateScale(4)}}>112</Text>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Image source={Images.square_xtjj} resizeMode={'contain'} style={{with:scale(6),height:verticalScale(6)}}/>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                            fontSize: moderateScale(12),
                                            color: "#999999",marginLeft:moderateScale(6),}}>系统拒绝</Text>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                                fontSize: moderateScale(16),
                                                color: "#666666",marginLeft:moderateScale(4)}}>48</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
class ThirdRoute extends  PureComponent{
    render(){
        return(
            <View style={{flex:1}}>
                <Calendar/>
            </View>
        );
    }
}
class FourthRoute extends  PureComponent{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{marginTop:moderateScale(12)}}>
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <View style={{borderRadius: scale(2),
                            backgroundColor: "#d1d1d1"}}>
                        <Text style={{	fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(12),
                            paddingHorizontal:moderateScale(10),
                            paddingVertical:moderateScale(5),
                            color: "#ffffff"}}>今天  上午10:50</Text>
                        </View>
                    </View>
                    <View style={{marginHorizontal:moderateScale(15),marginTop:moderateScale(10),borderRadius: 5,
                        backgroundColor: "#f5f5f5",
                        shadowColor: "rgba(0, 0, 0, 0.06)",
                        shadowOffset: {
                            width: 0,
                            height: verticalScale(2)
                        },
                        shadowRadius: scale(10),
                        shadowOpacity: 1}}>
                        <View style={{height:verticalScale(44),justifyContent:'center',borderBottomColor: '#e6e6e6',borderBottomWidth: StyleSheet.hairlineWidth}}>
                            <View style={{marginLeft:moderateScale(21),marginRight:moderateScale(18),flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Image source={Images.message_____1} resizeMode={'contain'} style={{width:scale(19),height:verticalScale(19)}}/>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                        marginLeft:moderateScale(8),
                                        fontSize: moderateScale(15),
                                        color: "#333333"}}>您的1张优惠券到账了</Text>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Image source={Images.message_dot} resizeMode={'contain'} style={{marginRight:moderateScale(11),width:scale(7),height:verticalScale(7)}}/>
                                    <Image source={Images.message_arrow_right} style={{width:scale(6),height:verticalScale(11)}}/>
                                </View>
                            </View>
                        </View>
                        <View style={{marginBottom:moderateScale(20),marginLeft:moderateScale(19),marginRight:moderateScale(20)}}>
                            <Text style={{fontFamily: "PingFangSC-Regular",
                                fontSize: moderateScale(13),
                                color: "#666666"}}>您昨天累计收到一张价值10.0元的优惠券，赶紧去看看吧！</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
