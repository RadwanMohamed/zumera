export interface Voucher {
    id : number,
    code : string,
    isExpired : boolean,
    userId : number,
    used_at : Date
}