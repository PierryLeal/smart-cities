import { ChartBar } from "./Styled";

import { BarChart } from "@mui/x-charts/BarChart";
import { formatDataset } from "./funtions";
import { DataResponse } from "./props";
import { Typography } from "@mui/material";

const Charts: React.FC<{ data: DataResponse; years: string[] }> = ({
	data,
	years,
}) => {
	const series = data?.series.map(({ pais }) => {
		return {
			dataKey: pais.nome,
			label: pais.nome,
			stack: "total",
		};
	});
	const formattedData = formatDataset(data, years) ?? [];

	return (
		<ChartBar>
			<Typography
				fontWeight={700}
				fontSize={"1.2rem"}
				style={{ color: "#b489ff" }}
			>
				{data.indicador}
			</Typography>
			<BarChart
				dataset={formattedData}
				xAxis={[
					{
						scaleType: "band",
						dataKey: "label",
					},
				]}
				series={series ?? []}
				sx={{ margin: "1.8rem" }}
				colors={["#32074e", "#651b7c", "#ad0079", "#970026", "#610000"]}
			/>
		</ChartBar>
	);
};

export default Charts;
