export const getImageExtension = (data64: string): string | null => {
	// Check the Base64 string header to determine the image extension
	const type = data64.match(/^data:image\/(\w+);base64,/);
	return type ? type[1] : null;
};
