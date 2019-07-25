/**
 * @format
 */

import {AppRegistry, StatusBar} from 'react-native';
import {name as appName} from './app.json';
import './app/base/Global'
import App from './App';
if (!__DEV__) {
    global.console = {
        info: () => {},
        log: () => {},
        warn: () => {},
        debug: () => {},
        error: () => {},
    };
}
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);
