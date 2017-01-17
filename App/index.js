  import React from 'react';
  import {
  View,
  StatusBar,
  Navigator,
} from 'react-native';


  import Home from './components/Home';
  import ChatView from './components/ChatView';
  import ProfileView from './components/ProfileView';
  import CallScreen from './components/CallScreen';

  console.disableYellowBox = true;

  class Main extends React.Component {
    constructor(props) {
      super(props);
      this.renderScene = this.renderScene.bind(this);
    }

    renderScene(route, navigator) {
      switch (route.id) {
        case 'ChatView':
          return (
            <ChatView
              {...this.props}
              id="ChatView"
              navigator={navigator}
              name={route.name}
              image={route.image}
            />);
        case 'ProfileView':
          return (
            <ProfileView
              id="ProfileView"
              navigator={navigator}
              name={route.name}
              image={route.image}
              status={route.status}
            />);
        case 'CallScreen':
          return (
            <CallScreen
              id="CallScreen"
              navigator={navigator}
              name={route.name}
              image={route.image}
            />);
        default :
          return (<Home id="Home" navigator={navigator} />);
      }
    }

    render() {
      return (
        <View style={{ flex: 1, backgroundColor: '#ece5dd' }}>
          <StatusBar hidden />
          <Navigator
            initialRoute={{ id: 'Home' }}
            renderScene={this.renderScene}
            configureScene={(route, routeStack) => {
              if (route.id === 'CallScreen') {
                return Navigator.SceneConfigs.FloatFromBottomAndroid;
              }
              return Navigator.SceneConfigs.PushFromRight;
            }
            }
          />
        </View>
      );
    }
}

  export default Main;
