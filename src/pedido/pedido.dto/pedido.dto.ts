import {IsDate, IsNotEmpty, IsNumber, IsString, IsUrl} from 'class-validator';

export class PedidoDto {

    @IsNumber()
    @IsNotEmpty()
    readonly mesa: number;

    @IsString()
    @IsNotEmpty()
    readonly detalle: string;

    @IsDate()
    @IsNotEmpty()
    readonly fecha: Date;

    @IsString()
    @IsNotEmpty()
    readonly estado: string;

    @IsString()
    @IsNotEmpty()
    readonly mesero: string;


}
