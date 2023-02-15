import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../app/store';
import {decrement, increment} from '../features/counter/counterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <TouchableOpacity onPress={() => dispatch(increment())}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <Text>{count}</Text>
      <TouchableOpacity onPress={() => dispatch(decrement())}>
        <Text>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
