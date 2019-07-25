import React, {PureComponent} from 'react';
import {StyleSheet, View, Image, SafeAreaView, Dimensions} from 'react-native' ;
import Title from "../../components/Title2";
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
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
                {key: 'fourth', title: '业务日历'},
                {key: 'fifth', title: '我的消息'},
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
                        fourth: () => <FourthRoute {...this.props} />,
                        fifth: () => <FifthRoute {...this.props} />,
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
            <View/>
        );
    }
}
class FourthRoute extends  PureComponent{
    render(){
        return(
            <View/>
        );
    }
}
class FifthRoute extends  PureComponent{
    render(){
        return(
            <View/>
        );
    }
}
