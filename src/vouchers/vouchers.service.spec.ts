import {Test} from "@nestjs/testing";
import { Voucher } from "./voucher.entity";
import { VouchersService } from "./vouchers.service";
const mockVoucherRepositry = ()=>({
  getVouchers : jest.fn(),
  getVoucherById : jest.fn()
});
describe('VouchersService',()=>{
    let vouchersService;
    let voucherRepository;

    beforeEach(async () => {
      const module = await Test.createTestingModule({
        providers : [VouchersService, {provide:voucherRepository,useFactory:mockVoucherRepositry}]
      }).compile();
      vouchersService = await module.get<VouchersService>(VouchersService);
      voucherRepository = await module.get<Voucher>(voucherRepository);
    });
    describe('getVouchers', ()=>{
      it('gets all voucher from repository',async ()=>{
        voucherRepository.getVouchers.mockResolvedValue("someValue");
        expect(voucherRepository.getVouchers).not.toHaveBeenCalled();
        const result =  await vouchersService.getVouchers();
        expect(voucherRepository.getVouchers).not.toHaveBeenCalled();
        expect(result).toEqual('someValue');
      })
    });
    describe('getVoucherById', ()=>{
        it('calls voucher by id',async ()=>{
          const mock = {code:'test',isExpired:false,userId:null,used_at:null};
          voucherRepository.getVoucherById.mockResolvedValue(mock);
          const result = await vouchersService.getVoucherById(1);
        })
    });
})