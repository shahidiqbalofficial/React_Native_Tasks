import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f2453',
  },
  card: {
    flex: 1, 
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: '#0f2453', 
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#f1f4ff',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#b6c2e5',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  highlight: {
    color: '#d777ff',
    fontWeight: '700',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginBottom: 18,
  },
  statCard: {
    flex: 1,
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statValue: {
    fontSize: 26,
    fontWeight: '800',
    color: '#ffcc33',
  },
  statLabel: {
    fontSize: 13,
    color: '#b6c2e5',
     
  },
  blueText: {
    color: '#2ad5ff',
  },
  statsCenter: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  statsDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#334a80',
    opacity: 0.7,
  },
  statsLabelCenter: {
    marginVertical: 6,
    color: '#d777ff',
    fontSize: 11,
    fontWeight: '700',
  },
  rewardsContainer: {
    marginVertical: 12,
  },
  rewardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  rewardHighlight: {
      borderWidth: .5,
      
    borderColor: '#d777ff',
    shadowColor: '#d777ff',
    shadowOpacity: 0.35,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 5 },
    elevation: 12,
  },
  rewardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    width: 44,
    height: 44,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  badgeIcon: {
    fontSize: 24,
  },
  rewardTitle: {
    color: '#f1f4ff',
    fontWeight: '700',
    fontSize: 15,
  },
  rewardSubtitle: {
    color: '#b6c2e5',
    fontSize: 12,
    marginTop: 2,
  },
  rewardAmount: {
    color: '#d0d5f2',
    fontWeight: '800',
    fontSize: 18,
  },
  rewardAmountBlurred: {
    opacity: 0.25,
  },
  pinkText: {
    color: '#d777ff',
  },
  checkInRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  checkInLabel: {
    color: '#9fb0da',
    fontSize: 13,
    marginRight: 6,
  },
  checkInTime: {
    color: '#ffcc33',
    fontSize: 15,
    fontWeight: '800',
  },
  button: {
    backgroundColor: '#f6c12f',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#1b273a',
    fontWeight: '800',
    fontSize: 16,
  },
});

export default styles;


