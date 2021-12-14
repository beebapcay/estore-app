import React from 'react';
import { Text } from 'native-base';
import { Avatar} from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import MenuSheetProfile from '../components/MenuSheetProfile';


const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoHeader}>
        <Avatar.Image
          source={{
            uri: 'https://www.whitehouse.gov/wp-content/uploads/2021/04/P20210303AS-1901-cropped-1707x1280.jpg'
          }}
          size={150}
        />
        <Text style={{ marginTop: 20 }}>Joe Biden</Text>
        <MenuSheetProfile />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoHeader: {
    flex: 1,
    marginTop: 70,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

});