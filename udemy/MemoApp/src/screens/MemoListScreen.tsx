import React from 'react';
import { StyleSheet, View } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import { useNavigation } from '@react-navigation/native';

export default function MemoListScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MemoList />
      <CircleButton
        name='plus'
        onPress={() => { navigation.navigate('MemoCreateScreen'); }} />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
