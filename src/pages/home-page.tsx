import { useSystemTheme } from '@/styles/useSystemTheme';
import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { MoonIcon, SunIcon } from '@phosphor-icons/react';
import { Notify } from 'notiflix';
import { NotaFiscal } from '@/interfaces';
import { listNotasFiscais } from '@/services';
import { ItemList, PageLoading } from '@/components';
import { useQuery } from '@tanstack/react-query';
import { Edicao } from '@/pages/edicao';

export const HomePage: React.FC = () => {

	const { theme: systemTheme, changeTheme } = useSystemTheme();
	const theme = useTheme();
		const {
		data: notasFiscais,
		isFetching,
		error
	} = useQuery<NotaFiscal[]>({
		queryKey: ["notasFiscais"],
		queryFn: listNotasFiscais,
	});

	const [editing, setEditing] = useState(false);
	const [selectedNotaFiscal, setselectedNotaFiscal] = useState<NotaFiscal | null>(null);

	useEffect(() => {
		error && Notify.failure(error?.message);
	}, [error])

	const iconProps = {
		size: 30
	}

	return (
		<Container>
			<Header>
				<Side></Side>
				<HeaderContent>
					<h1>NF Reader</h1>
				</HeaderContent>
				<Side>
					{systemTheme === 'light' && <SunIcon color={theme.iconTheme} onClick={() => changeTheme('dark')} size={iconProps.size} />}
					{systemTheme === 'dark' && <MoonIcon color={theme.iconTheme} onClick={() => changeTheme('light')} size={iconProps.size} />}
				</Side>
			</Header>
			<Content>
				{isFetching && <PageLoading visible={isFetching} />}
				{!isFetching && notasFiscais && notasFiscais.length > 0 && notasFiscais.map(notafiscal => <ItemList item={notafiscal} key={notafiscal.id} setEditing={setEditing} setSelected={setselectedNotaFiscal}  />)}
			</Content>
			{selectedNotaFiscal && editing && <Edicao notaFiscal={selectedNotaFiscal} setIsVisible={setEditing} /> }
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;

	min-width: 100%;
	min-height: 100vh;

	transition: all 0.3s;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;

	transition: width 0.5s ease;

	width: 100%;
	height: 8vh;
`

const Side = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 7%;
	height: 100%;

	`

const HeaderContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 86%;
	height: 100%;

`

const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;

	gap: 15px;

	transition: width 0.5s ease;

	width: 100%;
	height: 92vh;
`;
