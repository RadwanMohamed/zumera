import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class UseVoucherDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    userId : number;

}