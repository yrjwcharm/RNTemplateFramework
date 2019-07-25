import React, {PureComponent} from 'react';
import {View, SafeAreaView,FlatList,Image, StatusBar, TouchableOpacity,ImageBackground, Text} from 'react-native' ;
import Title from '../../components/Title1';
import CalendarStrip from 'react-native-calendar-strip';
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
            console.log('3333');
        }else{
            this.setState({changeStatus:0})
        }
    }
    _newAddHandle=()=>{

    }
    _listHeaderComponent=()=>{
        return (
            <View style={{height:px2dp(88),backgroundColor:'#f3f3f3',marginHorizontal:px2dp(26),flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{marginLeft:px2dp(78),fontSize: px2dp(28),
                    color: "#666666"}}>2019.6.24 星期三</Text>
                <TouchableOpacity onPress={this._newAddHandle}>
                    <Text style={{borderRadius: px2dp(6),
                        borderStyle: "solid",
                        marginRight:px2dp(26),
                        borderWidth: px2dp(2),
                        borderColor: "#d7d7d7",fontSize: px2dp(26),paddingHorizontal:px2dp(20),paddingVertical:px2dp(12),
                        color: "#668ef1"}}>新建</Text>
                </TouchableOpacity>
        </View>);
    }
    /// 渲染一个空白页，当列表无数据的时候显示。这里简单写成一个View控件
    _renderEmptyView = (item) => {
        return <View/>
    };
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
                {changeStatus===0?  <Sub2 CI={this}/>:<Sub2 CI={this}/>}
            </SafeAreaView>
        );
    }
}

const Sub1=(props)=>{
   const {CI}=props;
    return (
        <View style={{flex:1}}>
        <View style={{position:'absolute',zIndex:1,left:px2dp(22),top:px2dp(30)}}>
            <TouchableOpacity onPress={CI._todayToDo}>
                <Text style={{borderRadius: px2dp(6),
                    borderStyle: "solid",
                    borderWidth:px2dp(2),
                    borderColor: "#d7d7d7",fontSize:px2dp(26),color:'#fff',paddingVertical:px2dp(12), paddingHorizontal: px2dp(20)}}>今天</Text>
            </TouchableOpacity>
        </View>
            <View style={{position:'absolute',zIndex:1,right:px2dp(22),top:px2dp(30)}}>
                <TouchableOpacity onPress={CI._change}>
                    <Text style={{  borderRadius: px2dp(6),
                        color:'#fff',
                        borderStyle: "solid",
                        borderWidth: px2dp(2),
                        borderColor: "#d7d7d7",
                        paddingVertical:px2dp(12),
                        fontSize: px2dp(28),
                        paddingHorizontal: px2dp(20)}}>切换</Text>
                </TouchableOpacity>
        </View>
            <CalendarStrip
                calendarAnimation={{type: 'sequence', duration: 30}}
                daySelectionAnimation={{type: 'background', duration: 300, highlightColor: '#9265DC'}}
                style={{height:px2dp(260), paddingTop: px2dp(40), paddingBottom: px2dp(20)}}
                calendarHeaderStyle={{color: 'white'}}
                calendarColor={'#7743CE'}
                dateNumberStyle={{color: 'white'}}
                dateNameStyle={{color: 'white'}}
                iconLeft={Images.left__arrow}
                iconRight={Images.right__arrow}
                iconContainer={{flex: 0.1}}/>
            <FlatList
                ref={(ref) => {CI.listView = ref}}
                data={CI.state.data}
                ListHeaderComponent={CI._listHeaderComponent}
                renderItem={CI._renderItem}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={this._renderEmptyView}
                />
            {/*<View style={{height:px2dp(88),backgroundColor:'#f3f3f3',marginHorizontal:px2dp(26),flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View style={{marginLeft:px2dp(34),flexDirection:'row',alignItems:'center'}}>
                    <Image source={Images.solid_dot} style={{width:px2dp(14),height:px2dp(14)}}/>
                    <Text style={{marginLeft:px2dp(28),fontSize: px2dp(28),
                        color: "#666666"}}>新增待办任务204条</Text>
                </View>
                <Image source={Images.arrow} style={{marginRight:px2dp(30),width:px2dp(10),height:px2dp(20)}}/>
            </View>*/}
            <View style={{marginBottom:px2dp(51),justifyContent:'flex-end',borderStyle: "solid",
                borderWidth: px2dp(1),
                borderColor: "#d8d9db",marginHorizontal:px2dp(26),marginTop:px2dp(32),backgroundColor:'#f3f3f3',paddingBottom:px2dp(44)}}>
                <Text style={{marginTop:px2dp(20),fontSize: px2dp(30),
                    color: "#333333",marginLeft:px2dp(48)}}>常用功能</Text>
                <View style={{marginTop:px2dp(34),flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                    <View style={{alignItems:'center'}}>
                        <Image source={Images.cus_manage} style={{width:px2dp(42),height:px2dp(52),}}/>
                        <Text style={{marginTop:px2dp(28),fontSize: px2dp(26),
                            color: "#666666"}}>客户管理</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={Images.allocate_audit} style={{width:px2dp(52),height:px2dp(46)}}/>
                        <Text style={{marginTop:px2dp(34),fontSize: px2dp(26),
                            color: "#666666"}}>分配审核</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={Images.contract_sign} style={{width:px2dp(42),height:px2dp(48)}}/>
                        <Text style={{marginTop:px2dp(32),fontSize: px2dp(26),
                            color: "#666666"}}>合同签署</Text>
                    </View>

                </View>
                <View style={{marginTop:px2dp(34),flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                    <View style={{alignItems:'center'}}>
                        <Image source={Images.lend_confirm} style={{width:px2dp(42),height:px2dp(52),}}/>
                        <Text style={{marginTop:px2dp(28),fontSize: px2dp(26),
                            color: "#666666"}}>放款确认</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={CI._financialReconciliation}>
                    <View style={{alignItems:'center'}}>
                        <Image source={Images.check_reimbursement} style={{width:px2dp(52),height:px2dp(46)}}/>
                        <Text style={{marginTop:px2dp(34),fontSize: px2dp(26),
                            color: "#666666"}}>还款对账</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={{alignItems:'center'}}>
                        <Image source={Images.business_query} style={{width:px2dp(42),height:px2dp(48)}}/>
                        <Text style={{marginTop:px2dp(32),fontSize: px2dp(26),
                            color: "#666666"}}>业务查询</Text>
                    </View>

                </View>

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
                    <Title title={''} back forward/>
                </View>
            </ImageBackground>
            <View style={{marginTop:-moderateScale(20),borderTopLeftRadius: moderateScale(10),
                borderTopRightRadius: moderateScale(10),
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

