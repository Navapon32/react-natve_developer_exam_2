// LeaderboardScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LeaderboardScreen: React.FC<{ route: any }> = ({ route }) => {
  const score = route.params?.score || 0; // Get score from navigation params

  // Here you can implement logic to fetch and display actual leaderboard data
  // For now, let's just display the score obtained from the quiz
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <Text style={styles.score}>Your Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  score: {
    fontSize: 20,
  },
});

export default LeaderboardScreen;
