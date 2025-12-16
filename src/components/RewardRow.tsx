import React from 'react';
import { Text, View, TextStyle, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export type RewardRowData = {
  title: string;
  subtitle: string;
  amount: string;
  badgeColors: string[];
  rowColors: string[];
  isHighlighted?: boolean;
  isBlurredAmount?: boolean;
};

type RewardRowProps = {
  data: RewardRowData;
  containerStyle: ViewStyle;
  highlightStyle: ViewStyle;
  leftContainerStyle: ViewStyle;
  badgeStyle: ViewStyle;
  badgeIconStyle: TextStyle;
  titleStyle: TextStyle;
  subtitleStyle: TextStyle;
  amountStyle: TextStyle;
  amountBlurredStyle: TextStyle;
  amountHighlightedStyle: TextStyle;
  icon?: string;
};

const RewardRow: React.FC<RewardRowProps> = ({
  data,
  containerStyle,
  highlightStyle,
  leftContainerStyle,
  badgeStyle,
  badgeIconStyle,
  titleStyle,
  subtitleStyle,
  amountStyle,
  amountBlurredStyle,
  amountHighlightedStyle,
  icon = '👑',
}) => {
  const amountStyles: TextStyle[] = [amountStyle];

  if (data.isHighlighted) {
    amountStyles.push(amountHighlightedStyle);
  }

  if (data.isBlurredAmount) {
    amountStyles.push(amountBlurredStyle);
  }

  return (
    <LinearGradient
      colors={data.rowColors}
      style={[containerStyle, data.isHighlighted && highlightStyle]}>
      <View style={leftContainerStyle}>
        <LinearGradient colors={data.badgeColors} style={badgeStyle}>
          <Text style={badgeIconStyle}>{icon}</Text>
        </LinearGradient>
        <View>
          <Text style={titleStyle}>{data.title}</Text>
          <Text style={subtitleStyle}>{data.subtitle}</Text>
        </View>
      </View>
      <Text style={amountStyles}>{data.amount}</Text>
    </LinearGradient>
  );
};

export default RewardRow;


