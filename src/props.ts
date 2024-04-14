export interface CountriesResponse {
	id: {
		M49: number;
		"ISO-3166-1-ALPHA-2": string;
		"ISO-3166-1-ALPHA-3": string;
	};
	nome: {
		abreviado: string;
		"abreviado-EN": string;
		"abreviado-ES": string;
	};
	area: {
		total: string;
		unidade: {
			nome: string;
			símbolo: string;
			multiplicador: number;
		};
	};
	localizacao: {
		regiao: {
			id: {
				M49: 150;
			};
			nome: string;
		};
		"sub-regiao": {
			id: {
				M49: 39;
			};
			nome: string;
		};
		"regiao-intermediaria": null;
	};
	linguas: [
		{
			id: {
				"ISO-639-1": string;
				"ISO-639-2": string;
			};
			nome: string;
		}
	];
	governo: {
		capital: {
			nome: string;
		};
	};
	"unidades-monetarias": [
		{
			id: {
				"ISO-4217-ALPHA": string;
				"ISO-4217-NUMERICO": string;
			};
			nome: string;
		}
	];
	historico: string;
}

export interface IndicatorsResponse {
	id: number;
	indicador: string;
	unidade: {
		id: string;
		classe: string;
		multiplicador: number;
	};
}

export interface DataResponse {
	id: number;
	indicador: string;
	unidade: {
		id: string;
		classe: string;
		multiplicador: 1;
	};
	series: {
		pais: {
			id: string;
			nome: string;
		};
		serie: [x: string, string | null][];
	}[];
}

export interface FiltersProps {
	countries: string[];
	indicators: string[];
	years: string[];
}

export interface DatasetProps {
	label: number;
	[key: string]: number;
}
