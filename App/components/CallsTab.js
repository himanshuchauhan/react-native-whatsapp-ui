import React from 'react';
import {
   View,
   Image,
   Text,
   ListView,
   TouchableOpacity,
   StyleSheet,
 } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });


const Row = props => (
  <TouchableOpacity
    onPress={() => {
      props.navigator.push({
        id: 'CallScreen',
        name: props.name,
        image: props.image,
      });
    }}
  >
    <View style={styles.row}>

      <Image source={{ uri: props.image }} style={styles.pic} />
      <View >
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>
            {props.name}
          </Text>
        </View>
        <View style={styles.end}>
          <Icon
            name="call-missed" size={15} color="#ed788b"
            style={{ marginLeft: 15, marginRight: 5 }}
          />
          <Text style={styles.time}>
            {props.date} {props.time}
          </Text>
        </View>
      </View>
      <Icon name={props.call} size={23} color="#075e54" style={{ marginRight: 50 }} />
    </View>

  </TouchableOpacity>
    );

const CallsTab = props => (
  <View style={{ flex: 1 }} >
    <ListView
      dataSource={ds.cloneWithRows(props.CallsData)}
      renderRow={Calls => <Row {...Calls} {...props} />}
    />
  </View>);

export default CallsTab;


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#f7f7f7',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
    justifyContent: 'space-between',

  },
  pic: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 270,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 15,

  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,

  },
});
