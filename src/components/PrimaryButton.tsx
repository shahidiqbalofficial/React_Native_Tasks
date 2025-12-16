import React from 'react';
import { Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  containerStyle: ViewStyle;
  labelStyle: TextStyle;
  activeOpacity?: number;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  onPress,
  containerStyle,
  labelStyle,
  activeOpacity = 0.9,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;


