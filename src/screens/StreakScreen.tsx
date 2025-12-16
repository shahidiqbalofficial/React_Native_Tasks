import React, { useMemo } from 'react';
import { Alert, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './StreakScreen.styles';
import StatCard from '../components/StatCard';
import RewardRow, { RewardRowData } from '../components/RewardRow';
import StatsDivider from '../components/StatsDivider';
import PrimaryButton from '../components/PrimaryButton';

const STAT_CARD_COLORS = ['#1b3065', '#0f2453'] as const;

const rewards: RewardRowData[] = [
  {
    title: 'Legendary Rewards',
    subtitle: 'Upgrade to earn',
    amount: '$1,634',
    badgeColors: ['#f6d365', '#fda085'],
    rowColors: ['#0d3575', '#0f2453'],
    isBlurredAmount: true,
  },
  {
    title: 'Phantom Rewards',
    subtitle: 'Est. payout • 3 Passes',
    amount: '$634',
    badgeColors: ['#d777ff', '#d777ff'],
    rowColors: ['#1d1340', '#0f2453'],
    isHighlighted: true,
  },
  {
    title: 'Oracle Rewards',
    subtitle: 'Lifetime pass required',
    amount: '$10,634',
    badgeColors: ['#bcc6ff', '#8ea3ff'],
    rowColors: ['#0d3575', '#0f2453'],
  },
  {
    title: 'Creator Rewards',
    subtitle: 'Earn FREE Gold Coins',
    amount: '333',
    badgeColors: ['#37e1ff', '#2a96ff'],
    rowColors: ['#0d3575', '#0f2453'],
  },
];

const StreakScreen: React.FC = () => {
  const safeStatusBarStyle = useMemo(() => 'light-content' as const, []);

  const handleCheckIn = () => {
    Alert.alert('Check-In', 'You have successfully checked in!');
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <StatusBar barStyle={safeStatusBarStyle} backgroundColor="#151c3a" />
      <View style={styles.card}>
        <Text style={styles.title}>22-day streak</Text>
        <Text style={styles.subtitle}>
          Keep a <Text style={styles.highlight}>60% or higher</Text>{' '}
          check-in rate to qualify for{'\n'}
          monthly ad-revenue rewards from the carousel{'\n'}
          above. View your estimated payout below.
        </Text>

        <View style={styles.statsRow}>
          <StatCard
            value="0%"
            label="Check-In rate"
            gradientColors={STAT_CARD_COLORS as unknown as string[]}
            containerStyle={styles.statCard}
            valueStyle={styles.statValue}
            labelStyle={styles.statLabel}
          />

          <StatsDivider
            label="STATS"
            containerStyle={styles.statsCenter}
            dividerStyle={styles.statsDivider}
            labelStyle={styles.statsLabelCenter}
          />

          <StatCard
            value="33"
            label="Longest streak"
            gradientColors={STAT_CARD_COLORS as unknown as string[]}
            containerStyle={styles.statCard}
            valueStyle={[styles.statValue, styles.blueText]}
            labelStyle={styles.statLabel}
          />
        </View>

        <View style={styles.rewardsContainer}>
          {rewards.map(reward => (
            <RewardRow
              key={reward.title}
              data={reward}
              containerStyle={styles.rewardRow}
              highlightStyle={styles.rewardHighlight}
              leftContainerStyle={styles.rewardLeft}
              badgeStyle={styles.badge}
              badgeIconStyle={styles.badgeIcon}
              titleStyle={styles.rewardTitle}
              subtitleStyle={styles.rewardSubtitle}
              amountStyle={styles.rewardAmount}
              amountBlurredStyle={styles.rewardAmountBlurred}
              amountHighlightedStyle={styles.pinkText}
            />
          ))}
        </View>

        <View style={styles.checkInRow}>
          <Text style={styles.checkInLabel}>🕒 Next Check-in</Text>
          <Text style={styles.checkInTime}>00:00:00</Text>
        </View>

        <PrimaryButton
          label="Check-In Now"
          onPress={handleCheckIn}
          containerStyle={styles.button}
          labelStyle={styles.buttonText}
        />
      </View>
    </SafeAreaView>
  );
};

export default StreakScreen;