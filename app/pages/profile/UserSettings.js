import React, {PureComponent} from 'react';
import {Platform,SafeAreaView,StyleSheet,Image,BackHandler,View,Text,TextInput,Alert,ImageBackground,TouchableOpacity} from 'react-native'
import Title from "../../components/Title";
import SmallButton from "../../components/SmallButton";
import { NavigationActions, StackActions } from 'react-navigation';
 export  default  class UserSettings extends PureComponent {
    // 默认属性
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }
     _exitLogin=()=>{
         store.delete('delete')
      //重置路由代码
         const resetAction = StackActions.reset({
             index: 0,
             actions: [NavigationActions.navigate({ routeName: 'Login' })],
         });
         this.props.navigation.dispatch(resetAction);
     }
    // 渲染
    render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'#EEE'}}>
                <Title title={'账户设置'} back onPressBack={()=>this.props.navigation.goBack()}/>
                <View style={{marginTop:moderateScale(11)}}/>
                <Menu title={'昵称'} detail={'佳佳'} icon/>
                <Menu title={'手机号码'} detail={'18311410379'}/>
                <Menu title={'微信'} detail={'未绑定'} icon/>
                <SmallButton name={'退出登录'} onPress={this._exitLogin}/>
            </SafeAreaView>
        );
    }

}
const Menu=(props)=>{
     return(
         <View style={{backgroundColor: '#f5f5f5',}}>
         <View style={{marginHorizontal:moderateScale(19),height:verticalScale(50),justifyContent:'center',borderBottomColor:'#E6E6E6',borderBottomWidth:StyleSheet.hairlineWidth}}>
             <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                 <Text style={{fontFamily: "PingFangSC-Regular",
                     fontSize: moderateScale(14),
                     color: "#999999"}}>{props.title}</Text>
                 <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontFamily: "PingFangSC-Regular",
                        fontSize: moderateScale(14),
                        color: "#333333",marginRight:moderateScale(12)}}>{props.detail}</Text>
                     {props.icon?<Image source={Images.arrow_right} style={{width:scale(8),height:verticalScale(13)}}/>:<View/>}
                 </View>
             </View>
             </View>
         </View>
     );
}

