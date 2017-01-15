import React from 'react';
import {
   View,
   ListView,
   Image,
   Text,
   TouchableOpacity,
   StyleSheet,
 } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const Row = props => (
  <TouchableOpacity
    onPress={() => {
      props.navigator.push({
        id: 'ChatView',
        name: props.name,
        image: props.image,
      });
    }}
  >
    <View style={styles.row}>
      <Image source={{ uri: props.image }} style={styles.pic} />
      <View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.name}</Text>
          <Text style={styles.time}>{props.time}</Text>
        </View>
        <View style={styles.msgContainer}>
          <Icon
            name={props.icon} size={15} color="#b3b3b3"
            style={{ marginLeft: 15, marginRight: 5 }}
          />
          <Text style={styles.msgTxt}>{props.message}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const ChatsTab = props => (
  <View style={{ flex: 1 }} >
    <ListView
      dataSource={ds.cloneWithRows(props.ChatsData)}
      renderRow={Chats => <Row {...Chats} {...props} />}
    />
  </View>
  );

export default ChatsTab;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#f7f7f7',
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 15,

  },
  time: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
  },
});
