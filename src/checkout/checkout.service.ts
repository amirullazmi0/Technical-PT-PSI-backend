import { Injectable } from '@nestjs/common';
import { createCheckoutDto, createCheckoutResponseDto } from './checkout.dto';
import { WebResponse } from 'src/dto/Response';

@Injectable()
export class CheckoutService {
  async createCheckout(
    body: createCheckoutDto
  ): Promise<WebResponse<createCheckoutResponseDto>> {
    let totalPrice = body.price * (!body.qty ? 1 : body.qty);
    let point = 0
    if (body.voucher) {
      const discount = (totalPrice * body.voucher)
      totalPrice = totalPrice - discount;
      point = discount * 0.02
    }
    return {
      success: true,
      message: 'create checkout success',
      data: {
        totalPrice: totalPrice,
        point: point
      }
    }
  }
}
