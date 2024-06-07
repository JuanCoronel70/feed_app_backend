import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoEntity } from './pedido.entity/pedido.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class PedidoService {

    constructor(
        @InjectRepository(PedidoEntity)
        private readonly pedidoRepository: Repository<PedidoEntity>
    ){}

    async findAll():  Promise<PedidoEntity[]>{
        return await this.pedidoRepository.find();
    }

    async findOne(id: string): Promise<PedidoEntity> {
        const pedido: PedidoEntity = await this.pedidoRepository.findOne({where: {id}});
        if (!pedido)
            throw new BusinessLogicException("El pedido con el id dado no fue encontrado", BusinessError.NOT_FOUND);

        return pedido;
    }

    async create(pedido: PedidoEntity): Promise<PedidoEntity> {
        return await this.pedidoRepository.save(pedido);
    }

    async delete(id: string) {
        const pedido: PedidoEntity = await this.pedidoRepository.findOne({where: {id}});
        if (!pedido)
            throw new BusinessLogicException("El pedido con el id dado no fue encontrado", BusinessError.NOT_FOUND);

        return await this.pedidoRepository.remove(pedido);
    }

    async update(id: string, pedido: PedidoEntity): Promise<PedidoEntity> {
        const persistedPedido: PedidoEntity = await this.pedidoRepository.findOne({where: {id}});
        if (!persistedPedido)
            throw new BusinessLogicException("El pedido con el id dado no fue encontrado", BusinessError.NOT_FOUND);

        pedido.id = id;

        return await this.pedidoRepository.save(pedido);
    }
}
