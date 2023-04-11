import mongoose, { Schema } from "mongoose";

// export interface IProduct {
//   id: string;
//   description: string;
//   img: string;
//   price: number;
//   quantity: number;
// }

export const ProductSchema = new Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  img: { type: String, require: true },
  price: { type: Number, require: true },
  quantity: { type: Number, require: true },
  createdAt: {
    type: Date,
    default: Intl.DateTimeFormat("pt-BR").format(new Date()),
  },
});

export const Product = mongoose.model("Product", ProductSchema);
