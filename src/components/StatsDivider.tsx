import React from 'react';
import { Text, View } from 'react-native';

type StatsDividerProps = {
  label: string;
  containerStyle: any;
  dividerStyle: any;
  labelStyle: any;
};

const StatsDivider: React.FC<StatsDividerProps> = ({
  label,
  containerStyle,
  dividerStyle,
  labelStyle,
}) => {
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <View style={dividerStyle} />
    </View>
  );
};

export default StatsDivider;


