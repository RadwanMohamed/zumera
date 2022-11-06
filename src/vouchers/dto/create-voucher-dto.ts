import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateVoucherDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    code : string;
    @ApiProperty()
    @IsNotEmpty()
    isExpired : boolean;
}