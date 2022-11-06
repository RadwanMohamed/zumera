import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class UpdateVoucherDto {
    @IsString()
    @ApiProperty()
    code : string;
    @IsBoolean()
    @ApiProperty()
    isExpired : boolean;
}