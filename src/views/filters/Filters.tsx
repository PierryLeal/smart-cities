import { Dispatch, SetStateAction } from "react";
import Dropdown from "../../components/Dropdown";
import {
	CountriesResponse,
	FiltersProps,
	IndicatorsResponse,
} from "../../props";
import { Selectors } from "./Filters.styled";

const Filters: React.FC<{
	setFilters: Dispatch<SetStateAction<FiltersProps>>;
	filters: FiltersProps;
	indicators: IndicatorsResponse[];
	countries: CountriesResponse[];
}> = ({ filters, setFilters, countries, indicators }) => {
	const formatCountries = Array.from(
		new Set(countries.map(({ nome }) => nome.abreviado))
	);

	return (
		<Selectors>
			<Dropdown
				filters={filters}
				setFilters={setFilters}
				filterKey={"countries"}
				multiple
				label='Países'
				options={formatCountries}
			/>
			<Dropdown
				filters={filters}
				setFilters={setFilters}
				filterKey='indicators'
				label='Indicadores'
				options={Array.from(
					new Set(indicators.map(({ indicador }) => indicador.split(" -")[0]))
				)}
			/>
		</Selectors>
	);
};

export default Filters;
