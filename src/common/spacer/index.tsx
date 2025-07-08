// import {hp, wp} from '@enums';
import { hp, wp } from '@enums';
import React from 'react';
import {View} from 'react-native';

interface SpacerProps {
  height?: number;
  width?: number;
  style?: object;
}

export const Spacer: React.FC<SpacerProps> = ({
  height = hp(1),
  width = wp(1),
  style,
}) => {
  return <View style={[{height, width}, style]} />;
};