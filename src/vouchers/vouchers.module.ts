import { Module } from '@nestjs/common';
import { VouchersController } from './vouchers.controller';
import { VouchersService } from './vouchers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoucherRepository } from './voucher.respositry';

@Module({
  imports :[
    TypeOrmModule.forFeature([VoucherRepository]),
  ],
  controllers: [VouchersController],
  providers: [VouchersService]
})
export class VouchersModule {}
