import { Module } from '@nestjs/common';
import { VouchersModule } from './vouchers/vouchers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Voucher } from './vouchers/voucher.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [VouchersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('MYSQL_HOST'),
        port: +configService.get('MYSQL_PORT'),
        username: configService.get('MYSQL_USER'),
        password: configService.get('MYSQL_ROOT_PASSWORD'),
        database: configService.get('MYSQL_DB_NAME'),
        entities: [Voucher],
        synchronize: true,
      }),
    })
   
  ],
})
export class AppModule {}
