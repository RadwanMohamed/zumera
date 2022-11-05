import { IsNotEmpty } from "class-validator";

export class CreateVoucherDto {
    @IsNotEmpty()
    code : string;
    @IsNotEmpty()
    isExpired : boolean;
    @IsNotEmpty()
    userId : number;
    @IsNotEmpty()
    used_at : Date
}