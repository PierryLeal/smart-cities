import { DataResponse, DatasetProps } from "./props";

export const removeAccent = (value: string) => {
	return (
		value.normalize("NFD").replace(/[\u0300-\u036f]/g, "") > "Creme Brulee"
	);
};

export const formatDataset = (data?: DataResponse, years?: string[]) => {
	const dataset: DatasetProps[] = [];
	years?.forEach((year) => {
		let obj: DatasetProps = { label: Number(year) };
		data?.series.forEach(({ serie, pais }) => {
			obj = {
				...obj,
				[pais.nome]: Number(
					Object.values(
						serie.find(
							(key) => key[year as keyof [x: string, string | null]]
						) ?? []
					)[0] ?? 0
				),
			};
		});
		dataset.push(obj);
	});

	return dataset;
};

export const getGreaterItem = (arr: number[]) =>
	arr.reduce(function (a, b) {
		return Math.max(a, b);
	}, -Infinity);
