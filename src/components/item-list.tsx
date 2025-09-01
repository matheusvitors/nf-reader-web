import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Notify } from 'notiflix';
import { CheckFatIcon, CopyIcon, PencilSimpleIcon, TrashIcon } from '@phosphor-icons/react';
import { IconButton } from '@/components/icon-button';
import { NotaFiscal } from '@/interfaces';

interface ItemListProps {
	item: NotaFiscal;
	setSelected: React.Dispatch<React.SetStateAction<NotaFiscal | null>>;
	setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ItemList: React.FC<ItemListProps> = ({ item, setEditing, setSelected }) => {

	const theme = useTheme();

	const onCopy = (text: string) => {
		navigator.clipboard.writeText(text);
		Notify.success('Texto copiado!', {position: 'right-bottom'})
	}

	const onEditing = (nf: NotaFiscal) => {
		setSelected(nf);
		setEditing(true);
	}

	return (
		<Container>
			<Informations>
				<Info>{new Date(item.data).toLocaleDateString()}</Info>
				<Info>{item.description && item.description.length > 60 ? item.description.slice(60) + '...' : item.description}</Info>
				<Info>{item.link}</Info>
			</Informations>
			<Actions>
				<IconButton Icon={CopyIcon} size={26} hoverColor={theme.colors.primary} onPress={() => onCopy(item.link)} />
				<IconButton Icon={CheckFatIcon} size={26} hoverColor={theme.colors.success} />
				<IconButton Icon={PencilSimpleIcon} size={26} hoverColor={theme.colors.attention} onPress={() => onEditing(item)} />
				<IconButton Icon={TrashIcon} size={26} hoverColor={theme.colors.warning} />
			</Actions>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: row;

	min-width: 80%;
	height: 70px;

	border: 1px solid ${props => props.theme.colors.primary};
`

const Informations = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	gap: 4px;

	width: 70%;
	height: 100%;

	padding-left: 15px;
`

const Info = styled.span`

`

const Actions = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-direction: row;
	gap: 20px;

	width: 30%;
	height: 100%;

	padding-right: 15px;

	/* border-left: 1px solid black; */
`
