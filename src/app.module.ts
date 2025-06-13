import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { CheckoutModule } from './checkout/checkout.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CommonModule, CheckoutModule, AuthModule, UserModule],
})
export class AppModule { }
