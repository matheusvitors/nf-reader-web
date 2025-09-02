export const invertData = (data: string) => {
	const [ano, mes, dia] = data.split("-");
	return `${dia}-${mes}-${ano}`;
};
