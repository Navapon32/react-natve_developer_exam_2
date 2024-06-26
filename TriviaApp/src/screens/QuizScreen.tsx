
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { questions as data } from '../data/questions';
import { Question } from '../types';
import QuestionCard from '../components/QuestionCard';

const shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5);

const QuizScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const shuffledQuestions = shuffleArray([...data]).slice(0, 20).map(question => ({
      ...question,
      answers: shuffleArray([...question.answers]),
    }));
    setQuestions(shuffledQuestions);
  }, []);

  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate('Leaderboard', { score: score }); // Navigate to leaderboard with score
    }
  };

  return (
    <View style={styles.container}>
      {questions.length > 0 && currentQuestionIndex < questions.length ? (
        <QuestionCard
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      ) : (
        <View>
          <Text style={styles.score}>Your Score: {score}</Text>
          <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default QuizScreen;
