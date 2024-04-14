import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-height: 100%;
	padding: 1rem;
	overflow-y: auto;
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: auto;
	font-weight: 700;
	font-size: 2rem;
	margin-bottom: 1rem;
	gap: 1rem;
`;

export const Content = styled.div`
	display: grid;
	grid-template-areas: "bar bar ." ". . .";
	gap: 1rem;
	flex: 1;
`;
export const ChartBar = styled.div`
	display: flex;
	flex-direction: column;
	grid-area: bar;
	width: 100%;
	height: 25rem;
	text-align: center;
	margin-top: 1rem;
	background-color: #dbc6ff;
	border-radius: 1rem;
`;
