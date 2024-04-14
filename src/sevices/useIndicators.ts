import axios from "axios";

const useIndicators = async () => {
	try {
		const response = await axios.get(
			"https://servicodados.ibge.gov.br/api/v1/paises/indicadores/"
		);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export default useIndicators;
