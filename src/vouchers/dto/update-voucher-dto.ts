import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateVoucherDto {
    @IsString()
    code : string;
    @IsBoolean()
    isExpired : boolean;
    @IsNumber()
    userId : number;
    @IsDateString()
    used_at : Date
}