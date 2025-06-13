import { Body, Controller, Post } from '@nestjs/common';
import { createCheckoutDto } from './checkout.dto';
import { CheckoutService } from './checkout.service';

@Controller('api/checkout')
export class CheckoutController {

  constructor(
    private checkoutService: CheckoutService
  ) { }


  @Post()
  checkout(
    @Body() body: createCheckoutDto
  ) {
    return this.checkoutService.createCheckout(body)
  }
}
