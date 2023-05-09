import styled from 'styled-components';

export const ContainerTitle = styled.div`
	margin-bottom: 40px;
	margin-top: 60px;

	h1 {
		color: ${(props) => props.theme.colors.gray[700]};
		font-size: ${(props) => props.theme.fontSizes.xxl};
		span {
			color: ${(props) => props.theme.colors.blue[400]};
		}
	}
`;