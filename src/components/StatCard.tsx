import React from 'react';
import { Text, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type StatCardProps = {
  value: string;
  label: string;
  containerStyle: ViewStyle;
  valueStyle: any;
  labelStyle: any;
  gradientColors: string[];
};

const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  containerStyle,
  valueStyle,
  labelStyle,
  gradientColors,
}) => {
  return (
    <LinearGradient colors={gradientColors} style={containerStyle}>
      <Text style={valueStyle}>{value}</Text>
      <Text style={labelStyle}>{label}</Text>
    </LinearGradient>
  );
};

export default StatCard;


