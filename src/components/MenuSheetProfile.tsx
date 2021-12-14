import React, { Component } from 'react';
import { Text } from 'native-base';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class MenuSheetProfile extends Component {
  render(): React.ReactNode {
    return (
      <View style={styles.menuWrapper}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Image
            style={styles.ImageIconStyle}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png' }}
          />
          <Text style={{ marginLeft: 20 }}>Edit Profile</Text>
          <Icon style={{ position: 'absolute', right: 20 }} name="angle-right" size={20}></Icon>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer}>
          <Image
            style={styles.ImageIconStyle}
            source={{
              uri: 'https://cdn-icons.flaticon.com/png/512/3247/premium/3247250.png?token=exp=1639414491~hmac=5ca6f0839108b35acd449c2ed7c40424'
            }}
          />
          <Text style={{ marginLeft: 20 }}>Notification</Text>
          <Icon style={{ position: 'absolute', right: 20 }} name="angle-right" size={20}></Icon>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer}>
          <Image
            style={styles.ImageIconStyle}
            source={{
              uri: 'https://cdn-icons.flaticon.com/png/512/3307/premium/3307969.png?token=exp=1639414526~hmac=3a125360092736656222c6cc2387cbc4'
            }}
          />
          <Text style={{ marginLeft: 20 }}>Order History</Text>
          <Icon style={{ position: 'absolute', right: 20 }} name="angle-right" size={20}></Icon>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer}>
          <Image
            style={styles.ImageIconStyle}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/18/18436.png' }}
          />
          <Text style={{ marginLeft: 20 }}>Help</Text>
          <Icon style={{ position: 'absolute', right: 20 }} name="angle-right" size={20}></Icon>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer}>
          <Image
            style={styles.ImageIconStyle}
            source={{
              uri: 'https://cdn-icons.flaticon.com/png/512/3019/premium/3019014.png?token=exp=1639414650~hmac=ad217eb1639c7fbb9e56177b4c758a2f'
            }}
          />
          <Text style={{ marginLeft: 20 }}>Setting</Text>
          <Icon style={{ position: 'absolute', right: 20 }} name="angle-right" size={20}></Icon>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer}>
          <Image
            style={styles.ImageIconStyle}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828479.png' }}
          />
          <Text style={{ marginLeft: 20 }}>Logout</Text>
          <Icon style={{ position: 'absolute', right: 20 }} name="angle-right" size={20}></Icon>
        </TouchableOpacity>
      </View>
    );
  }
}

export default MenuSheetProfile;

const styles = StyleSheet.create({
  menuWrapper: {
    width: '100%',
    marginTop: 40,
    flexDirection: 'column',
    alignItems: 'center'
  },
  buttonContainer: {
    backgroundColor: '#E0E0E0',
    width: '80%',
    height: 50,
    borderRadius: 5,
    // justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  ImageIconStyle: {
    padding: 10,
    margin: 10,
    height: 25,
    width: 25,
    resizeMode: 'stretch'
  }
});
