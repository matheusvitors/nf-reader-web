import React, { useEffect } from 'react';
import { NotaFiscal } from '@/interfaces';
import { Button, DatePicker, Form, Modal, TextInput } from '@/components';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import styled from 'styled-components';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editNotaFiscal } from '@/services';
import { Notify } from 'notiflix';

interface EdicaoProps {
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
	notaFiscal: NotaFiscal;
}

const edicaoFormSchema = z.object({
	description: z.string().min(1, 'A descrição é obrigatória'),
	// data: z.date(),
	data: z.string().min(1, 'A data é obrigatória'),
})

type EdicaoFormData = z.infer<typeof edicaoFormSchema>;


export const Edicao: React.FC<EdicaoProps> = ({ setIsVisible, notaFiscal }) => {
	const queryClient = useQueryClient();
	const { register, handleSubmit, formState: { errors } } = useForm<EdicaoFormData>({
		defaultValues: {
			description: notaFiscal.description,
			data: notaFiscal.data,
		},
		resolver: zodResolver(edicaoFormSchema)
	});

	const { error, isPending, isSuccess, mutateAsync } = useMutation({
		mutationFn: (input: NotaFiscal) => editNotaFiscal(input),
	});

	useEffect(() => {
		error && Notify.failure(error.message, {position: 'right-bottom'})
	}, [error])

	useEffect(() => {
		if(isSuccess) {
			Notify.success('Nota fiscal editada!', {position: 'right-bottom'});
			setIsVisible(false)
		}
	}, [isSuccess])

	const onSubmit = async (input: EdicaoFormData) => {
		try {
			await mutateAsync({...notaFiscal, description: input.description, data: input.data});
			await queryClient.invalidateQueries({ queryKey: ['notasFiscais'] })
		} catch (error: any) {
			Notify.failure(error.message, {position: 'right-bottom'})
		}
	}

	return (
		<Modal title='Edição' setIsClose={setIsVisible}>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<TextInput label='Descrição' name='description' register={register} errors={errors} />
				<DatePicker label='Data' name='data' register={register} errors={errors} />
				<Link>Link</Link>
				<Link>{notaFiscal.link}</Link>
				<Button isLoading={isPending} type='submit' label='Salvar' />
			</Form>
		</Modal>
	);
}

const Link = styled.p`
	align-self: flex-start;
`
