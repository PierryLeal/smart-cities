import styled from "styled-components";

export const Selectors = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;

	@media (max-width: 700px) {
		grid-template-rows: repeat(2, 1fr);
		grid-template-columns: unset;
	}
`;
