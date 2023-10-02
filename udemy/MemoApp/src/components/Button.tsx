import React from 'react';
import { Text, StyleSheet, GestureResponderEvent, TouchableOpacity } from 'react-native';

type ButtonProps = {
  label: string,
  onPress?: (event: GestureResponderEvent) => void,
}

export default function Button(props: ButtonProps) {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingHorizontal: 32,
    color: '#FFFFFF',
  },
});