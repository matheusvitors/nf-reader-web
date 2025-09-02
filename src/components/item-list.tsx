import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Confirm, Notify } from 'notiflix';
import { CheckFatIcon, CopyIcon, PencilSimpleIcon, TrashIcon, XIcon } from '@phosphor-icons/react';
import { IconButton } from '@/components/icon-button';
import { NotaFiscal } from '@/interfaces';
import { invertData } from '@/utils/invert-data';
import { editNotaFiscal, removeNotaFiscal } from '@/services';
import { useQueryClient } from '@tanstack/react-query';

interface ItemListProps {
	item: NotaFiscal;
	setSelected: React.Dispatch<React.SetStateAction<NotaFiscal | null>>;
	setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ItemList: React.FC<ItemListProps> = ({ item, setEditing, setSelected }) => {

	const theme = useTheme();
	const queryClient = useQueryClient();

	const onCopy = (text: string) => {
		navigator.clipboard.writeText(text);
		Notify.success('Link copiado!', {position: 'right-bottom'})
	}

	const onCheck = async () => {
		try {
			await editNotaFiscal({...item, check: !item.check});
			await queryClient.invalidateQueries({ queryKey: ['notasFiscais'] })
		} catch (error: any) {
			Notify.failure(error.message, {position: 'right-bottom'})
		}
	}

	const onEditing = (nf: NotaFiscal) => {
		setSelected(nf);
		setEditing(true);
	}

	const onRemove = async () => {
		try {
			Confirm.show(
				'Atenção!',
				`Deseja excluir o item [ ${item.description} ]?`,
				'Excluir',
				'Cancelar',
				async () => {
					await removeNotaFiscal(item.id);
					Notify.success('Nota fiscal removida!', {position: 'right-bottom'});
					await queryClient.invalidateQueries({ queryKey: ['notasFiscais'] })
				}, () => {},
				{titleColor: theme.colors.warning, okButtonBackground: theme.colors.warning}
			)
		} catch (error: any) {
			Notify.failure(error.message, {position: 'right-bottom'})
		}
	}

	return (
		<Container $isChecked={item.check}>
			<Informations>
				<Info>{invertData(item.data)}</Info>
				<Info>{item.description && item.description.length > 30 ? item.description.slice(0, 30) + '...' : item.description}</Info>
				<Info>{item.link && item.link.length > 60 ? item.link.slice(0, 60) + '...' : item.link}</Info>
			</Informations>
			<Actions>
				<IconButton Icon={item.check ? XIcon : CheckFatIcon} size={26} hoverColor={theme.colors.success} onPress={onCheck}/>
				{!item.check && <>
					<IconButton Icon={CopyIcon} size={26} hoverColor={theme.colors.primary} onPress={() => onCopy(item.link)} />
					<IconButton Icon={PencilSimpleIcon} size={26} hoverColor={theme.colors.attention} onPress={() => onEditing(item)} />
					<IconButton Icon={TrashIcon} size={26} hoverColor={theme.colors.warning} onPress={onRemove} />
				</>}
			</Actions>
		</Container>
	);
}

const Container = styled.div<{ $isChecked?: boolean;}>`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: row;

	min-width: 80%;
	height: 70px;

	opacity: ${props => props.$isChecked ? 0.5 : 1};

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
`
