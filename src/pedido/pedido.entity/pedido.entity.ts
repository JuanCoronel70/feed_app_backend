import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class PedidoEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    mesa: number;

    @Column()
    detalle: string;

    @Column()
    estado: string;

    @Column()
    mesero: string;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;


}
