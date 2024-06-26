import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Question } from '../types';

type Props = {
  question: Question;
  onAnswer: (answer: string) => void;
};

const QuestionCard: React.FC<Props> = ({ question, onAnswer }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question.question}</Text>
      {question.answers.map((answer, index) => (
        <TouchableOpacity key={index} style={styles.answerButton} onPress={() => onAnswer(answer)}>
          <Text style={styles.answerText}>{answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
  answerButton: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  answerText: {
    fontSize: 16,
  },
});

export default QuestionCard;
