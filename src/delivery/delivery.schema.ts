import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Delivery {
  @Prop({ required: true })
  mealId: string; // Link to Diet Chart

  @Prop({ required: true })
  assignedTo: string; // Delivery Personnel Name

  @Prop({ required: true })
  roomNumber: string;

  @Prop({ required: true })
  deliveryStatus: string; // "Pending", "Delivered"

  @Prop({ required: true })
  deliveredAt: Date;
}

export type DeliveryDocument = Delivery & Document;
export const DeliverySchema = SchemaFactory.createForClass(Delivery);