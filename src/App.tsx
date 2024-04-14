import { Container, Header } from "./Styled";

import { ThemeProvider, createTheme } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import Filters from "./views/filters/Filters";
import useResponses from "./useResponses";
import useData from "./sevices/useData";
import { useEffect, useMemo, useState } from "react";
import { DataResponse, FiltersProps } from "./props";
import Charts from "./Charts";
import icon from "./assets/icon.png";

const App: React.FC = () => {
	const [filters, setFilters] = useState<FiltersProps>({
		countries: ["Brasil"],
		indicators: ["Economia"],
		years: [],
	});
	const [data, setData] = useState<DataResponse[]>([]);

	const theme = createTheme({
		palette: {
			primary: {
				main: deepPurple[500],
				light: deepPurple[100],
			},
		},
	});

	const { countries, indicators } = useResponses();

	useEffect(() => {
		const countriesSigles = filters.countries.map(
			(countrie) =>
				countries.find(({ nome }) => nome.abreviado === countrie)?.id[
					"ISO-3166-1-ALPHA-2"
				]!
		);
		const indicatorsId = indicators
			.filter(({ indicador }) => indicador.startsWith(filters.indicators[0]))
			.map(({ id }) => id);

		const getData = async () => {
			try {
				const response = await useData(countriesSigles, indicatorsId);
				setData(response);
			} catch (error) {
				console.error(error);
			}
		};
		getData();
	}, [filters.countries, filters.indicators, countries, indicators]);

	const years = useMemo(() => {
		if (data && data.length > 0)
			return data[0].series[0].serie
				.filter(
					(key) =>
						Object.keys(key)[0].length < 5 && Object.keys(key)[0].length > 1
				)
				.map((key) => Object.keys(key)[0]);
		return [];
	}, [data]);

	return (
		<ThemeProvider theme={theme}>
			<main>
				<Container>
					<Header>
						<img src={icon} width='40rem' height='40rem' alt='Chart Logo' />
						DASHBOARD - Indicadores por Países
					</Header>
					<div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
						<Filters
							setFilters={setFilters}
							filters={filters}
							countries={countries}
							indicators={indicators}
							years={years}
						/>

						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "1rem",
							}}
						>
							{data && data.map((x) => <Charts data={x} years={years} />)}
						</div>
					</div>
				</Container>
			</main>
		</ThemeProvider>
	);
};

export default App;
