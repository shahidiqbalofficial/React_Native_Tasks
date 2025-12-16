import React, { useMemo } from 'react';
import {
  Alert,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  TextStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './StreakScreen.styles';

type Reward = {
  title: string;
  subtitle: string;
  amount: string;
  badgeColors: string[];
  rowColors: string[];
  isHighlighted?: boolean;
  isBlurredAmount?: boolean;
};

const rewards: Reward[] = [
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
      <StatusBar barStyle={safeStatusBarStyle}  backgroundColor="#151c3a" />
      <View style={styles.card}>
        <Text style={styles.title}>22-day streak</Text>
        <Text style={styles.subtitle}>
          Keep a <Text style={styles.highlight}>60% or higher</Text>{' '}
          check-in rate to qualify for{'\n'}
          monthly ad-revenue rewards from the carousel{'\n'}
          above. View your estimated payout below.
        </Text>

        <View style={styles.statsRow}>
          <LinearGradient
            colors={['#1b3065', '#0f2453']}
            style={styles.statCard}>
            <Text style={styles.statValue}>0%</Text>
            <Text style={styles.statLabel}>Check-In rate</Text>
          </LinearGradient>

          <View style={styles.statsCenter}>
          
            <Text style={styles.statsLabelCenter}>STATS</Text>
            <View style={styles.statsDivider} />
          </View>

          <LinearGradient
            colors={['#1b3065', '#0f2453']}
            style={styles.statCard}>
            <Text style={[styles.statValue, styles.blueText]}>33</Text>
            <Text style={styles.statLabel}>Longest streak</Text>
          </LinearGradient>
        </View>

        <View style={styles.rewardsContainer}>
          {rewards.map(reward => (
            <RewardRow key={reward.title} reward={reward} />
          ))}
        </View>

        <View style={styles.checkInRow}>
          <Text style={styles.checkInLabel}>🕒 Next Check-in</Text>
          <Text style={styles.checkInTime}>00:00:00</Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.button}
          onPress={handleCheckIn}>
          <Text style={styles.buttonText}>Check-In Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

type RewardRowProps = {
  reward: Reward;
};

const RewardRow: React.FC<RewardRowProps> = ({ reward }) => {
  const amountStyles: TextStyle[] = [styles.rewardAmount];
  if (reward.isHighlighted) {
    amountStyles.push(styles.pinkText);
  }
  if (reward.isBlurredAmount) {
    amountStyles.push(styles.rewardAmountBlurred);
  }

  return (
    <LinearGradient
      colors={reward.rowColors}
      style={[styles.rewardRow, reward.isHighlighted && styles.rewardHighlight]}>
      <View style={styles.rewardLeft}>
        <LinearGradient colors={reward.badgeColors} style={styles.badge}>
          <Text style={styles.badgeIcon}>👑</Text>
        </LinearGradient>
        <View>
          <Text style={styles.rewardTitle}>{reward.title}</Text>
          <Text style={styles.rewardSubtitle}>{reward.subtitle}</Text>
        </View>
      </View>
      <Text style={amountStyles}>{reward.amount}</Text>
    </LinearGradient>
  );
};

export default StreakScreen;