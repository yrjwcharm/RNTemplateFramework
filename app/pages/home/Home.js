import React, {PureComponent} from 'react';
import {View, SafeAreaView,FlatList,Image, StatusBar, TouchableOpacity,ImageBackground, Text} from 'react-native' ;
import Title from '../../components/Title1';
import Calendar from '../../../screens/expandableCalendar'
import Icon from 'react-native-vector-icons/Ionicons'
export default class Home extends PureComponent {
    // 默认属性
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state={
            changeStatus:0,
            data:[]
        }
        StatusBar.setHidden(true)

    }
    componentDidMount(): void {
    }

    _custManagePage=()=>{
        this.props.navigation.navigate('CustManagement');
    }
    _contractSign=()=>{
        this.props.navigation.navigate('ContractSign');
    }
    _financialReconciliation=()=>{
        this.props.navigation.navigate('FinancialReconciliation')
    }
    _businessQuery=()=>{
        this.props.navigation.navigate('BusinessQuery')
    }
    _change=()=>{
        if(this.state.changeStatus===0){
            this.setState({changeStatus:1})
        }else{
            this.setState({changeStatus:0})
        }
    }
    _globalConfig=()=>{
        this.props.navigation.navigate('ComprehensiveConfiguration');
    }

    _renderItem=()=>{
        return (
            <View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={Images.solid_dot} style={{width:px2dp(14),height:px2dp(14)}}/>
                    <Text style={{fontSize: px2dp(28),
                        color: "#666666"}}>新增待办任务204条</Text>
                </View>
                <Image source={Images.arrow} style={{width:px2dp(10),height:px2dp(20)}}/>
            </View>
        );
    }
    // 渲染
    render() {
        const {changeStatus}=this.state;
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'#eee'}}>
                {changeStatus===0?  <Sub1 CI={this}/>:<Sub2 CI={this}/>}
            </SafeAreaView>
        );
    }
}

const Sub1=(props)=>{
   const {CI}=props;
    return (
        <View >
            <Calendar/>
            <View style={{paddingHorizontal:moderateScale(13)}}>
            <View style={{	backgroundColor: "#f3f3f3",
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "#d8d9db",marginTop:moderateScale(10),paddingBottom:moderateScale(22)}}>
                <View style={{marginTop:moderateScale(16),marginLeft:moderateScale(24)}}>
                    <Text style={{fontFamily: "PingFangSC-Medium",
                        fontSize: moderateScale(15),
                        color: "#333333"}}>常用功能</Text>
                </View>
                <View style={{marginTop:moderateScale(17),flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={CI._custManagePage}>
                        <View style={{alignItems:'center'}}>
                            <Image source={Images.cus_manage} style={{width:scale(21),height:verticalScale(26)}}/>
                            <Text style={{fontFamily: "PingFangSC-Regular",
                                fontSize: moderateScale(13),
                                color: "#666666",marginTop:moderateScale(14)}}>客户管理</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{alignItems:'center'}}>
                        <Image source={Images.allocate_audit} style={{width:scale(26),height:verticalScale(23)}}/>
                        <Text style={{fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(13),
                            color: "#666666",marginTop:moderateScale(17)}}>分配审核</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={CI._contractSign}>
                        <View style={{alignItems:'center'}}>
                            <Image source={Images.contract_sign} style={{width:scale(21),height:verticalScale(24)}}/>
                            <Text  style={{fontFamily: "PingFangSC-Regular",
                                fontSize: moderateScale(13),
                                color: "#666666",marginTop:moderateScale(16)}}>合同签署</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:moderateScale(24),flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                    <View style={{alignItems:'center'}}>
                        <Image source={Images.lend_confirm} style={{width:scale(27),height:verticalScale(26)}}/>
                        <Text style={{fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(13),
                            color: "#666666",marginTop:moderateScale(14)}}>放款确认</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={CI._financialReconciliation}>
                        <View style={{alignItems:'center'}}>
                            <Image source={Images.check_reimbursement} style={{width:scale(26),height:verticalScale(20)}}/>
                            <Text style={{fontFamily: "PingFangSC-Regular",
                                fontSize: moderateScale(13),
                                color: "#666666",marginTop:moderateScale(17)}}>还款对账</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={CI._businessQuery}>
                        <View style={{alignItems:'center'}}>
                            <Image source={Images.contract_sign} style={{width:scale(21),height:verticalScale(24)}}/>
                            <Text  style={{fontFamily: "PingFangSC-Regular",
                                fontSize: moderateScale(13),
                                color: "#666666",marginTop:moderateScale(14)}}>业务查询</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            <View style={{flex:1,justifyContent:'flex-end',position:'absolute',right:moderateScale(5),bottom:-moderateScale(18)}}>
                <TouchableOpacity activeOpacity={0.8} onPress={CI._globalConfig}>
            <ImageBackground source={Images.config} style={{width:scale(44)}}>
                    <Text style={{marginLeft:moderateScale(16),marginRight:moderateScale(12),marginTop:moderateScale(28),marginBottom: moderateScale(9)}}>配置</Text>
            </ImageBackground>
                </TouchableOpacity>
            </View>

        </View>
    );
}

/// 渲染一个空白页，当列表无数据的时候显示。这里简单写成一个View控件


const Sub2=(props)=>{
   const {CI}=props;
    return (
        <View style={{flex:1}}>
            <ImageBackground source={Images.ad} style={{width:scale(375)}} resizeMode={'stretch'}>
                <View style={{width:px2dp(750),height:verticalScale(210)}}>
                    <Title title={''} back forward onPressForward={CI._change}/>
                </View>
            </ImageBackground>
            <View style={{marginTop:-moderateScale(20),borderTopLeftRadius: scale(10),
                borderTopRightRadius: scale(10),
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                backgroundColor: "#ffffff",paddingTop:moderateScale(15),paddingBottom:moderateScale(22)}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:moderateScale(24),marginRight:moderateScale(22)}}>
                    <Text style={{fontFamily: "PingFangSC-Medium",
                        fontSize: moderateScale(15),
                        color: "#333333"}}>数据统计</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{	fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(14),
                            color: "#666666",marginRight:moderateScale(8)}}>查看日历</Text>
                        <Image  source={Images.forward} style={{width:scale(5),height:verticalScale(11)}}/>
                    </View>
                </View>
            <View style={{marginLeft:moderateScale(10),marginRight:moderateScale(15),marginTop:moderateScale(20),flexDirection:'row',justifyContent:'space-around'}}>
                <ImageBackground source={Images.wait_handle_task} resizeMode={'contain'} style={{width:scale(153),}}>
                    <View>
                        <Text style={{marginLeft:moderateScale(17),marginTop:moderateScale(13),fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(12),
                            color: "#93a6d5"}}>代办任务</Text>

                    </View>
                    <Text style={{marginLeft:moderateScale(18),marginTop:moderateScale(9),fontFamily: "DIN-Bold",
                        fontSize: moderateScale(23),
                        color: "#5580f2",marginBottom: moderateScale(11)}}>22</Text>
                </ImageBackground>
                <ImageBackground source={Images.register_no_apply} resizeMode={'contain'}  style={{width:scale(153)}}>
                    <View>
                        <Text style={{marginLeft:moderateScale(17),marginTop:moderateScale(13),	fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(12),
                            color: "#f19b5a"}}>注册未申请</Text>

                    </View>
                    <Text style={{marginLeft:moderateScale(18),marginTop:moderateScale(9),	fontFamily: "DIN-Bold",
                        fontSize: moderateScale(23),
                        color: "#e47a3f"}}>0</Text>
                </ImageBackground>
            </View>
            <View style={{marginLeft:moderateScale(10),marginRight:moderateScale(15),marginTop:moderateScale(10),flexDirection:'row',justifyContent:'space-around'}}>
                <ImageBackground source={Images.fk} resizeMode={'contain'} style={{width:scale(153),}}>
                    <View>
                        <Text style={{marginLeft:moderateScale(17),marginTop:moderateScale(13),fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(12),
                            color: "#79cd9c"}}>新增放款</Text>

                    </View>
                    <Text style={{marginLeft:moderateScale(18),marginTop:moderateScale(9),fontFamily: "DIN-Bold",
                        fontSize: moderateScale(23),
                        color: "#32ac62"}}>22</Text>
                </ImageBackground>
                <ImageBackground source={Images.hk} resizeMode={'contain'}  style={{width:scale(153)}}>
                    <View>
                        <Text style={{marginLeft:moderateScale(17),marginTop:moderateScale(13),	fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(12),
                            color: "#e5a934"}}>新增还款</Text>

                    </View>
                    <Text style={{marginLeft:moderateScale(18),marginTop:moderateScale(9),	fontFamily: "DIN-Bold",
                        fontSize: moderateScale(23),
                        color: "#e8a838"}}>0</Text>
                </ImageBackground>
            </View>
            </View>
            <View style={{	borderTopLeftRadius: moderateScale(10),
                borderTopRightRadius: moderateScale(10),
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                backgroundColor: "#ffffff",marginTop:moderateScale(10),paddingBottom:moderateScale(22)}}>
                <View style={{marginTop:moderateScale(16),marginLeft:moderateScale(24)}}>
                    <Text style={{fontFamily: "PingFangSC-Medium",
                        fontSize: moderateScale(15),
                        color: "#333333"}}>常用功能</Text>
                </View>
                <View style={{marginTop:moderateScale(17),flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={CI._custManagePage}>
                    <View style={{alignItems:'center'}}>
                        <Image source={Images.cus_manage} style={{width:scale(21),height:verticalScale(26)}}/>
                        <Text style={{fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(13),
                            color: "#666666",marginTop:moderateScale(14)}}>客户管理</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={{alignItems:'center'}}>
                        <Image source={Images.allocate_audit} style={{width:scale(26),height:verticalScale(23)}}/>
                        <Text style={{fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(13),
                            color: "#666666",marginTop:moderateScale(17)}}>分配审核</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={CI._contractSign}>
                    <View style={{alignItems:'center'}}>
                        <Image source={Images.contract_sign} style={{width:scale(21),height:verticalScale(24)}}/>
                        <Text  style={{fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(13),
                            color: "#666666",marginTop:moderateScale(16)}}>合同签署</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:moderateScale(24),flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                    <View style={{alignItems:'center'}}>
                        <Image source={Images.lend_confirm} style={{width:scale(27),height:verticalScale(26)}}/>
                        <Text style={{fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(13),
                            color: "#666666",marginTop:moderateScale(14)}}>放款确认</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={CI._financialReconciliation}>
                    <View style={{alignItems:'center'}}>
                        <Image source={Images.check_reimbursement} style={{width:scale(26),height:verticalScale(20)}}/>
                        <Text style={{fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(13),
                            color: "#666666",marginTop:moderateScale(17)}}>还款对账</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={CI._businessQuery}>
                    <View style={{alignItems:'center'}}>
                        <Image source={Images.contract_sign} style={{width:scale(21),height:verticalScale(24)}}/>
                        <Text  style={{fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(13),
                            color: "#666666",marginTop:moderateScale(14)}}>业务查询</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

