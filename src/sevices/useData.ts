import axios from "axios";

const useData = async (countries: string[], indicator: number[]) => {
	if (countries.length > 0 && indicator.length > 0)
		try {
			const response = await axios.get(
				`https://servicodados.ibge.gov.br/api/v1/paises/${countries.join(
					"|"
				)}/indicadores/${indicator.join("|")}`
			);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
};

export default useData;
