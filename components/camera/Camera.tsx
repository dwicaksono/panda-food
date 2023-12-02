"use client";
import Image from "next/image";
import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";

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

	const startRearCamera = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				video: { facingMode: { exact: "environment" } },
			});
			if (webCamRef.current) {
				webCamRef.current.srcObject = stream;
			}
		} catch (err) {
			console.error("Error accessing the rear camera:", err);
		}
	};
	return (
		<div>
			<Webcam />
		</div>
	);
};

export default Camera;
