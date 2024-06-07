import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PedidoEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    mesa: number;

    @Column()
    detalle: string;

    @Column()
    fecha: Date;

    @Column()
    estado: string;

    @Column()
    mesero: string;


}
