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
    SectionList,
    StyleSheet,
   Dimensions
} from 'react-native'
import Title from '../../components/Title'
import {SceneMap, TabView,TabBar} from "react-native-tab-view";
export default class CustManagement extends PureComponent {
    // 默认属性
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            index: 0,
            routes: [
                { key: 'first', title: '注册未申请' },
                { key: 'second', title: '正式客户' },
                { key:'third', title: '白名单' },
                { key: 'fourth', title: '黑名单' },
            ],
        };
    }
    // 渲染
    render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'#eee'}}>
                <Title back title={'客户管理'} forward onPressBack={()=>this.props.navigation.goBack()}/>
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first:() => <FirstRoute {...this.props} />,
                        second: () => <SecondRoute {...this.props} />,
                        third: () => <ThirdRoute {...this.props} />,
                        fourth: () => <FourthRoute {...this.props} />,
                    })}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width }}
                    renderTabBar={props =>
                        <TabBar
                            {...props}
                            style={{backgroundColor: "#f5f5f5",
                                shadowColor: "#d4d4d4",
                                shadowOffset: {
                                    width: 0,
                                    height: verticalScale(1)
                                },
                                shadowRadius: 0,
                                shadowOpacity: moderateScale(1)}}
                            getLabelText={({ route }) => route.title}
                            labelStyle={{fontFamily: "PingFangSC-Regular",
                                fontSize: moderateScale(15),
                                }}
                            tabStyle={{height:verticalScale(44)}}
                            indicatorStyle={{ backgroundColor: '#4a79e0' }}
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
    constructor(props){
        super()
    }
    _editCust=()=>{
        const {navigation}=this.props;
        navigation.navigate('EditCust');
    }
    _renderItem=({item, index, section: { title, data } })=>{
           return(
               <View style={{backgroundColor:'#fff'}}>
                   <View style={{justifyContent:'center',paddingLeft:moderateScale(18),paddingRight:moderateScale(20),height:verticalScale(50),borderBottomColor:'#f0f0f0',borderBottomWidth:StyleSheet.hairlineWidth,}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{	fontFamily: "PingFangSC-Regular",
                                fontSize: moderateScale(14),
                                color: "#333333"}}>A 同学</Text>
                            <Text style={{marginLeft:moderateScale(18),fontFamily: "PingFangSC-Regular",
                                fontSize: moderateScale(14),
                                color: "#666666"}}>13526452090</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <TouchableOpacity activeOpacity={0.8} onPress={this._editCust}>
                            <Image source={Images.edit} style={{width:scale(15),height:verticalScale(15)}}/>
                            </TouchableOpacity>
                            <Image source={Images.separator} style={{marginHorizontal:moderateScale(15),width:scale(1),height:verticalScale(20)}}/>
                            <Image source={Images.hmd} style={{width:scale(12),height:verticalScale(16)}}/>
                        </View>
                   </View>
                   </View>
               </View>

           )
    }
    render(){
        return(
            <View style={{flex:1}}>
                <SectionList
                    renderItem={this._renderItem}
                    renderSectionHeader={({ section: { title } }) => (
                        <View>
                            <Text style={{paddingTop:moderateScale(11),fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(13),
                                paddingLeft:moderateScale(16),
                                paddingBottom:moderateScale(5),
                            color: "#999999" }}>{title}</Text>
                        </View>
                    )}
                    sections={[
                        { title: "A", data: ["item1", "item2"] },
                        { title: "B", data: ["item3", "item4"] },
                        { title: "C", data: ["item5", "item6"] }
                    ]}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        )
    }
}
class SecondRoute extends  PureComponent{
    constructor(){
        super()
    }
    render(){
        return(
            <View/>
        )
    }
}
class ThirdRoute extends  PureComponent{
    constructor(){
        super()
    }
    _transformBlankList=()=>{

    }
    _renderItem=({item, index, section: { title, data } })=>{
        return(
            <View style={{backgroundColor:'#fff'}}>
                <View style={{justifyContent:'center',paddingLeft:moderateScale(18),paddingRight:moderateScale(20),height:verticalScale(50),borderBottomColor:'#f0f0f0',borderBottomWidth:StyleSheet.hairlineWidth,}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{	fontFamily: "PingFangSC-Regular",
                                fontSize: moderateScale(14),
                                color: "#333333"}}>A 同学</Text>
                            <Text style={{marginLeft:moderateScale(18),fontFamily: "PingFangSC-Regular",
                                fontSize: moderateScale(14),
                                color: "#666666"}}>13526452090</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <TouchableOpacity activeOpacity={0.8} onPress={this._transformBlankList}>
                                <Image source={Images.transform} resizeMode={'contain'} style={{width:scale(14),height:verticalScale(14)}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        )
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#eee'}}>
                <SectionList
                    renderItem={this._renderItem}
                    renderSectionHeader={({ section: { title } }) => (
                        <View>
                            <Text style={{paddingTop:moderateScale(11),fontFamily: "PingFangSC-Regular",
                                fontSize: moderateScale(13),
                                paddingLeft:moderateScale(16),
                                paddingBottom:moderateScale(5),
                                color: "#999999" }}>{title}</Text>
                        </View>
                    )}
                    sections={[
                        { title: "A", data: ["item1", "item2"] },
                        { title: "B", data: ["item3", "item4"] },
                        { title: "C", data: ["item5", "item6"] }
                    ]}
                    keyExtractor={(item, index) => item + index}
                />
                <View style={{position:'absolute',left:0,right:0,bottom:moderateScale(15),flexDirection:'row',justifyContent:'center'}}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',width: scale(330),
                        height: verticalScale(44),
                        borderRadius: scale(22),
                        backgroundColor: "#4a79e0",
                        shadowColor: "rgba(20, 52, 133, 0.26)",
                        shadowOffset: {
                            width: 0,
                            height: verticalScale(3)
                        },
                        shadowRadius: moderateScale(5),
                        shadowOpacity: 1}}>
                        <Image source={Images.add} style={{width:scale(13),height:verticalScale(13)}}/>
                        <Text style={{	fontFamily: "PingFangSC-Medium",
                            fontSize: moderateScale(17),
                            color: "#ffffff"}}>录入白名单</Text>
                    </View>
                </View>
            </View>
        )
    }
}
class FourthRoute extends  PureComponent{
    constructor(){
        super()
    }
    render(){
        return(
            <View/>
        )
    }
}
