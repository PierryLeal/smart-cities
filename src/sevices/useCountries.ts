import axios from "axios";

const useCountries = async () => {
	try {
		const response = await axios.get(
			"https://servicodados.ibge.gov.br/api/v1/paises/{paises}/"
		);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export default useCountries;
