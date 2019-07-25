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
    Dimensions
} from 'react-native'
import Title from '../../components/Title'
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
import Select from "teaset/components/Select/Select";
export default class EditCust extends PureComponent {
    // 默认属性
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            index: 0,
            routes: [
                { key: 'first', title: '修改' },
                { key: 'second', title: '转化' },
            ],
        };
    }
    // 渲染
    render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'#eee'}}>
                <Title title={'编辑'} forward/>
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first:() => <FirstRoute {...this.props} />,
                        second: () => <SecondRoute {...this.props} />,
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
    constructor(){
        super()
    }
    render(){
        return(
           <View/>
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
