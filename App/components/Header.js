import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Header = () => (
  <View style={styles.top}>
    <Text style={styles.logo}>WhatsApp</Text>
    <View style={styles.icons}>
      <TouchableOpacity>
        <Icon
          name="search"
          color="#fff"
          size={23}
          style={{ padding: 5 }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name="chat"
          color="#fff"
          size={23}
          style={{ padding: 5 }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name="more-vert"
          color="#fff"
          size={23}
          style={{ padding: 5 }}
        />
      </TouchableOpacity>
    </View>
  </View>
  );

export default Header;

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    backgroundColor: '#075e54',
    borderColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  logo: {
    fontSize: 23,
    color: '#fff',
    margin: 10,
    fontWeight: '500',
  },
  icons: {
    flexDirection: 'row',
  },
});
