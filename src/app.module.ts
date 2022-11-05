import { Module } from '@nestjs/common';
import { VouchersModule } from './vouchers/vouchers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Voucher } from './vouchers/voucher.entity';

@Module({
  imports: [VouchersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'radwan123123$',
      database: 'zumera',
      entities: [Voucher],
      synchronize: true
    })
  ],
})
export class AppModule {}
