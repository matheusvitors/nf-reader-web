import React, { useState } from "react";
import styled from "styled-components";
import * as I from "@phosphor-icons/react";

interface IconButtonProps extends I.IconProps {
	Icon: I.Icon;
	onPress?: React.MouseEventHandler<HTMLButtonElement>;
	hoverColor?: string;
}


export const IconButton: React.FC<IconButtonProps> = ({ Icon, onPress, color, hoverColor, ...props }) => {
	const [isHovered, setIsHovered] = useState(false);

	const iconColor = isHovered && hoverColor ? hoverColor : color ? color : undefined;

	return (
		<Container onClick={onPress}  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<Icon color={iconColor} {...props} />
		</Container>
	);
};

const Container = styled.button`
	background-color: transparent;
`;

