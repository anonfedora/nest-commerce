import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, SchemaTypes } from "mongoose";

export type ItemDocument = Item & Document;

@Schema()
export class Item {
    @Prop({ type: Schema.Types.ObjectId, ref: "Product" })
    productId: string;

    @Prop()
    name: string;

    @Prop()
    price: number;

    @Prop()
    quantity: number;

    @Prop()
    subTotalPrice: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
