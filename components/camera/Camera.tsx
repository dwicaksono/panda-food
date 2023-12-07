"use client";
import Image from "next/image";
import React, { useRef, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Webcam from "react-webcam";

const videoConstraints = {
	facingMode: "environment",
};
const Camera = () => {
	const webCamRef = useRef<any>(null);
	const [imgSreen, setImgScreen] = useState();

	const capture = useCallback(() => {
		const imageSrc = webCamRef.current.getScreenshot();
		setImgScreen(imageSrc);
	}, [webCamRef, setImgScreen]);

	const startFrontCamera = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				video: { facingMode: "user" }, // Use 'user' to select front-facing camera
			});
			if (webCamRef.current) {
				webCamRef.current.srcObject = stream;
			}
		} catch (err) {
			console.error("Error accessing the front camera:", err);
		}
	};

	const onDrop = (acceptedFiles) => {
		// Do something with the uploaded files (e.g., send to server)
		console.log(acceptedFiles);
	};

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
	return (
		<div className="w-full">
			<Webcam
				audio={false}
				ref={webCamRef}
				screenshotFormat="image/jpeg"
				screenshotQuality={1}
				style={{
					width: "100%",
					height: "100%",
				}}
				videoConstraints={videoConstraints}
			/>

			<button
				className="bg-indigo-500 mt-4 px-4 py-2 rounded-lg"
				onClick={capture}>
				Capture photo
			</button>
			<button
				className="bg-indigo-500 mt-4 px-4 py-2 rounded-lg"
				onClick={startFrontCamera}>
				rear camera
			</button>
			{imgSreen && (
				<div className="relative object-contain bg-center w-full h-[500px]">
					<Image src={imgSreen} alt="capture" fill className="object-contain" />
				</div>
			)}

			<div
				{...getRootProps()}
				className="dropzone w-full bg-indigo-500 p-4 flex justify-center mt-8 cursor-pointer">
				<input {...getInputProps()} />
				{isDragActive ? (
					<p>Drop the files here ...</p>
				) : (
					<p>Drag 'n' drop some files here, or click to select files</p>
				)}
			</div>
		</div>
	);
};

export default Camera;
