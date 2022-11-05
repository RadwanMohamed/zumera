import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVoucherDto } from './dto/create-voucher-dto';
import { Voucher } from './voucher.model';
import { VoucherRepository } from './voucher.respositry';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VouchersService {
    constructor(
        @InjectRepository(VoucherRepository)
        private voucherRepository : VoucherRepository
    ){}
    getAllVouchers(){
        return this.voucherRepository.find();
    }
    createVoucher(createVoucherDto : CreateVoucherDto){
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
        if (!voucher)
            throw new NotFoundException("voucher not found");
        Object.assign(voucher, attrs);
        return this.voucherRepository.save(voucher);
    }
    async remove(id: number) {
        const voucher = await this.getVoucherById(id);
        if (!voucher)
            throw new NotFoundException("voucher not found");
        return this.voucherRepository.remove(voucher);
    }
}
