import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FiltersProps } from "../props";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

function getStyles(name: string, personName: string[], theme: Theme) {
	return {
		fontWeight:
			personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

const Dropdown: React.FC<{
	label: string;
	options: string[];
	setFilters: React.Dispatch<React.SetStateAction<FiltersProps>>;
	filters: FiltersProps;
	filterKey: string;
	multiple?: boolean;
	disabled?: boolean;
}> = ({
	filters,
	setFilters,
	filterKey,
	multiple,
	label,
	options,
	disabled,
}) => {
	const theme = useTheme();

	const selectValue = filters[filterKey as keyof FiltersProps];

	const handleChange = (event: SelectChangeEvent<typeof selectValue>) => {
		const {
			target: { value },
		} = event;
		const setValue = () =>
			setFilters({
				...filters,
				[filterKey]: typeof value === "string" ? value.split(",") : value,
			});

		if (!multiple) setValue();
		else {
			if (value!.length > 0 && value!.length < 6) setValue();
		}
	};

	return (
		<FormControl
			className='dropdown-styled'
			style={{ width: "100%" }}
			disabled={disabled}
		>
			<InputLabel
				id='demo-multiple-name-label'
				size='small'
				style={{ color: "#b489ff" }}
			>
				{label}
			</InputLabel>
			<Select
				labelId='demo-multiple-name-label'
				id='demo-multiple-name'
				multiple={multiple}
				value={selectValue}
				onChange={handleChange}
				input={<OutlinedInput label={label} />}
				MenuProps={MenuProps}
				size='small'
				style={{ color: "#b489ff" }}
			>
				{options.map((option) => (
					<MenuItem
						key={option}
						value={option}
						style={getStyles(option, selectValue ?? [], theme)}
					>
						{option}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default Dropdown;
