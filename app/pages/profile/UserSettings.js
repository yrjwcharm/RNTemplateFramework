import React, {PureComponent} from 'react';
import {Platform,BackHandler,View,Text,TextInput,Alert,ImageBackground,TouchableOpacity} from 'react-native'
import Title from "../../components/Title";
 export  default  class UserSettings extends PureComponent {
    // 默认属性
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }
    // 渲染
    render() {
        return (
            <View >
                <Title title={'用户设置'}/>
            </View>
        );
    }

}

