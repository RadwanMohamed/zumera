import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVoucherDto } from './dto/create-voucher-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Voucher } from './voucher.entity';
import { Repository } from 'typeorm';
import { UseVoucherDto } from './dto/use-voucher-dto';

@Injectable()
export class VouchersService {


    constructor(@InjectRepository(Voucher) private voucherRepository: Repository<Voucher>) { }

    getAllVouchers(){
        return this.voucherRepository.find();
    }
    createVoucher(@Body() createVoucherDto : CreateVoucherDto){
        const voucher = this.voucherRepository.create(createVoucherDto);
        return this.voucherRepository.save(voucher);
    }
    async getVoucherById(id:number){
        const voucher =  await this.voucherRepository.findOneById(id);
        if(!voucher)
            throw new NotFoundException("voucher not found");
        return voucher;
    }
    async update(id: number, attrs: Partial<Voucher>) {
        const voucher = await this.getVoucherById(id);
        Object.assign(voucher, attrs);
        return this.voucherRepository.save(voucher);
    }
    async remove(id: number) {
        const voucher = await this.getVoucherById(id);
        return this.voucherRepository.remove(voucher);
    }
    async useVoucher(useVoucherDto:UseVoucherDto,id : number){
        const voucher = await this.getVoucherById(id);
        if(voucher && voucher.isExpired === false){
            voucher.isExpired = true;
            voucher.userId = useVoucherDto.userId;
            voucher.used_at = new Date();
        }
        return this.voucherRepository.save(voucher);
    }

}
