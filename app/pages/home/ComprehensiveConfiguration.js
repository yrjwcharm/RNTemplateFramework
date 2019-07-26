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
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import Select from "teaset/components/Select/Select";
export default class ComprehensiveConfiguration extends PureComponent {
    // 默认属性
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            index: 0,
            routes: [
                {key: 'first', title: '通知短信'},
                {key: 'second', title: '自动分配'},
                {key: 'third', title: '信用分数'},
                {key: 'fourth', title: '认证配置'},
            ],
        };
    }
    // 渲染
    render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'#eee'}}>
                <Title title={'综合配置'} back onPressBack={()=>this.props.navigation.goBack()}/>
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
        return (
            <View style={{flex:1,marginTop:moderateScale(10),}}>
            <View style={{backgroundColor:'#F5F5F5'}}>
            <View style={{marginLeft:moderateScale(20),paddingRight:moderateScale(20),borderBottomWidth:StyleSheet.hairlineWidth,borderBottomColor:'#e6e6e6',height:verticalScale(75),justifyContent:'center',}}>
                <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                    <View>
                        <Text style={{fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(16),
                            color: "#333333"}}>曹陶陶</Text>
                        <Text style={{fontFamily: "PingFangSC-Regular",
                            fontSize: moderateScale(13),
                            marginTop:moderateScale(10),
                            color: "#999999"}}>13526452090</Text>
                    </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{fontFamily: "PingFangSC-Regular",
                                fontSize: moderateScale(13),
                                color: "#666666",marginRight:moderateScale(8)}}>通知</Text>
                            <Image source={Images.open} resizeMode={'contain'} style={{marginTop:moderateScale(10),width:scale(59),height:verticalScale(25)}}/>
                            <Image source={Images.separator____1} style={{marginHorizontal:moderateScale(15),width:scale(1),height:verticalScale(20)}}/>
                            <Image source={Images.edit___1} style={{width:scale(15),height:verticalScale(15)}}/>

                        </View>
                </View>
            </View>
            </View>
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
                        <Text style={{marginLeft:moderateScale(11),	fontFamily: "PingFangSC-Medium",
                            fontSize: moderateScale(17),
                            color: "#ffffff"}}>新增通知人</Text>
                    </View>
                </View>
            </View>
        );
    }
}
class SecondRoute extends  PureComponent{
    render(){
        return (
            <View style={{flex:1,marginTop:moderateScale(10)}}>
                <View style={{backgroundColor:'#F5F5F5'}}>
                    <View style={{marginLeft:moderateScale(20),paddingRight:moderateScale(20),borderBottomWidth:StyleSheet.hairlineWidth,borderBottomColor:'#e6e6e6',height:verticalScale(75),justifyContent:'center',}}>
                        <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                            <View>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Text style={{fontFamily: "PingFangSC-Regular",
                                        fontSize: moderateScale(16),
                                        color: "#333333"}}>曹陶陶</Text>
                                    <View style={{marginLeft:moderateScale(5),	borderTopLeftRadius: scale(8),
                                        borderTopRightRadius: scale(8),
                                        borderBottomLeftRadius: 0,
                                        borderBottomRightRadius: scale(8),
                                        backgroundColor: "#dde7ff"}}>
                                        <Text style={{	fontFamily: "PingFangSC-Regular",
                                            fontSize: moderateScale(11),
                                            color: "#4a79e0",paddingHorizontal:moderateScale(8),paddingTop:moderateScale(4),paddingBottom:moderateScale(3)}}>超级管理员</Text>
                                    </View>
                                </View>
                                <Text style={{fontFamily: "PingFangSC-Regular",
                                    fontSize: moderateScale(13),
                                    marginTop:moderateScale(10),
                                    color: "#999999"}}>13526452090</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{fontFamily: "PingFangSC-Regular",
                                    fontSize: moderateScale(13),
                                    color: "#666666",marginRight:moderateScale(8)}}>参与分配</Text>
                                <Image source={Images.open} resizeMode={'contain'} style={{marginTop:moderateScale(10),width:scale(59),height:verticalScale(25)}}/>
                                <Image source={Images.separator____1} style={{marginHorizontal:moderateScale(15),width:scale(1),height:verticalScale(20)}}/>
                                <Image source={Images.delete} style={{width:scale(15),height:verticalScale(15)}}/>

                            </View>
                        </View>
                    </View>
                </View>
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
                        <Text style={{marginLeft:moderateScale(11),	fontFamily: "PingFangSC-Medium",
                            fontSize: moderateScale(17),
                            color: "#ffffff"}}>新增分配人</Text>
                    </View>
                </View>
            </View>
        );
    }
}
class ThirdRoute extends  PureComponent{
    render(){
        return (
            <View style={{flex:1}}>
                <View style={{marginTop:moderateScale(15),flexDirection:'row',justifyContent:'center',position:'relative',left:0,right:0}}>
                    <ImageBackground source={Images.credit_point} style={{width:scale(325)}} resizeMode={'stretch'}>
                        <View style={{width:scale(325)}}>
                        <View style={{marginTop:moderateScale(17),marginBottom:moderateScale(10),marginHorizontal:moderateScale(18),flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={Images.reward} resizeMode={'contain'} style={{width:scale(23),height:verticalScale(23)}}/>
                                <Text style={{fontFamily: "PingFangSC-Regular",
                                    fontSize: moderateScale(16),
                                    color: "#ffffff",marginLeft:moderateScale(10)}}>信用分数</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{fontFamily: "PingFangSC-Regular",
                                    fontSize: moderateScale(13),
                                    color: "#ffffff",marginRight:moderateScale(7)}}>执行状态</Text>
                                <Image source={Images.open} resizeMode={'contain'} style={{marginTop:moderateScale(10),width:scale(59),height:verticalScale(25)}}/>
                                <Image source={Images.separator____________________1} style={{marginHorizontal:moderateScale(15),width:scale(1),height:verticalScale(20)}}/>
                                <Image source={Images.edit_________________________1} style={{width:scale(15),height:verticalScale(15)}}/>
                            </View>
                        </View>
                            <View style={{marginTop:moderateScale(19)}}/>
                            <CustomInput title={'直接通过'} icon={Images.zjtg} icon1={Images.dy} detail={'699分'}/>
                            <View style={{marginTop:moderateScale(10)}}/>
                            <CustomInput title={'人工审核'} icon={Images.rgsh} detail={'599分~699分'}/>
                            <View style={{marginTop:moderateScale(10)}}/>
                            <CustomInput title={'存疑审核'} icon={Images.cysh} detail={'499分~599分'}/>
                            <View style={{marginTop:moderateScale(10)}}/>
                            <CustomInput title={'直接拒绝'} icon={Images.zjjj}icon1={Images.xy} detail={'499分'}/>
                            <View style={{marginTop:moderateScale(28)}}/>
                        </View>
                    </ImageBackground>

                </View>
            </View>
        );
    }
}
const BACON_IPSUM =
    'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const ITEMS = [
    {
        title: '周周贷',
        content: BACON_IPSUM,
    },
    {
        title: '月月贷',
        content: BACON_IPSUM,
    },
];

const SELECTORS = [
    {
        title: 'First',
        value: 0,
    },
    {
        title: 'Third',
        value: 2,
    },
    {
        title: 'None',
    },
];

class FourthRoute extends  PureComponent{
    constructor(){
        super();
        this.state= {
            activeSections: [],
            collapsed: true,
        }
    }
    setSections = sections => {
        this.setState({
            activeSections: sections.includes(undefined) ? [] : sections,
        });
    };

    renderHeader = (section, _, isActive) => {
        return (
            <Animatable.View
                duration={400}
                style={{backgroundColor:'#f5f5f5',height:verticalScale(50),justifyContent:'center',borderBottomColor:'#e6e6e6',borderBottomWidth:scale(1/2)}}
            >
                <View style={{marginLeft:moderateScale(23),marginRight:moderateScale(21),flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{fontFamily: "PingFangSC-Regular",
                    fontSize: moderateScale(16),
                    color: "#333333"}}>{section.title}</Text>
                <Image source={isActive?Images.up:Images.down} style={{width:scale(14),height:verticalScale(7)}}/>
                </View>
            </Animatable.View>
        );
    };

    renderContent=(section, _, isActive)=> {
        return (
            <Animatable.View
                duration={400}
                style={{height:verticalScale(60),justifyContent:'center',backgroundColor:'#eee'}}
            >
               <View style={{marginLeft:moderateScale(21),flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingRight:moderateScale(14)}}>
                   <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{	fontFamily: "PingFangSC-Regular",
                        fontSize: moderateScale(14),
                        color: "#666666"}}>
                        全景雷达
                    </Text>
                   <Image source={Images.select}  resizeMode={'contain'} style={{marginLeft:moderateScale(6),width:scale(12),height:verticalScale(12)}}/>
                   </View>
                   <View style={{flexDirection:'row',alignItems:'center'}}>
                   <Image source={Images.open} style={{marginTop:moderateScale(10),width:scale(59),height:verticalScale(25)}} resizeMode={'contain'}/>
                   <View style={{borderRadius: scale(4),
                       backgroundColor: "#f5f5f5",
                       borderStyle: "solid",
                       marginRight:moderateScale(10),
                       borderWidth: scale(1),
                       borderColor: "#dddddd"}}>
                   <Text style={{fontFamily: "PingFangSC-Regular",
                       fontSize: moderateScale(13),
                       paddingVertical:moderateScale(10),
                       paddingLeft:moderateScale(8),
                       paddingRight:moderateScale(11),
                       color: "#666666"}}>有效 30 天</Text>
                   </View>
                   <Select value={'自动调用'} style={{width:scale(76),
                       height: verticalScale(32),
                       borderRadius: scale(4),
                       backgroundColor: "#f5f5f5",
                       borderStyle: "solid",
                       borderWidth: scale(1),
                       borderColor: "#dddddd"}} valueStyle={{fontFamily: "PingFangSC-Regular",
                       fontSize: moderateScale(13),
                       color: "#666666"}} icon={<Image source={Images.drop_down_arrow} style={{marginRight:moderateScale(8),width:scale(9),height:verticalScale(6)}}/> }/>
                 </View>
               </View>
            </Animatable.View>
        );
    }

    render(){
        const {activeSections}=this.state;
        return (
            <View style={{flex:1,marginTop:moderateScale(10),}}>
                <Accordion
                    activeSections={activeSections}
                    sections={ITEMS}
                    touchableComponent={TouchableOpacity}
                    expandMultiple={false}
                    renderHeader={this.renderHeader}
                    renderContent={this.renderContent}
                    duration={400}
                    onChange={this.setSections}
                />
            </View>

        );
    }
}
const CustomInput=(props)=>{
    return(
        <View style={{borderRadius: scale(4),
            backgroundColor: "#edf1fa",
            borderStyle: "solid",
            width:scale(285),
            height:verticalScale(44),
            justifyContent:'center',
            borderWidth: scale(1),
            marginLeft:moderateScale(24),
            borderColor: "#eaeaea"}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={props.icon} style={{marginLeft:moderateScale(28),width:scale(7),height:verticalScale(7)}}/>
            <Text style={{fontFamily: "PingFangSC-Regular",
                fontSize: moderateScale(15),
                marginLeft:moderateScale(10),
                marginRight:moderateScale(24),
                color: "#666666"}}>
                {props.title}
            </Text>
            {props.icon1?<Image source={props.icon1} style={{marginRight:moderateScale(4),width:scale(8),height:verticalScale(8)}}/>:<View/>}
            <Text style={{fontFamily: "PingFangSC-Regular",
                fontSize: moderateScale(15),
                color: "#333333"}}>{props.detail}</Text>
        </View>
        </View>
    );
}
