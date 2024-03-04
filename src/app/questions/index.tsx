import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { router } from 'expo-router';
import { useStorePlayer } from '@/src/store/players';
import { foodsQuestions } from '@/src/questions/foods';

export default function Questions() {
  const { players } = useStorePlayer();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState([...foodsQuestions]);
  const [currentQuestion, setCurrentQuestion] = useState('');

  const getRandomQuestion = () => {
    const initialQuestionIndex = Math.floor(Math.random() * questions.length);
    setQuestions(
      questions.filter((_, index) => index !== initialQuestionIndex),
    );
    setCurrentQuestion(questions[initialQuestionIndex]);
  };

  useEffect(() => {
    getRandomQuestion();
  }, []);

  const nextQuestion = () => {
    if (players.length - 1 === currentIndex + 1) {
      router.push('/votes/');
    } else {
      getRandomQuestion();
      setCurrentIndex((oldIndex) => ++oldIndex);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Pergunta para {players[currentIndex].name}</Text>
      <Text>{currentQuestion}</Text>
      <Button title='Próxima' onPress={nextQuestion} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
});
