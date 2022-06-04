import { View, StyleSheet, Platform } from "react-native";
import React from "react";
import { Picker } from "@react-native-community/picker";
import { colors } from "../utils/index";

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

export default function UnitsPicker({ unitsSystem, setUnitsSystem }) {
	return (
		<View style={styles.unitsSystem}>
			<Picker
				selectedValue={unitsSystem}
				onValueChange={(item) => setUnitsSystem(item)}
				mode="dropdown"
				itemStyle={{ fontSize: 20 }}
			>
				<Picker.Item
					label="℃"
					value="metric"
					color={SECONDARY_COLOR}
				/>
				<Picker.Item
					label="℉"
					value="imperial"
					color={SECONDARY_COLOR}
				/>
			</Picker>
		</View>
	);
}

const styles = StyleSheet.create({
	unitsSystem: {
		position: "absolute",
		...Platform.select({
			ios: {
				top: -15,
			},
			android: {
				top: 30,
			},
		}),
		left: 20,
		width: 100,
		height: 50,
	},
});
