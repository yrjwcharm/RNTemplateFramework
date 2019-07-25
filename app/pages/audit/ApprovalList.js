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
    ImageBackground,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import Title from '../../components/Title'
import Select from "teaset/components/Select/Select";
export default class ApprovalList extends PureComponent {
    // 默认属性
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }
    _toApproval=()=>{
        this.props.navigation.navigate('ApprovalDetail')
    }
    // 渲染
    render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'#eee'}}>
                <Title title={'审批列表'} forward back onPressBack={()=>this.props.navigation.goBack()}/>
                    <View style={{paddingHorizontal:moderateScale(13),marginTop:moderateScale(16)}}>
                        <View style={{borderRadius: moderateScale(5),
                            shadowColor: "rgba(0, 0, 0, 0.06)",
                            shadowOffset: {
                                width: 0,
                                height: verticalScale(2)
                            },
                            shadowRadius: 10,
                            shadowOpacity: 1,backgroundColor:'#f5f5f5',paddingBottom:moderateScale(20)}}>
                            <View style={{height:verticalScale(55),justifyContent:'center',borderBottomWidth:StyleSheet.hairlineWidth,borderBottomColor:'#e6e6e6',}}>
                                <View style={{marginLeft:moderateScale(15),marginRight:moderateScale(18),flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Image source={Images.separator_line} style={{width:scale(3),height:verticalScale(15)}}/>
                                        <Text style={{fontFamily: "PingFangSC-Medium",
                                            fontSize: moderateScale(15),
                                            marginLeft:moderateScale(5),
                                            color: "#333333"}}>爱丽丝</Text>
                                        <Image source={Images.separator1} style={{marginHorizontal:moderateScale(10),width:scale(1),height:verticalScale(15)}}/>
                                        <Text style={{	fontFamily: "PingFangSC-Regular",
                                            fontSize: moderateScale(15),
                                            color: "#666666"}}>1558343314641</Text>
                                    </View>
                                    <TouchableOpacity activeOpacity={0.8} onPress={this._toApproval}>
                                    <View style={{borderRadius: moderateScale(4),
                                        backgroundColor: "#638bf0",
                                        borderStyle: "solid",
                                        borderWidth: moderateScale(1),
                                        borderColor: "#5581e1"}}>
                                        <Text style={{fontFamily: "PingFangSC-Regular",
                                            fontSize: moderateScale(13),
                                            paddingTop:moderateScale(5),
                                            paddingBottom:moderateScale(6),
                                            paddingLeft:moderateScale(13),
                                            paddingRight:moderateScale(12),
                                            color: "#ffffff"}}>审核</Text>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{marginTop:moderateScale(20),marginLeft:moderateScale(28)}}>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(14),
                                        color: "#999999"}}>借款金额:</Text>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(15),
                                        color: "#ef903e",marginLeft:moderateScale(12)}}>1000元</Text>
                                </View>
                                <View style={{marginTop:moderateScale(15),flexDirection:'row',alignItems:'center'}}>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(14),
                                        color: "#999999"}}>审核人员:</Text>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(14),
                                        color: "#666666",marginLeft:moderateScale(12)}}>曹陶陶</Text>
                                </View>
                                <View style={{marginTop:moderateScale(15),flexDirection:'row',alignItems:'center'}}>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(14),
                                        color: "#999999"}}>申请时间:</Text>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(14),
                                        color: "#666666",marginLeft:moderateScale(12)}}>2019-05-20 17:08:34</Text>
                                </View>
                            </View>
                        </View>
                    </View>
            </SafeAreaView>
        );
    }

}
