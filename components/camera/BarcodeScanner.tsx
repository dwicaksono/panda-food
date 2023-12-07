import React, { useRef, useEffect } from "react";
import { BrowserBarcodeReader } from "@zxing/library";

const BarcodeScanner: React.FC = () => {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const codeReader = new BrowserBarcodeReader();

		const callbackFn = (result: any) => {
			console.log("Decoded:", result.getText());
			// Handle the scanned barcode result here
		};

		codeReader
			.decodeFromInputVideoDevice(undefined, videoRef.current, callbackFn)
			.catch((err: any) => {
				console.error("Error:", err);
				// Handle errors here
			});

		return () => {
			codeReader.reset();
		};
	}, []);

	return (
		<div>
			<video ref={videoRef} style={{ width: "100%", maxWidth: "640px" }} />
		</div>
	);
};

export default BarcodeScanner;
