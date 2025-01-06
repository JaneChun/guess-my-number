import { StyleSheet, TextInput, View, Alert } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Colors from '@/constants/colors';

function StartGameScreen({ onConfirmNumber }) {
	const [enteredNumber, setEnteredNumber] = useState('');

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
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.numberInput}
				maxLength={2}
				keyboardType='number-pad'
				autoCapitalize='none'
				autoCorrect={false}
				value={enteredNumber}
				onChangeText={numberInputHandler}
			/>
			<View style={styles.buttonsContiner}>
				<PrimaryButton style={styles.buttonContainer} onPress={resetInputHanlder}>
					Reset
				</PrimaryButton>
				<PrimaryButton style={styles.buttonContainer} onPress={confirmInputHandler}>
					Confirm
				</PrimaryButton>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 100,
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
	numberInput: {
		width: 50,
		height: 50,
		fontSize: 32,
		borderBottomColor: Colors.primary500,
		borderBottomWidth: 2,
		color: Colors.primary500,
		marginVertical: 8,
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
