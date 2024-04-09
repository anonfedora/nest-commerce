import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document, SchemaTypes } from "mongoose";
import { Item } from "./item.schema";

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
    @Prop({ type: Schema.Types.ObjectId, ref: "User" })
    userId: string;

    @Prop()
    items: Item[];

    @Prop()
    totalPrice: number;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
