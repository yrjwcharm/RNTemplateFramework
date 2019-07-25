/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import GlobalFont from 'react-native-global-font'
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';
import AppContainer from './app/RouterConfig';
import * as reducers from './app/reducers';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);
type Props = {};
export  default class App extends Component<Props> {
  componentWillMount() {
  }

  componentDidMount() {
      let fontName = 'PingFang-SC-Regular'
      GlobalFont.applyGlobal(fontName)
  }

  render() {
    return (
        <ApplicationProvider
            mapping={mapping}
            theme={lightTheme}>
            <Layout style={{flex: 1}}>
                <AppContainer/>
            </Layout>
        </ApplicationProvider>



    )
  }
}


