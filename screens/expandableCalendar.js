import _ from 'lodash';
import React, {Component} from 'react';
import {
  Platform,
  Alert,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,Image,
} from 'react-native';
import {ExpandableCalendar, AgendaList, CalendarProvider,LocaleConfig} from 'react-native-calendars';


const today = new Date().toISOString().split('T')[0];
const fastDate = getPastDate(3);
const futureDates = getFutureDates(9);
const dates = [fastDate, today].concat(futureDates);

function getFutureDates(days) {
  const array = [];
  for (let index = 1; index <= days; index++) {
    const date = new Date(Date.now() + (864e5 * index)); // 864e5 == 86400000 == 24*60*60*1000
    const dateString = date.toISOString().split('T')[0];
    array.push(dateString);
  }
  return array;
}

function getPastDate(days) {
  return new Date(Date.now() - (864e5 * days)).toISOString().split('T')[0];
}

const ITEMS = [
  {title: dates[0], data: [{hour: '12am', duration: '1h', title: 'Ashtanga Yoga'}]},
];

export default class ExpandableCalendarScreen extends Component {

  onDateChanged = (/* date, updateSource */) => {
    // console.warn('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
    // fetch and set data for date + week ahead
  }

  onMonthChange = (/* month, updateSource */) => {
    // console.warn('ExpandableCalendarScreen onMonthChange: ', month, updateSource);
  }

  buttonPressed() {
    Alert.alert('show more');
  }

  itemPressed(id) {
    Alert.alert(id);
  }

  renderEmptyItem() {
    return (
      <View style={styles.emptyItem}>
        <Text style={styles.emptyItemText}>No Events Planned</Text>
      </View>
    );
  }

  renderItem = ({item}) => {
    if (_.isEmpty(item)) {
      return this.renderEmptyItem();
    }

    return (
      <View>
        <View style={{backgroundColor:'#f3f3f3',marginHorizontal:moderateScale(13),
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "#d8d9db"}}>
        <View style={{borderBottomColor:'#dddee0',borderBottomWidth:scale(1/2),height:verticalScale(44),flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <Text style={{marginLeft:moderateScale(39),fontSize: moderateScale(14),
            color: "#666666"}}>2019.6.24 星期三</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={{borderRadius: scale(3),
              borderStyle: "solid",
              marginRight:moderateScale(13),
              borderWidth: scale(1),
              borderColor: "#d7d7d7",fontSize: moderateScale(13),paddingHorizontal:moderateScale(10),paddingVertical:moderateScale(6),
              color: "#668ef1"}}>新建</Text>
          </TouchableOpacity>
        </View>
        <View style={{borderBottomColor:'#dddee0',borderBottomWidth:StyleSheet.hairlineWidth,paddingLeft:moderateScale(17),height:verticalScale(44),flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View style={{marginLeft:moderateScale(14),flexDirection:'row',alignItems:'center',}}>
            <Image source={Images.circle} resizeMode={'contain'} style={{width:scale(7),height:verticalScale(7)}}/>
            <Text style={{marginLeft:moderateScale(14),fontFamily: "PingFangSC-Regular",
              fontSize: moderateScale(14),
              color: "#666666"}}>新增待办任务204条</Text>
          </View>
          <Image source={Images.arrow_right_1} style={{width:scale(5),height:verticalScale(10),marginRight:moderateScale(15)}}/>
        </View>
        <View style={{borderBottomColor:'#dddee0',borderBottomWidth:StyleSheet.hairlineWidth,paddingLeft:moderateScale(17),height:verticalScale(44),flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View style={{marginLeft:moderateScale(14),flexDirection:'row',alignItems:'center',}}>
            <Image source={Images.circle} resizeMode={'contain'} style={{width:scale(7),height:verticalScale(7)}}/>
            <Text style={{marginLeft:moderateScale(14),fontFamily: "PingFangSC-Regular",
              fontSize: moderateScale(14),
              color: "#666666"}}>新增还款项目23个</Text>
          </View>
          <Image source={Images.arrow_right_1} style={{width:scale(5),height:verticalScale(10),marginRight:moderateScale(15)}}/>
        </View>
        <View style={{borderBottomColor:'#dddee0',borderBottomWidth:StyleSheet.hairlineWidth,paddingLeft:moderateScale(17),height:verticalScale(44),flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View style={{marginLeft:moderateScale(14),flexDirection:'row',alignItems:'center',}}>
            <Image source={Images.solid_dot} resizeMode={'contain'} style={{width:scale(7),height:verticalScale(7)}}/>
            <Text style={{marginLeft:moderateScale(14),fontFamily: "PingFangSC-Regular",
              fontSize: moderateScale(14),
              color: "#666666"}}>明日待办：给刘总打电话</Text>
          </View>
          <Image source={Images.arrow_right_1} style={{width:scale(5),height:verticalScale(10),marginRight:moderateScale(15)}}/>
        </View>
        <View style={{marginLeft:moderateScale(17),height:verticalScale(44),flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View style={{marginLeft:moderateScale(14),flexDirection:'row',alignItems:'center',}}>
            <Image source={Images.gray_dot} resizeMode={'contain'} style={{width:scale(7),height:verticalScale(7)}}/>
            <Text style={{marginLeft:moderateScale(14),	fontFamily: "PingFangSC-Regular",
              fontSize: moderateScale(14),
              color: "#cccccc"}}>已完成项目23个</Text>
          </View>
          <Image source={Images.arrow_right_1} style={{width:scale(5),height:verticalScale(10),marginRight:moderateScale(15)}}/>
        </View>
     </View>
      </View>
    );
  }

  getMarkedDates = () => {
    const marked = {};
    // ITEMS.forEach(item => {
    //   // only mark dates with data
    //   if (item.data && item.data.length > 0 && !_.isEmpty(item.data[0])) {
    //     marked[item.title] = {marked: true};
    //   }
    // });
    return marked;
  }

  getTheme = () => {
    const themeColor = '#0059ff';
    const lightThemeColor = '#e6efff';
    const disabledColor = '#a6acb1';
    const black = '#20303c';
    const white = '#ffffff';

    return {
      calendarBackground:'#f5f5f5',
      // arrows
      arrowColor: black,
      arrowStyle: {padding: 0},
      // month
      monthTextColor: black,
      textMonthFontSize: 16,
      textMonthFontFamily: 'HelveticaNeue',
      textMonthFontWeight: 'bold',
      // day names
      textSectionTitleColor: black,
      textDayHeaderFontSize: 12,
      textDayHeaderFontFamily: 'HelveticaNeue',
      textDayHeaderFontWeight: 'normal',
      // today
      todayBackgroundColor: lightThemeColor,
      todayTextColor: themeColor,
      // dates
      dayTextColor: themeColor,
      textDayFontSize: 18,
      textDayFontFamily: 'HelveticaNeue',
      textDayFontWeight: '500',
      textDayStyle: {marginTop: Platform.OS === 'android' ? 2 : 4},
      // selected date
      selectedDayBackgroundColor: themeColor,
      selectedDayTextColor: white,
      // disabled date
      textDisabledColor: disabledColor,
      // dot (marked date)
      dotColor: themeColor,
      selectedDotColor: white,
      disabledDotColor: disabledColor,
      dotStyle: {marginTop: -2}
    };
  }

  render() {
    LocaleConfig.locales['fr'] = {
      monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
      monthNamesShort: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
      dayNames: ['周日','周一','周二','周三','周四','周五','周六'],
      dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
      // today: 'Aujourd\'hui'
    };
    LocaleConfig.defaultLocale = 'fr';
    return (
      <CalendarProvider
        date={ITEMS[0].title}
        onDateChanged={this.onDateChanged}
        onMonthChange={this.onMonthChange}
        theme={{todayButtonTextColor: '#0059ff'}}
        showTodayButton
        disabledOpacity={0.6}
      >
        <ExpandableCalendar
          // horizontal={false}
          // hideArrows
          // disablePan
          // hideKnob
          // initialPosition={ExpandableCalendar.positions.OPEN}
          firstDay={1}
          markedDates={this.getMarkedDates()} // {'2019-06-01': {marked: true}, '2019-06-02': {marked: true}, '2019-06-03': {marked: true}};
          theme={this.getTheme()}
          leftArrowImageSource={require('../img/previous.png')}
          rightArrowImageSource={require('../img/next.png')}
          // calendarStyle={styles.calendar}
          // headerStyle={styles.calendar} // for horizontal only
        />
        <View style={{marginTop:moderateScale(15)}}/>
        <AgendaList
          sections={ITEMS}
          extraData={this.state}
          renderItem={this.renderItem}
          // sectionStyle={styles.section}
        />
      </CalendarProvider>
    );
  }
}

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20
  },
  section: {
    backgroundColor: '#f0f4f7',
    color: '#79838a'
  },
  item: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e8ecf0',
    flexDirection: 'row'
  },
  itemHourText: {
    color: 'black'
  },
  itemDurationText: {
    color: 'grey',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4
  },
  itemTitleText: {
    color: 'black',
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 16
  },
  itemButtonContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e8ecf0'
  },
  emptyItemText: {
    color: '#79838a',
    fontSize: 14
  }
});
