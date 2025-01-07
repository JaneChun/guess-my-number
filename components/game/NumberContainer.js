import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer({ children }) {
	const deviceWidth = Dimensions.get('window').width;

	const containerStyle = {
		...styles.container,
		paddingVertical: deviceWidth < 380 ? 12 : 24,
		paddingHorizontal: deviceWidth < 380 ? 24 : 48,
		margin: deviceWidth < 380 ? 12 : 24,
	};

	return (
		<View style={containerStyle}>
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
