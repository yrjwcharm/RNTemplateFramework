import React, {PureComponent} from 'react';
import {
    SafeAreaView,
    Image,
    FlatList,
    Platform,
    BackHandler,
    View,
    Text,
    TextInput,
    Alert,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native'
import Title from '../../components/Title'
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
import {Input,Select} from "teaset";
import {Input as RKInput } from 'react-native-ui-kitten'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Swiper from 'react-native-swiper'
export default class ApprovalDetail extends PureComponent {
    // 默认属性
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            index: 0,
            routes: [
                {key: 'first', title: '基本信息审核'},
                {key: 'second', title: '审核结果输出'},
            ],
        };
    }
    // 渲染
    render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'#eee'}}>
                <Title title={'审核详情'} back onPressBack={()=>this.props.navigation.goBack()}/>
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: () => <FirstRoute {...this.props} />,
                        second: () => <SecondRoute {...this.props} />,
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
    constructor(){
        super();
        this.state = {
            index: 0,
            routes: [
                {key: 'third', title: '工作信息'},
                {key: 'fourth', title: '联系人信息'},
                {key: 'fifth', title: '相同联系人'},
                {key: 'sixth', title: '联系人关联'},
            ],
        };
    }
    render(){
        return(
            <View style={{flex:1}}>
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                    <View>
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
                                <View style={{height:verticalScale(40),justifyContent:'center',borderBottomColor:'#e6e6e6',borderBottomWidth:StyleSheet.hairlineWidth}}>
                                    <View style={{marginLeft:moderateScale(18),flexDirection:'row',alignItems:'center'}}>
                                        <Image source={Images.separator_line} style={{width:scale(3),height:verticalScale(15)}}/>
                                        <Text style={{marginLeft:moderateScale(7),	fontFamily: "PingFangSC-Medium",
                                            fontSize: moderateScale(15),
                                            color: "#666666"}}>借款意向</Text>
                                    </View>
                                </View>
                                <BuildInput name={'借款产品：'} value={'闪电贷'} />
                                <BuildInput1 name={'借款用途：'} value={'医疗'} />
                                <BuildInput1 name={'借款金额：'} value={'1000'} />
                                <BuildInput1 name={'借款期数：'} value={'1'} />
                                <BuildInput1 name={'总还款额：'} value={'1120'} />
                                <BuildInput1 name={'利息费用：'} value={'120'} />
                                <BuildInput1 name={'实际到账：'} value={'880'} />
                                <BuildInput1 name={'首期还款：'} value={'1000'} />
                            </View>
                        </View>
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
                                <View style={{height:verticalScale(40),justifyContent:'center',borderBottomColor:'#e6e6e6',borderBottomWidth:StyleSheet.hairlineWidth}}>
                                    <View style={{marginLeft:moderateScale(18),flexDirection:'row',alignItems:'center'}}>
                                        <Image source={Images.separator_line} style={{width:scale(3),height:verticalScale(15)}}/>
                                        <Text style={{marginLeft:moderateScale(7),	fontFamily: "PingFangSC-Medium",
                                            fontSize: moderateScale(15),
                                            color: "#666666"}}>客户信息</Text>
                                    </View>
                                </View>
                                <BuildInput name={'姓名：'} value={'闪电贷'} />
                                <BuildInput1 name={'证件号码：'} value={'医疗'} />
                                <BuildInput1 name={'年龄：'} value={'1000'} />
                                <BuildInput2 name={'手机号：'} value={'1'} />
                                <BuildInput1 name={'客户性别：'} value={'1120'} />
                                <BuildInput1 name={'婚姻状况：'} value={'120'} />
                                <BuildInput1 name={'身份证地址：'} value={'880'} />
                            </View>
                        </View>
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
                                <View style={{height:verticalScale(40),justifyContent:'center',borderBottomColor:'#e6e6e6',borderBottomWidth:StyleSheet.hairlineWidth}}>
                                    <View style={{marginLeft:moderateScale(18),flexDirection:'row',alignItems:'center'}}>
                                        <Image source={Images.separator_line} style={{width:scale(3),height:verticalScale(15)}}/>
                                        <Text style={{marginLeft:moderateScale(7),	fontFamily: "PingFangSC-Medium",
                                            fontSize: moderateScale(15),
                                            color: "#666666"}}>证件资料</Text>
                                    </View>
                                </View>
                            </View>
                            <Swiper horizontal={true} height={verticalScale(187)} showsButtons={true} nextButton={<Image source={Images.next} resizeMode={'contain'} style={{width:scale(28),height:verticalScale(28)}}/> } prevButton={<Image source={Images.prev} style={{width:scale(28),height:verticalScale(28)}}/>}>
                                    <Image source={Images.slide} style={{width:scale(350),height:verticalScale(187)}}/>
                                    <Image source={Images.slide} style={{width:scale(350),height:verticalScale(187)}}/>
                            </Swiper>
                        </View>
                        <View style={{marginTop:moderateScale(11)}}/>
                        <TabView
                            navigationState={this.state}
                            renderScene={SceneMap({
                                third: () => <ThirdRoute {...this.props} />,
                                fourth: () => <FourthRoute {...this.props} />,
                                fifth: () => <FifthRoute {...this.props} />,
                                sixth: () => <SixRoute {...this.props} />,
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
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}
class SecondRoute extends  PureComponent{
    render(){
        return(
            <View style={{flex:1}}>
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                    <View>
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
                        <View style={{height:verticalScale(40),justifyContent:'center',borderBottomColor:'#e6e6e6',borderBottomWidth:StyleSheet.hairlineWidth}}>
                            <View style={{marginLeft:moderateScale(18),flexDirection:'row',alignItems:'center'}}>
                                <Image source={Images.loan_audit} style={{width:scale(25),height:verticalScale(21)}}/>
                                <Text style={{marginLeft:moderateScale(7),	fontFamily: "PingFangSC-Medium",
                                    fontSize: moderateScale(15),
                                    color: "#666666"}}>借款审核</Text>
                            </View>
                        </View>
                        <BuildInput3 name={'审批金额：'} value={'1000'}/>
                        <BuildSelect name={'借款期限：'} value={'1000'}/>
                        <BuildInput3 name={'意见说明：'} value={'1000'}/>
                        <View style={{marginBottom:moderateScale(26),marginTop:moderateScale(33),justifyContent:'space-between',marginLeft:moderateScale(52),marginRight:moderateScale(56),flexDirection:'row',alignItems:'center'}}>
                            <View style={{borderRadius: scale(18),
                                backgroundColor: "#f5f5f5",
                                borderStyle: "solid",
                                borderWidth: scale(1),
                                borderColor: "#4a79e0"}}>
                            <Text style={{fontFamily: "PingFangSC-Medium",
                                fontSize: moderateScale(16),
                                color: "#4a79e0",paddingLeft:moderateScale(40),paddingRight:moderateScale(43),paddingTop:moderateScale(11),paddingBottom:moderateScale(11)}}>拒绝</Text>
                            </View>
                            <View style={{borderRadius: scale(18),
                                backgroundColor: "#4a79e0",
                                borderStyle: "solid",
                                borderWidth: scale(1),
                                borderColor: "#4a79e0"}}>
                            <Text style={{fontFamily: "PingFangSC-Medium",
                                fontSize: moderateScale(16),
                                color: "#ffffff",paddingLeft:moderateScale(42),paddingRight:moderateScale(42),paddingTop:moderateScale(10),paddingBottom:moderateScale(11)}}>通过</Text>
                            </View>
                        </View>
                        <View>
                            <Image source={Images.bottom} style={{width:scale(330),height:verticalScale(3)}} resizeMode={'contain'}/>
                        </View>
                    </View>
                </View>
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
                        <View style={{height:verticalScale(40),justifyContent:'center',borderBottomColor:'#e6e6e6',borderBottomWidth:StyleSheet.hairlineWidth}}>
                            <View style={{marginLeft:moderateScale(18),flexDirection:'row',alignItems:'center'}}>
                                <Image source={Images.separator_line} style={{width:scale(3),height:verticalScale(15)}}/>
                                <Text style={{marginLeft:moderateScale(7),	fontFamily: "PingFangSC-Medium",
                                    fontSize: moderateScale(15),
                                    color: "#666666"}}>整体命中</Text>
                            </View>
                        </View>
                        <BuildInput1 name={'决策建议：'} value={'风险提示'} />
                        <BuildInput1 name={'决策时间：'} value={'2019-05-28'} />
                        <BuildInput1 name={'信用评分：'} value={'76'} />
                        <BuildInput1 name={'命中规则：'} value={'人工审核'} />
                    </View>
                </View>
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
                        <View style={{height:verticalScale(40),justifyContent:'center',borderBottomColor:'#e6e6e6',borderBottomWidth:StyleSheet.hairlineWidth}}>
                            <View style={{marginLeft:moderateScale(18),flexDirection:'row',alignItems:'center'}}>
                                <Image source={Images.separator_line} style={{width:scale(3),height:verticalScale(15)}}/>
                                <Text style={{marginLeft:moderateScale(7),	fontFamily: "PingFangSC-Medium",
                                    fontSize: moderateScale(15),
                                    color: "#666666"}}>详细意见</Text>
                            </View>
                        </View>
                       <View style={{justifyContent:'center',marginHorizontal:moderateScale(15),marginTop:moderateScale(10),height:verticalScale(28),backgroundColor: "#ededed"}}>
                            <View style={{marginLeft:moderateScale(10),marginRight:moderateScale(17),flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(13),
                                        color: "#999999"}}>校验字段/时间</Text>
                                <Text style={{fontFamily: "PingFangSC-Regular",
                                    fontSize: moderateScale(13),
                                    color: "#999999"}}>校验规则</Text>
                            </View>
                       </View>
                        <View style={{marginLeft:moderateScale(25),marginRight:moderateScale(31),borderBottomColor:'#e6e6e6',borderBottomWidth:StyleSheet.hairlineWidth,height:verticalScale(60),justifyContent:'center'}}>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                <View>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(14),
                                        color: "#333333"}}>性别/女</Text>
                                    <Text style={{	fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(12),
                                        marginTop:moderateScale(8),
                                        color: "#999999"}}>2019-05-28 17:47:52</Text>
                                </View>
                                <Text style={{fontFamily: "PingFangSC-Regular",
                                    fontSize: moderateScale(13),
                                    color: "#67bb32"}}>直接通过</Text>
                            </View>
                        </View>
                        <View style={{marginLeft:moderateScale(25),marginRight:moderateScale(31),borderBottomColor:'#e6e6e6',borderBottomWidth:StyleSheet.hairlineWidth,height:verticalScale(60),justifyContent:'center'}}>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                <View>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(14),
                                        color: "#333333"}}>婚姻状况/离异</Text>
                                    <Text style={{	fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(12),
                                        marginTop:moderateScale(8),
                                        color: "#999999"}}>2019-05-28 17:47:52</Text>
                                </View>
                                <Text style={{fontFamily: "PingFangSC-Regular",
                                    fontSize: moderateScale(13),
                                    color: "#e24b49"}}>风险提醒</Text>
                            </View>
                        </View>
                        <View style={{marginLeft:moderateScale(25),marginRight:moderateScale(31),borderBottomColor:'#e6e6e6',borderBottomWidth:StyleSheet.hairlineWidth,height:verticalScale(60),justifyContent:'center'}}>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                <View>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(14),
                                        color: "#333333"}}>信用评分/43</Text>
                                    <Text style={{	fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(12),
                                        marginTop:moderateScale(8),
                                        color: "#999999"}}>2019-05-28 17:47:52</Text>
                                </View>
                                <Text style={{fontFamily: "PingFangSC-Regular",
                                    fontSize: moderateScale(13),
                                    color: "#ef903e"}}>存疑审核</Text>
                            </View>
                        </View>
                    </View>
                </View>
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
                                <View style={{height:verticalScale(40),justifyContent:'center',borderBottomColor:'#e6e6e6',borderBottomWidth:StyleSheet.hairlineWidth}}>
                                    <View style={{marginLeft:moderateScale(18),flexDirection:'row',alignItems:'center'}}>
                                        <Image source={Images.separator_line} style={{width:scale(3),height:verticalScale(15)}}/>
                                        <Text style={{marginLeft:moderateScale(7),	fontFamily: "PingFangSC-Medium",
                                            fontSize: moderateScale(15),
                                            color: "#666666"}}>历史借贷</Text>
                                    </View>
                                </View>
                                <View style={{height:verticalScale(45),justifyContent:'center'}}>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <View style={{marginLeft:moderateScale(23),flexDirection:'row',alignItems:'center'}}>
                                            <Image source={Images.history_loan} style={{width:scale(14),height:verticalScale(14)}}/>
                                            <Text style={{fontFamily: "PingFangSC-Regular",
                                                fontSize: moderateScale(14),
                                                marginLeft:moderateScale(6),
                                                color: "#666666"}}>
                                                项目编号：1558343314641
                                            </Text>
                                        </View>
                                        <Image source={Images.yfk} style={{position:'absolute',zIndex:1,top:0,bottom:0,right:0,width:scale(88),height:verticalScale(72)}}/>
                                    </View>
                                </View>
                                <View style={{paddingHorizontal:moderateScale(20),paddingBottom:moderateScale(16)}}>
                                        <View style={{backgroundColor: "#ededed"}}>
                                            <View style={{marginLeft:moderateScale(23),marginTop:moderateScale(22),marginBottom:moderateScale(25)}}>
                                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                                        fontSize: moderateScale(13),
                                                        color: "#999999"}}>借款金额</Text>
                                                    <Text style={{marginLeft:moderateScale(17),	fontFamily: "PingFangSC-Regular",
                                                        fontSize: moderateScale(14),
                                                        color: "#666666"}}>10000元</Text>
                                                </View>
                                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                                        fontSize: moderateScale(13),
                                                        color: "#999999"}}>立项时间：</Text>
                                                    <Text style={{	fontFamily: "PingFangSC-Regular",
                                                        fontSize: moderateScale(14),
                                                        color: "#666666",marginLeft:moderateScale(17)}}>2019-05-28  17:47:53</Text>
                                                </View>
                                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                                        fontSize: moderateScale(13),
                                                        color: "#999999"}}>贷款时间：</Text>
                                                    <Text style={{	fontFamily: "PingFangSC-Regular",
                                                        fontSize: moderateScale(14),
                                                        color: "#666666",marginLeft:moderateScale(17)}}>2019-05-28至2020-05-28</Text>
                                                </View>
                                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                                        fontSize: moderateScale(13),
                                                        color: "#999999"}}>审核人：</Text>
                                                    <Text style={{	fontFamily: "PingFangSC-Regular",
                                                        fontSize: moderateScale(14),
                                                        color: "#666666",marginLeft:moderateScale(17),}}>苏烟</Text>
                                                </View>

                                            </View>
                                        </View>
                                </View>

                            </View>
                        </View>
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
                                <View style={{height:verticalScale(40),justifyContent:'center',borderBottomColor:'#e6e6e6',borderBottomWidth:StyleSheet.hairlineWidth}}>
                                    <View style={{marginLeft:moderateScale(18),flexDirection:'row',alignItems:'center'}}>
                                        <Image source={Images.separator_line} style={{width:scale(3),height:verticalScale(15)}}/>
                                        <Text style={{marginLeft:moderateScale(7),	fontFamily: "PingFangSC-Medium",
                                            fontSize: moderateScale(15),
                                            color: "#666666"}}>手动调用服务</Text>
                                    </View>
                                </View>
                                <Menu name={'魔杖：'} detail={'去认证'} icon color/>
                                <Menu name={'法院失信人：'} detail={'去认证'} icon color/>
                                <Menu name={'全景雷达：'} detail={'去认证'} icon  color/>
                            </View>
                        </View>
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
                                <View style={{height:verticalScale(40),justifyContent:'center',borderBottomColor:'#e6e6e6',borderBottomWidth:StyleSheet.hairlineWidth}}>
                                    <View style={{marginLeft:moderateScale(18),flexDirection:'row',alignItems:'center'}}>
                                        <Image source={Images.separator_line} style={{width:scale(3),height:verticalScale(15)}}/>
                                        <Text style={{marginLeft:moderateScale(7),	fontFamily: "PingFangSC-Medium",
                                            fontSize: moderateScale(15),
                                            color: "#666666"}}>已认证服务</Text>
                                    </View>
                                </View>
                                <Menu name={'魔杖：'} detail={'查看报告'} icon color/>
                                <Menu name={'支付宝：'} detail={'查看报告'} icon color/>
                                <Menu name={'手机三要素：'} detail={'认证通过'}  />
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}
const BuildInput=(props)=>{
    return(
        <View style={{borderBottomWidth:StyleSheet.hairlineWidth,borderBottomColor:'#e6e6e6',paddingLeft:moderateScale(28),paddingRight:moderateScale(15),flexDirection:'row',justifyContent: 'space-between',alignItems:'center',height:verticalScale(44)}}>
           <Text style={{fontFamily: "PingFangSC-Regular",
               fontSize: moderateScale(13),
               color: "#999999"}}>{props.name}</Text>
            <Input style={{backgroundColor:'transparent',borderWidth:0,fontFamily: "PingFangSC-Regular",
                fontSize: moderateScale(14),
                textAlign:'left',
                flex:1,
                paddingLeft:moderateScale(33),
                color: "#333333"}} value={props.value} onChangeText={props.onChangeText}/>
            <View style={{flexDirection: 'row',alignItems: 'center'}}>
                <Text style={{fontFamily: "PingFangSC-Regular",
                    fontSize: moderateScale(14),
                    color: "#4a79e0",marginRight:moderateScale(10)}}>{'详情'}</Text>
                <Image source={Images.detail_arrow_right_color} style={{width:scale(5),height:verticalScale(10)}}/>
            </View>
        </View>
    );
}
const Menu=(props)=>{
    return(
        <View style={{borderBottomWidth:StyleSheet.hairlineWidth,borderBottomColor:'#e6e6e6',paddingLeft:moderateScale(28),paddingRight:moderateScale(15),flexDirection:'row',justifyContent: 'space-between',alignItems:'center',height:verticalScale(44)}}>
            <Text style={{fontFamily: "PingFangSC-Regular",
                fontSize: moderateScale(13),
                color: "#999999"}}>{props.name}</Text>
            <View style={{flexDirection: 'row',alignItems: 'center'}}>
                <Text style={{fontFamily: "PingFangSC-Regular",
                    fontSize: moderateScale(14),
                    color: props.color?"#4a79e0":"#666",marginRight:moderateScale(10)}}>{props.detail}</Text>
                {props.icon?<Image source={Images.detail_arrow_right_color} style={{width:scale(5),height:verticalScale(10)}}/>:<View/>}
            </View>
        </View>
    );
}
const BuildInput1=(props)=>{
    return(
        <View style={{borderBottomWidth:StyleSheet.hairlineWidth,borderBottomColor:'#e6e6e6',paddingLeft:moderateScale(28),paddingRight:moderateScale(15),flexDirection:'row',justifyContent: 'space-between',alignItems:'center',height:verticalScale(44)}}>
            <Text style={{fontFamily: "PingFangSC-Regular",
                fontSize: moderateScale(13),
                color: "#999999"}}>{props.name}</Text>
            <Input style={{backgroundColor:'transparent',borderWidth:0,fontFamily: "PingFangSC-Regular",
                fontSize: moderateScale(14),
                textAlign:'left',
                flex:1,
                paddingLeft:moderateScale(33),
                color: "#333333"}} value={props.value} onChangeText={props.onChangeText}/>
        </View>
    );
}
const BuildSelect=(props)=>{
    return(
        <View style={{paddingLeft:moderateScale(28),paddingRight:moderateScale(15),flexDirection:'row',justifyContent: 'space-between',alignItems:'center',height:verticalScale(44)}}>
            <Text style={{fontFamily: "PingFangSC-Regular",
                fontSize: moderateScale(13),
                color: "#999999"}}>{props.name}</Text>
            <Select style={{
                width: scale(238),
                height: verticalScale(33),
                borderRadius: moderateScale(2),
                backgroundColor: "#f5f5f5",
                borderStyle: "solid",
                paddingLeft:moderateScale(30),
                borderWidth: moderateScale(1),
                borderColor: "#dddddd"
            }} value={props.value} valueStyle={{	fontFamily: "PingFangSC-Regular",
                fontSize: moderateScale(14),
                color: "#333333"}} icon={<Image source={Images.drop_down} style={{width:scale(9),height:verticalScale(6),marginRight: moderateScale(9)}}/> }/>
        </View>
    );
}
const BuildInput2=(props)=>{
    return(
        <View style={{borderBottomWidth:StyleSheet.hairlineWidth,borderBottomColor:'#e6e6e6',paddingLeft:moderateScale(28),paddingRight:moderateScale(15),flexDirection:'row',justifyContent: 'space-between',alignItems:'center',height:verticalScale(44)}}>
            <Text style={{fontFamily: "PingFangSC-Regular",
                fontSize: moderateScale(13),
                color: "#999999"}}>{props.name}</Text>
            <Input style={{backgroundColor:'transparent',borderWidth:0,fontFamily: "PingFangSC-Regular",
                fontSize: moderateScale(14),
                textAlign:'left',
                flex:1,
                paddingLeft:moderateScale(33),
                color: "#333333"}} value={props.value} onChangeText={props.onChangeText}/>
            <View style={{flexDirection: 'row',alignItems: 'center'}}>
                <Image source={Images.call} style={{width:scale(22),height:verticalScale(22)}}/>
            </View>
        </View>
    );
}
const BuildInput3=(props)=>{
    return(
        <View style={{borderBottomWidth:StyleSheet.hairlineWidth,borderBottomColor:'#e6e6e6',paddingLeft:moderateScale(28),paddingRight:moderateScale(15),flexDirection:'row',justifyContent: 'space-between',alignItems:'center',height:verticalScale(44)}}>
            <Text style={{fontFamily: "PingFangSC-Regular",
                fontSize: moderateScale(13),
                color: "#999999"}}>{props.name}</Text>
            <Input style={{width: scale(245),
                height: verticalScale(33),
                borderRadius: moderateScale(2),
                backgroundColor: "#f5f5f5",
                borderStyle: "solid",
                borderWidth: moderateScale(1),
                borderColor: "#dddddd",fontFamily: "PingFangSC-Regular",
                fontSize: moderateScale(14),
                textAlign:'left',
                flex:1,
                paddingLeft:moderateScale(33),
                color: "#333333"}} value={props.value} onChangeText={props.onChangeText}/>
        </View>
    );
}
class ThirdRoute extends  PureComponent{
    render() {
        return (
            <View>
                <BuildInput name={'公司名称：'} value={'艾尔瓦贸易有限公司'} />
                <BuildInput1 name={'入职时间：'} value={'20190203'} />
                <BuildInput1 name={'税后工资：'} value={'23000'} />
                <BuildInput1 name={'公司电话：'} value={'010-12341234'} />
                <BuildInput1 name={'公司详细地址：'} value={'黑龙江省林甸县林甸镇西街八委169组2号'} />
            </View>
        );
    }
}
class FourthRoute extends  PureComponent{
    render() {
        return (
            <View/>
        );
    }
}
class FifthRoute extends  PureComponent{
    render() {
        return (
            <View/>
        );
    }
}
class SixRoute extends  PureComponent{
    render() {
        return (
            <View/>
        );
    }
}
