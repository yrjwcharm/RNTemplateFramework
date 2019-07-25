import React, {PureComponent} from 'react';
import {
    FlatList,
    Platform,
    BackHandler,
    View,
    Text,
    TextInput,
    Alert,
    ImageBackground,
    TouchableOpacity,
    Image,
    StyleSheet,
    SafeAreaView, Dimensions,
} from 'react-native'
import Title from '../../components/Title'
import Select from "teaset/components/Select/Select";
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
export default class AssignTasks extends PureComponent {
    // 默认属性
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            index: 0,
            routes: [
                {key: 'first', title: '未分配'},
                {key: 'second', title: '已分配'},
            ],
        };
    }

    // 渲染
    render() {
        return (
            <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
                <Title title={'分配任务'} forward/>
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
    constructor() {
        super()
    }
    _toApprovalList=()=>{
        this.props.navigation.navigate('ApprovalList')
    }
     render(){
         return(
             <View style={{flex:1}}>
                 <View style={{paddingHorizontal:moderateScale(13),marginTop:moderateScale(16)}}>
                     <View style={{backgroundColor:'#f5f5f5'}}>
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
                                 <View style={{flexDirection:'row',alignItems:'center'}}>
                                     <Image source={Images.avatar} style={{width:scale(32),height:verticalScale(32)}}/>
                                     <Select value={'阿里'} style={{backgroundColor:'transparent',borderWidth:0}} valueStyle={{fontFamily: "PingFangSC-Regular",
                                         fontSize: moderateScale(15),
                                         color: "#4a79e0"}} icon={<Image source={Images.drop_down_arrow} style={{width:scale(9),height:verticalScale(6)}}/> }/>
                                 </View>
                             </View>
                         </View>
                         <View style={{height:verticalScale(41),justifyContent:'center'}}>
                             <View style={{marginLeft:moderateScale(17),marginRight:moderateScale(15),flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                 <Text style={{fontFamily: "PingFangSC-Regular",
                                     fontSize: moderateScale(13),
                                     color: "#999999"}}>19-05-20  17:08:34</Text>
                                 <TouchableOpacity activeOpacity={0.8} onPress={this._toApprovalList}>
                                 <View style={{flexDirection:'row',alignItems:'center'}}>
                                     <Text style={{	fontFamily: "PingFangSC-Regular",
                                         fontSize: moderateScale(14),
                                         color: "#999999",marginRight:moderateScale(7)}}>详情</Text>
                                     <Image source={Images.detail_arrow_right} style={{width:scale(5),height:verticalScale(10)}}/>
                                 </View>
                                 </TouchableOpacity>
                             </View>
                         </View>
                     </View>
                 </View>
             </View>
         )
     }
}
class SecondRoute extends  PureComponent{
    render(){
        return(
            <View/>
        );
    }
}
