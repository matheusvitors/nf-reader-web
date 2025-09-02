import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { hexToRGBA } from 'about-colors-js';
import { UseFormRegister, RegisterOptions, FieldErrors } from 'react-hook-form';
import { InputErrorMessage } from '@/components';

interface DatePickerProps extends InputHTMLAttributes<HTMLInputElement>{
	label: string;
	name: string;
	register?: UseFormRegister<any>;
	options?: RegisterOptions;
	errors?: FieldErrors;
}

export const DatePicker: React.FC<DatePickerProps> = ({ label, name, register, options, errors, ...rest }) => {
	return (
		<Container>
			<Label>{label}</Label>
			{register ?
				<Input
					type='date'
					{...register(name, options)}
					{...rest}
					$hasError={errors && errors[name] ? true : false}
				/>
			:
				<Input
					type='date'
					{...rest}
					$hasError={errors && errors[name] ? true : false}
				/>
			}

			{errors && errors[name] && <InputErrorMessage>{errors[name].message?.toString()}</InputErrorMessage>}

		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	height: 100px;
	width: 100%;
`

const Label = styled.label`
	margin: 5px 0;
	font-weight: 400;
`

const Input = styled.input<{ $hasError?: boolean; }>`
	width: 100%;
	height: 40px;

	background-color: transparent;
	border: 1px solid ${props => props.$hasError ? props.theme.colors.warning :  hexToRGBA(props.theme.input.border, 0.3)};
	border-radius: 5px;

	padding: 0 10px;

	font-size: 16px;
	color:  ${props => props.theme.input.text};

	&::-webkit-calendar-picker-indicator {
		filter: invert(1);
	}
`
