import React from 'react';
import { Header, Image, View } from 'react-native';

export const ImageHeader = (props) => {
  return (
    <View
      style={{
        height: 80,
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
      }}>
      <Image
        style={{
          flex: 1,
          height: undefined,
          width: undefined,
          backgroundColor: 'black',
        }}
        source={require('../assets/logo.png')}
        resizeMode="contain"
      />
    </View>
  );
};
