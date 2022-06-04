import { View, Platform, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/index";

export default function ReloadIcon({ load }) {
	const reloadIconName =
		Platform.OS === "ios" ? "ios-refresh" : "md-refresh";
	return (
		<View style={styles.reloadIcon}>
			<Ionicons
				onPress={load}
				name="reload-circle-sharp"
				size={45}
				color={colors.PRIMARY_COLOR}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	reloadIcon: {
		position: "absolute",
		top: 83,
		right: 40,
	},
});
