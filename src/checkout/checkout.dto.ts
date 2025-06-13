import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class createCheckoutDto {
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsOptional()
  qty: number;

  @IsNumber()
  @IsOptional()
  voucher: number;
}

export interface createCheckoutResponseDto {
  totalPrice: number,
  point: number
}