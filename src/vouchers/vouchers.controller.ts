import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { get } from 'http';
import { CreateVoucherDto } from './dto/create-voucher-dto';
import { UpdateVoucherDto } from './dto/update-voucher-dto';
import { Voucher } from './voucher.model';
import { VouchersService } from './vouchers.service';

@Controller('vouchers')
export class VouchersController {
    constructor(private vouchersService : VouchersService ){}
    @Get()
    getAllVouchers() {
        return this.vouchersService.getAllVouchers();
    }
    @Post()
    createVoucher( @Body() createVoucherDto : CreateVoucherDto){
        return this.vouchersService.createVoucher(createVoucherDto);
    }

    @Get("/:id")
    findVoucher(@Param('id') id : string){
        return this.vouchersService.getVoucherById(parseInt(id));
    }

    @Patch('/:id')
    updateVoucher(@Param('id') id : string, @Body() body : UpdateVoucherDto)
    {
        return this.vouchersService.update(parseInt(id),body);
    }

    @Delete("/:id")
    removeVoucher(@Param('id') id : string){
        return this.vouchersService.remove(parseInt(id));
    }
}

