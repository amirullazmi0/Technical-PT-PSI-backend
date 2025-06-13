import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { CheckoutModule } from './checkout/checkout.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CommonModule, CheckoutModule, AuthModule],
})
export class AppModule { }
