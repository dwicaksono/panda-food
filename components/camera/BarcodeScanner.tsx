import React, { useRef } from "react";

const BarcodeScanner: React.FC = () => {
	const videoRef = useRef<HTMLVideoElement>(null);

	return (
		<div>
			<video ref={videoRef} style={{ width: "100%", maxWidth: "640px" }} />
		</div>
	);
};

export default BarcodeScanner;
