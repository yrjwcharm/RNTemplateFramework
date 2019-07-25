import React, {PureComponent} from 'react';
import {ToastAndroid,Image,BackHandler,Platform} from 'react-native'
import Home from './home/Home'
import Profile from './profile/Profile';
import AssignTasks from './audit/AssignTasks';
import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/FontAwesome'
export default class Main extends PureComponent {
    // 默认属性
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state={
            selectedTab: 'home'
        }
    }
    componentWillMount(): void {
        if (Platform.OS === 'android'){
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    componentWillUnmount(): void {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    onBackAndroid = () => {
        //禁用返回键
        if(this.props.navigation.isFocused()) {//判断   该页面是否处于聚焦状态
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                //最近2秒内按过back键，可以退出应用。
                // return false;
                BackHandler.exitApp();//直接退出APP
            }else{
                this.lastBackPressed = Date.now();
                ToastAndroid.show('再按一次退出应用', 1000);//提示
                return true;
            }
        }
    }
    // 渲染
    render() {
        let tabHeight=verticalScale(49);
        return (
            <TabNavigator  tabBarStyle = {{backgroundColor:'#fff',height:tabHeight,alignItems:'center'}}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
                    titleStyle={{fontSize: px2dp(22),
                        color: "#999999"}}
                    selectedTitleStyle={{color: "#4a79e0",fontSize: px2dp(22),}}
                    renderIcon={() => <Image source={Images.home} style={{width:px2dp(34),height:px2dp(36)}}/>}
                    renderSelectedIcon={() =><Image source={Images.home_selected} style={{width:px2dp(34),height:px2dp(36)}}/>}
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    <Home {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'audit'}
                    title="借款审核"
                    titleStyle={{fontSize: px2dp(22),
                        color: "#999999"}}
                    selectedTitleStyle={{color: "#4a79e0",fontSize: px2dp(22),}}
                    renderIcon={() => <Image source={Images.audit} style={{width:px2dp(38),height:px2dp(38)}}/>}
                    renderSelectedIcon={() =><Image source={Images.audit_selected} style={{width:px2dp(34),height:px2dp(36)}}/>}
                    onPress={() => this.setState({selectedTab: 'audit'})}>
                    <AssignTasks {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="我的"
                    titleStyle={{fontSize: px2dp(22),
                        color: "#999999"}}
                    selectedTitleStyle={{color: "#4a79e0",fontSize: px2dp(22),}}
                    renderIcon={() => <Image source={Images.mine} resizeMode={'contain'} style={{width:px2dp(38),height:px2dp(38)}}/>}
                    renderSelectedIcon={() =><Image source={Images.mine_selected} style={{width:px2dp(34),height:px2dp(36)}}/>}
                    onPress={() => this.setState({selectedTab: 'profile'})}>
                    <Profile {...this.props}/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }

}
