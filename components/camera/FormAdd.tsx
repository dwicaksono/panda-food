"use client";

import React, { ChangeEvent, useState } from "react";
import { useForm, SubmitHandler, Controller, get } from "react-hook-form";
import { z, ZodType } from "zod";
import Preview from "./Preview";
import { zodResolver } from "@hookform/resolvers/zod";
// import { createProduct } from "@/database/actions/product.actions";

// Define Zod schema
const schema = z.object({
	name: z.string().min(2),
	description: z.string().min(2),
	qty: z.number().min(1),
	image: z.string(),
});

// Define the type of the form data
type FormData = z.infer<typeof schema>;

// Component
const FormAdd: React.FC = () => {
	const {
		reset,
		control,
		handleSubmit,
		setValue,
		clearErrors,
		formState: { errors },
	} = useForm<FormData>({ resolver: zodResolver(schema) });

	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [base64String, setBase64String] = useState<string>("");
	const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(
		null
	);

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		// console.log("Form data:", { ...data, image: base64String });
		// Handle form submission here
		// try {
		// 	await createProduct({
		// 		...data,
		// 		image: base64String,
		// 	});
		// 	setBase64String("");
		// 	reset();
		// } catch (error) {
		// 	console.log(error);
		// 	throw error;
		// }
	};

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			const file: any = event.target.files[0]; // Get the selected file
			setSelectedFile(file); // Set the selected file in state
			const reader = new FileReader();

			// Generate preview of the selected image
			reader.onload = () => {
				setPreviewImage(reader.result);
				// Convert selected file to Base64
				if (reader.result && typeof reader.result === "string") {
					setBase64String(reader.result.split(",")[1]); // Extract Base64 string
				}
			};
			reader.readAsDataURL(file);
		}
	};

	const changeQty = (value: string) => {
		if (parseInt(value) >= 1) {
			setValue("qty", parseInt(value));
			clearErrors("qty");
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="w-screen px-10 sm:max-w-3xl">
			<div>
				<label className="mt-10 block text-sm font-medium leading-6 text-gray-900">
					Name
				</label>
				<Controller
					name="name"
					control={control}
					defaultValue=""
					render={({ field }) => (
						<input
							{...field}
							type="text"
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					)}
				/>
				{errors.name && (
					<p className="text-red-500 text-xs">Name is required</p>
				)}
			</div>

			<div>
				<label className="mt-10 block text-sm font-medium leading-6 text-gray-900">
					Description
				</label>
				<Controller
					name="description"
					control={control}
					defaultValue=""
					render={({ field }) => (
						<textarea
							{...field}
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					)}
				/>
				{errors.description && (
					<p className="text-red-500 text-xs">Description is required</p>
				)}
			</div>

			<div>
				<label className="mt-10 block text-sm font-medium leading-6 text-gray-900">
					Quantity
				</label>
				<Controller
					name="qty"
					control={control}
					// defaultValue=""
					render={({ field }) => {
						return (
							<input
								{...field}
								type="number"
								min={1}
								onChange={(event) => changeQty(event.target.value)}
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						);
					}}
				/>
				{errors.qty && (
					<p className="text-red-500 text-xs">Quantity must be at least 1</p>
				)}
			</div>

			<div className="mt-10">
				<label className="block text-sm font-medium leading-6 text-gray-900">
					Upload Image
				</label>
				<div className="mt-2 flex justify-center rounded-lg border overflow-hidden border-dashed border-gray-900/25">
					{!!base64String ? (
						<Preview
							file64={base64String}
							cancelPreview={() => setBase64String("")}
						/>
					) : (
						<Controller
							name="image"
							control={control}
							defaultValue=""
							render={({ field }) => (
								<div className="text-center">
									<label
										htmlFor="file-upload"
										className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
										<span>Upload a file</span>
										<input
											id="file-upload"
											name="file-upload"
											type="file"
											accept="image/*"
											className="sr-only"
											// onChange={(e) => field.onChange(e.target.value)}
											onChange={handleFileChange}
										/>
									</label>
								</div>
							)}
						/>
					)}
				</div>
				{errors.image && (
					<p className="text-red-500 text-xs">Please upload an image</p>
				)}
			</div>

			<div className="mt-6 flex items-center justify-end gap-x-6">
				<button
					type="button"
					className="text-sm font-semibold leading-6 text-gray-900">
					Cancel
				</button>
				<button
					type="submit"
					className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
					Save
				</button>
			</div>
		</form>
	);
};

export default FormAdd;
