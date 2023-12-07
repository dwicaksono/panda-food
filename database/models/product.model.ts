import { Schema, Document, model, models } from "mongoose";

export interface IProduct extends Document {
	name: String;
	description: String;
	qty: number;
	image: String;
	barcode: string;
	createdAt: Date;
}

const ProductSchema = new Schema({
	name: { type: String, require: true },
	description: { type: String, require: true },
	qty: { type: Number, default: 0, require: true },
	image: { type: String, require: true },
	barcode: { type: String },
	createdAt: { type: Date, default: Date.now },
});

const ProductModel = models.Product || model("Product", ProductSchema);
