import {IsDate, IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class PedidoDto {

    @IsNumber()
    @IsNotEmpty()
    readonly mesa: number;

    @IsString()
    @IsNotEmpty()
    readonly detalle: string;

    @IsString()
    @IsNotEmpty()
    readonly estado: string;

    @IsString()
    @IsNotEmpty()
    readonly mesero: string;


}
