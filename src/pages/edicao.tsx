import React from 'react';
import { NotaFiscal } from '@/interfaces';
import { Modal } from '@/components';

interface EdicaoProps {
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
	notaFiscal?: NotaFiscal;
}

export const Edicao: React.FC<EdicaoProps> = ({ setIsVisible, notaFiscal }) => {
	return (
		<Modal title={notaFiscal ? 'Edição' : 'Adição'} setIsClose={setIsVisible}>
			oi
		</Modal>
	);
}
