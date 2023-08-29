import React from 'react';
import { View, Text, StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';

type HelloProps = {
  children: string,
  bang: boolean,
  style?: ViewStyle | TextStyle | ImageStyle
}

function Hello(props: HelloProps) {
  const { children, bang, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>
        {`Hello ${children}${bang ? '!' : ''}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  }
});

export default Hello;