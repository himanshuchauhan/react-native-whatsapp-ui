import React from 'react';
import {
   View,
   Image,
   Text,
   ListView,
   TouchableOpacity,
   StyleSheet,
 } from 'react-native';


const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const Row = props => (
  <TouchableOpacity
    onPress={() => {
      props.navigator.push({
        id: 'ProfileView',
        name: props.name,
        image: props.image,
        status: props.status,
      });
    }}
  >
    <View style={styles.row}>
      <Image source={{ uri: props.image }} style={styles.pic} />
      <View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.name}</Text>
          <Text style={styles.mblTxt}>Mobile</Text>
        </View>
        <View style={styles.msgContainer}>
          <Text style={styles.msgTxt}>{props.status}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const ContactsTab = props => (
  <View style={{ flex: 1 }} >
    <ListView
      dataSource={ds.cloneWithRows(props.ContactsData)}
      renderRow={Contact => <Row {...Contact} {...props} />}
    />
  </View>
  );

export default ContactsTab;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#f7f7f7',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,

  },
  pic: {
    borderRadius: 25,
    width: 50,
    height: 50,
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
  mblTxt: {
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
    marginLeft: 15,
  },
});
