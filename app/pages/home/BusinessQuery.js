import React, {PureComponent} from 'react';
import {
    SafeAreaView,
    StyleSheet,
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
    Dimensions
} from 'react-native'
import Title from '../../components/Title'
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
import Select from "teaset/components/Select/Select";
export default class BusinessQuery extends PureComponent {
    // 默认属性
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        // 初始状态
        this.state = {
            index: 0,
            routes: [
                {key: 'first', title: '业务查询'},
                {key: 'second', title: '款项查询'},
            ],
        };
    }
    // 渲染
    render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'#eee'}}>
                <Title title={'业务查询'} back onPressBack={()=>this.props.navigation.goBack()} forward/>
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
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{height:verticalScale(44),justifyContent:'center'}}>
                    <View style={{marginLeft:moderateScale(16),marginRight:moderateScale(19), flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={{fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(15),
                            color: "#666666"}}>项目状态：</Text>
                        <Select value={'已完成还款'} valueStyle={{fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(14),
                            color: "#666666"}} style={{	width: scale(96),
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
                                        color: "#999999"}}>审核人员：</Text>
                                    <Text style={{	fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(15),
                                        color: "#666666"}}>曹淘淘</Text>
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
                            <Image source={Images.generate_contract} style={{width:scale(88),height:verticalScale(72)}}/>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
}
class SecondRoute extends  PureComponent{
    render(){
        return(
            <View style={{flex:1}}>

            </View>
        );
    }
}
