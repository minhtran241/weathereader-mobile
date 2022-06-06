import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../utils/index";
import {
	FontAwesome5,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import { DataTable } from "react-native-paper";
import { Fontisto, Entypo } from "react-native-vector-icons";

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

export default function WeatherForecast({
	weatherForecast,
	unitsSystem,
}) {
	const { list } = weatherForecast;
	const temps = [];
	const descriptions = [];
	const icons = [];
	const iconUrls = [];
	const dates = [];
	const times = [];

	list.forEach((l, index) => {
		temps.push(l.main.temp);
		descriptions.push(l.weather[0].main);
		iconUrls.push(
			`https://openweathermap.org/img/wn/${l.weather[0].icon}@4x.png`
		);
		dates.push(
			`${l.dt_txt.split(" ")[0].split("-")[1]}-${
				l.dt_txt.split(" ")[0].split("-")[2]
			}`
		);
		times.push(`${l.dt_txt.split(" ")[1].split(":")[0]}h`);
	});

	return (
		<View
			style={{
				...styles.weatherDetails,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<DataTable>
				<DataTable.Header style={styles.header}>
					<DataTable.Title>
						<Fontisto
							name="date"
							size={20}
							color={PRIMARY_COLOR}
						/>
					</DataTable.Title>
					<DataTable.Title>
						<Entypo
							name="back-in-time"
							size={25}
							color={PRIMARY_COLOR}
						/>
					</DataTable.Title>
					<DataTable.Title>
						<FontAwesome5
							name="temperature-low"
							size={20}
							color={PRIMARY_COLOR}
						/>
					</DataTable.Title>
					<DataTable.Title>
						<MaterialCommunityIcons
							name="weather-cloudy-clock"
							size={25}
							color={PRIMARY_COLOR}
						/>
					</DataTable.Title>
					<DataTable.Title>
						<MaterialCommunityIcons
							name="content-copy"
							size={23}
							color={PRIMARY_COLOR}
						/>
					</DataTable.Title>
				</DataTable.Header>
				<DataTable.Row style={styles.weatherDetailsRow}>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{dates[1]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{times[1]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{temps[1]}℃
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Image
							style={styles.weatherIcon}
							source={{ uri: iconUrls[1] }}
						/>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{descriptions[1]}
						</Text>
					</DataTable.Cell>
				</DataTable.Row>

				<DataTable.Row style={styles.weatherDetailsRow}>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{dates[3]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{times[3]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{temps[3]}℃
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Image
							style={styles.weatherIcon}
							source={{ uri: iconUrls[3] }}
						/>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{descriptions[3]}
						</Text>
					</DataTable.Cell>
				</DataTable.Row>

				<DataTable.Row style={styles.weatherDetailsRow}>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{dates[6]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{times[6]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{temps[6]}℃
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Image
							style={styles.weatherIcon}
							source={{ uri: iconUrls[6] }}
						/>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{descriptions[6]}
						</Text>
					</DataTable.Cell>
				</DataTable.Row>
				<DataTable.Row style={styles.weatherDetailsRow}>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{dates[9]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{times[9]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{temps[9]}℃
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Image
							style={styles.weatherIcon}
							source={{ uri: iconUrls[9] }}
						/>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{descriptions[9]}
						</Text>
					</DataTable.Cell>
				</DataTable.Row>
				<DataTable.Row style={styles.weatherDetailsRow}>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{dates[12]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{times[12]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{temps[12]}℃
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Image
							style={styles.weatherIcon}
							source={{ uri: iconUrls[12] }}
						/>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{descriptions[12]}
						</Text>
					</DataTable.Cell>
				</DataTable.Row>
				<DataTable.Row style={styles.weatherDetailsRow}>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{dates[15]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{times[15]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{temps[15]}℃
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Image
							style={styles.weatherIcon}
							source={{ uri: iconUrls[15] }}
						/>
					</DataTable.Cell>

					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{descriptions[15]}
						</Text>
					</DataTable.Cell>
				</DataTable.Row>
				<DataTable.Row style={styles.weatherDetailsRow}>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{dates[18]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{times[18]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{temps[18]}℃
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Image
							style={styles.weatherIcon}
							source={{ uri: iconUrls[18] }}
						/>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{descriptions[18]}
						</Text>
					</DataTable.Cell>
				</DataTable.Row>
				<DataTable.Row style={styles.weatherDetailsRow}>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{dates[21]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{times[21]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{temps[21]}℃
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Image
							style={styles.weatherIcon}
							source={{ uri: iconUrls[21] }}
						/>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{descriptions[21]}
						</Text>
					</DataTable.Cell>
				</DataTable.Row>
				<DataTable.Row style={styles.weatherDetailsRow}>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{dates[24]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{times[24]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{temps[24]}℃
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Image
							style={styles.weatherIcon}
							source={{ uri: iconUrls[24] }}
						/>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{descriptions[24]}
						</Text>
					</DataTable.Cell>
				</DataTable.Row>
				<DataTable.Row style={styles.weatherDetailsRow}>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{dates[27]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{times[27]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{temps[27]}℃
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Image
							style={styles.weatherIcon}
							source={{ uri: iconUrls[27] }}
						/>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{descriptions[27]}
						</Text>
					</DataTable.Cell>
				</DataTable.Row>
				<DataTable.Row style={styles.weatherDetailsRow}>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{dates[30]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{times[30]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{temps[30]}℃
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Image
							style={styles.weatherIcon}
							source={{ uri: iconUrls[30] }}
						/>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{descriptions[30]}
						</Text>
					</DataTable.Cell>
				</DataTable.Row>
				<DataTable.Row style={styles.weatherDetailsRow}>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{dates[33]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{times[33]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{temps[33]}℃
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Image
							style={styles.weatherIcon}
							source={{ uri: iconUrls[33] }}
						/>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{descriptions[33]}
						</Text>
					</DataTable.Cell>
				</DataTable.Row>
				<DataTable.Row style={styles.weatherDetailsRow}>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{dates[36]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{times[36]}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{temps[36]}℃
						</Text>
					</DataTable.Cell>
					<DataTable.Cell>
						<Image
							style={styles.weatherIcon}
							source={{ uri: iconUrls[36] }}
						/>
					</DataTable.Cell>
					<DataTable.Cell>
						<Text style={styles.textSecondary}>
							{descriptions[36]}
						</Text>
					</DataTable.Cell>
				</DataTable.Row>
			</DataTable>
		</View>
	);
}

const styles = StyleSheet.create({
	weatherDetails: {
		marginTop: "auto",
		margin: 10,
		borderWidth: 3,
		borderColor: BORDER_COLOR,
		borderRadius: 30,
		marginBottom: 20,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	weatherDetailsRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	weatherDetailsBox: {
		flex: 1,
		padding: 15,
	},
	weatherDetailsItems: {
		alignItems: "flex-end",
		justifyContent: "flex-end",
	},
	weatherIcon: {
		height: 40,
		width: 40,
		alignItems: "center",
		justifyContent: "center",
	},
	textSecondary: {
		fontSize: 15,
		color: SECONDARY_COLOR,
		fontWeight: "400",
		margin: 7,
	},
	textPrimary: {
		fontSize: 15,
		color: PRIMARY_COLOR,
		fontWeight: "700",
		margin: 7,
	},
});
