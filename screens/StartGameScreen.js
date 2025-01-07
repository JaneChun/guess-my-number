import { StyleSheet, TextInput, View, Alert, Text, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import PrimaryButton from '@/components/ui/PrimaryButton';
import Title from '@/components/ui/Title';
import { useState } from 'react';
import Colors from '@/constants/colors';

function StartGameScreen({ onConfirmNumber }) {
	const [enteredNumber, setEnteredNumber] = useState('');
	const { width, height } = useWindowDimensions();
	const marginTop = height < 380 ? 50 : 100;

	function numberInputHandler(input) {
		setEnteredNumber(input);
	}

	function resetInputHanlder() {
		setEnteredNumber('');
	}

	function confirmInputHandler() {
		const chosenNumber = parseInt(enteredNumber);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert('Invalid Number', 'Number has to be between 0 and 99', [{ text: 'OK', style: 'destructive', onPress: resetInputHanlder }]);
			return;
		}

		onConfirmNumber(chosenNumber);
	}

	return (
		<ScrollView style={styles.screen}>
			<KeyboardAvoidingView style={styles.screen} behavior='position'>
				<View style={[styles.rootContainer, { marginTop }]}>
					<Title>Guess My Number</Title>
					<View style={styles.inputContainer}>
						<Text style={styles.instructionText}>Enter a Number:</Text>

						<View style={styles.numberInputContainer}>
							<TextInput
								style={styles.numberInput}
								maxLength={2}
								keyboardType='number-pad'
								autoCapitalize='none'
								autoCorrect={false}
								value={enteredNumber}
								onChangeText={numberInputHandler}
							/>
						</View>
						<View style={styles.buttonsContiner}>
							<PrimaryButton style={styles.buttonContainer} onPress={resetInputHanlder}>
								Reset
							</PrimaryButton>
							<PrimaryButton style={styles.buttonContainer} onPress={confirmInputHandler}>
								Confirm
							</PrimaryButton>
						</View>
					</View>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		alignItems: 'center',
	},
	inputContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 36,
		marginHorizontal: 24,
		padding: 16,
		backgroundColor: Colors.dark700,
		borderRadius: 8,
		elevation: 4, // Android only property
		shadowColor: 'black', // iOS only property
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
	instructionText: {
		fontSize: 16,
		color: Colors.white,
		fontFamily: 'open-sans',
	},
	numberInputContainer: {
		width: 50,
		height: 50,
		borderBottomColor: Colors.primary500,
		borderBottomWidth: 2,
		marginVertical: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	numberInput: {
		padding: 0,
		includeFontPadding: false,
		fontSize: 32,
		color: Colors.primary500,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	buttonsContiner: {
		flexDirection: 'row',
	},
	buttonContainer: {
		flex: 1,
	},
});

export default StartGameScreen;
