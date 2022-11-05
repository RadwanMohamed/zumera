import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

@Entity()
export class Voucher extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    code : string;
    @Column()
    isExpired : boolean;
    @Column({nullable:true})
    userId : number;
    @Column()
    used_at : Date;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
}