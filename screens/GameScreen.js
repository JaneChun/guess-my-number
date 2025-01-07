import { StyleSheet, View, Text, Alert, FlatList } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '@/components/ui/PrimaryButton';
import GuessLogItem from '@/components/game/GuessLogItem';
import Colors from '@/constants/colors';
import { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [guessRounds, setGuessRounds] = useState([initialGuess]);

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver(guessRounds.length);
		}
	}, [currentGuess, userNumber, onGameOver]);

	useEffect(() => {
		minBoundary = 1;
		maxBoundary = 100;
	}, []);

	function nextGuessHandler(direction) {
		if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
			Alert.alert("Don't lie!", 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }]); // 여기서 alert이 안뜨고 무한 호출 발생해서 앱 종료됨
			return;
		}
		if (direction === 'lower') {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}
		const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
		setCurrentGuess(newRandomNumber);
		setGuessRounds((prevGuessRounds) => [newRandomNumber, ...prevGuessRounds]);
	}

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>

			<NumberContainer>{currentGuess}</NumberContainer>

			<View style={styles.container}>
				<Text style={styles.subTitle}>Higher or Lower?</Text>
				<View style={styles.buttonsContiner}>
					<PrimaryButton style={styles.buttonContainer} onPress={() => nextGuessHandler('lower')}>
						<AntDesign name='minus' size={24} />
					</PrimaryButton>
					<PrimaryButton style={styles.buttonContainer} onPress={() => nextGuessHandler('greater')}>
						<AntDesign name='plus' size={24} />
					</PrimaryButton>
				</View>
			</View>

			<View style={styles.listContainer}>
				{/* {guessRounds.map((guessRound) => (
					<Text key={guessRound}>{guessRound}</Text>
				))} */}
				<FlatList
					data={guessRounds}
					renderItem={(itemData) => <GuessLogItem roundNumber={guessRounds.length - itemData.index} guess={itemData.item} />}
					keyExtractor={(item) => item}
				/>
			</View>
		</View>
	);
}

function generateRandomBetween(min, max, exclude) {
	const randomNumber = Math.floor(Math.random() * (max - min)) + min;

	if (randomNumber === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return randomNumber;
	}
}

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
		alignItems: 'center',
	},
	container: {
		height: 100,
	},
	subTitle: {
		color: Colors.white,
		fontSize: 16,
		textAlign: 'center',
		marginVertical: 8,
	},
	buttonsContiner: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	buttonContainer: {
		flex: 1,
		backgroundColor: Colors.primary500,
	},
	listContainer: {
		flex: 1,
		padding: 16,
	},
});
