import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer({ children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
}

export default NumberContainer;

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: Colors.primary500,
		borderRadius: 8,
		padding: 24,
		margin: 24,
		justifyContent: 'center',
		alignItems: 'center',
		height: 100,
	},
	numberText: {
		color: Colors.primary500,
		fontSize: 36,
		fontWeight: 'bold',
	},
});
