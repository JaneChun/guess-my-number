import { StyleSheet, View, Text } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import { useState } from 'react';

function GameScreen({ userNumber }) {
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>

			<NumberContainer>{currentGuess}</NumberContainer>

			<View>
				<Text>Higher or Lower?</Text>
				{/* + - */}
			</View>

			<View>{/* LOG ROUNDS */}</View>
		</View>
	);
}

function generateRandomBetween(min, max, exclude) {
	const randomNumber = Math.floor(Math.random() * (max - min)) + min;

	if (randomNumber === exclude) {
		return generateRandomBetween(min, max, exclude);
	}
	return randomNumber;
}

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
	},
});
