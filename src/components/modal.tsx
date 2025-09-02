import React, { PropsWithChildren } from 'react';
import styled, { useTheme } from 'styled-components';
import { XIcon } from '@phosphor-icons/react';
import { hexToRGBA } from "about-colors-js";
import { IconButton } from '@/components/icon-button';

interface ModalProps extends PropsWithChildren {
	title: string;
	setIsClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: React.FC<ModalProps> = ({title, setIsClose, children}) => {

	const theme = useTheme();

	return (
		<Container>
			<Card>
				<Header>
					<PageName>{title}</PageName>
					<IconButton Icon={XIcon} size={28} onPress={() => setIsClose(false)} color='#550d0d' hoverColor={theme.colors.warning} />
				</Header>
				<Content>{children}</Content>
			</Card>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100vw;
	height: 100vh;
	z-index: 0;
	position: absolute;

	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	background-color: rgba(0, 0, 0, 0.4);
`;

const Card = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;

	background-color: ${(props) => props.theme.common.background};

	width: 50%;
	min-height: 25%;
	max-height: 90vh;

	border-radius: 10px;
	box-shadow: 0px 0px 20px -8px ${(props) => hexToRGBA(props.theme.colors.black, 0.45)};
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	height: 20%;
	width: 100%;

	padding: 20px;
`;

const PageName = styled.span`
	display: flex;
	justify-content: flex-start;

	width: 70%;

	font-size: 24px;
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;

	height: 90%;
	width: 100%;

	padding: 20px;
	margin-bottom: 40px;

	overflow-y: auto;
`;
