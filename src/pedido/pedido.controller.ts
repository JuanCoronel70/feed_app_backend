import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors/business-errors.interceptor';
import { PedidoDto } from './pedido.dto/pedido.dto';
import { PedidoEntity } from './pedido.entity/pedido.entity';
import { plainToInstance } from 'class-transformer';

@UseInterceptors(BusinessErrorsInterceptor)
@Controller('pedidos')
export class PedidoController {

    constructor(private readonly pedidoService: PedidoService){}

    @Get()
    async findAll() {
        return await this.pedidoService.findAll();
    }

    @Get(':pedidoId')
    async findOne(@Param('pedidoId') pedidoId: string) {
        return await this.pedidoService.findOne(pedidoId);
    }

    @Post()
    async create(@Body() pedidoDto: PedidoDto) {
        const pedido: PedidoEntity = plainToInstance(PedidoEntity, pedidoDto);
        return await this.pedidoService.create(pedido);
    }

    @Put(':pedidoId')
    async update(@Param('pedidoId') pedidoId: string, @Body() pedidoDto: PedidoDto) {
        const pedido: PedidoEntity = plainToInstance(PedidoEntity, pedidoDto);
        return await this.pedidoService.update(pedidoId, pedido)
    }

    @Delete(':pedidoId')
    @HttpCode(204)
    async delete(@Param('pedidoId') pedidoId: string) {
        return await this.pedidoService.delete(pedidoId);
    }

}
