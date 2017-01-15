import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');


const CallScreen = props => (
  <View style={{ flex: 1 }}>
    <View style={styles.topBar}>
      <View style={{ flexDirection: 'row' }}>
        <Icon name="whatshot" color="#c3c3c3" size={14} />
        <Text style={styles.subText}>WHATSAPP CALL</Text>
      </View>
      <Text style={styles.title}>{props.name}</Text>
      <Text style={styles.subText}>CALLING</Text>
    </View>
    <Image source={{ uri: props.image }} style={styles.image}>
      <TouchableOpacity onPress={() => props.navigator.pop()}>
        <View style={styles.icon}>
          <Icon name="call-end" color="#c3c3c3" size={30} /></View>
      </TouchableOpacity>
    </Image>
    <View style={styles.bottomBar}>
      <Icon name="volume-up" color="#c3c3c3" size={30} />
      <Icon name="chat" color="#c3c3c3" size={30} />
      <Icon name="mic-off" color="#c3c3c3" size={30} />
    </View>
  </View>
  );

export default CallScreen;

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#075e54',
    height: 140,
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e20e30',
    marginTop: 250 },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#075e54',
    flex: 1,
  },
  title: {
    color: '#f0efef',
    fontSize: 36,
  },
  subText: {
    color: '#c8c8c8',
    fontSize: 14,
  },
});
