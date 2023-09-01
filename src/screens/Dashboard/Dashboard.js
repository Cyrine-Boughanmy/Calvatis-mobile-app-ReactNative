import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';
import Button from '../../components/Button';
const Dashboard = () => {
  return (
    <ScrollView>
      <View
        style={{
          height: SIZES.height,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            ...FONTS.title,
          }}>
          Welcome to our application
        </Text>

        <Image
          source={require('../../assets/Logo.png')}
          resizeMode="contain"
          style={{
            width: 300,
            height: 300,
            marginBottom: 10,
          }}
        />
        <Button
        //   onPress={() => {
        //     logout();
        //   }}
          text="Logout"
          bgColor={COLORS.darkBlue}
          paddingVertical={5}
          width={150}
        />
      </View>
    </ScrollView>
  );
}

export default Dashboard