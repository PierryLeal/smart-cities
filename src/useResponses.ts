import React from "react";
import { CountriesResponse, IndicatorsResponse } from "./props";
import useIndicators from "./sevices/useIndicators";
import useCountries from "./sevices/useCountries";

const useResponses = () => {
	const [indicators, setIndicators] = React.useState<IndicatorsResponse[]>([]);
	const [countries, setCountries] = React.useState<CountriesResponse[]>([]);

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const indicatorsData = await useIndicators();
				const countriesData = await useCountries();
				setIndicators(indicatorsData);
				setCountries(countriesData);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	return {
		indicators,
		countries,
	};
};

export default useResponses;
