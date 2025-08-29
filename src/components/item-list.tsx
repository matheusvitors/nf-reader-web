import { NotaFiscal } from '@/interfaces';
import React from 'react';

export const ItemList: React.FC<{item: NotaFiscal}> = ({ item }) => {
	return (
		<div>{item.description}</div>
	);
}
