/** @format */

import {Navigation} from "react-native-navigation";
import App from './App';
import {Dimensions} from 'react-native'




Navigation.registerComponent('App', () => App);

const { width } = Dimensions.get('window');
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    layout: {
      orientation: ['portrait']
    },
    topBar: {
      elevation: 0,
      animate: false,
      buttonColor: 'white',
      background: {
        color: '#4f6d7a'
      },
      title: {
        text: 'Internet of Things',
        alignment: 'center',
        color: 'white',
        fontFamily: 'OpenSans-Bold'

      },
    },
    statusBar: {
      backgroundColor: '#354c56'
    }
  });
  Navigation.setRoot({
    root: {
      sideMenu: {
        center: {
          stack: {
            id: 'MAIN_STACK',
            children: [
              {
                component: {
                  id: 'appId',
                  name: 'App',

                  options: {
                    topBar: {

                    }
                  }
                }
              },
            ]
          }
        }
      },
    }

  });

});

