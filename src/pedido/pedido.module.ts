import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoEntity } from './pedido.entity/pedido.entity';
import { PedidoController } from './pedido.controller';

@Module({
  providers: [PedidoService],
  imports: [TypeOrmModule.forFeature([PedidoEntity])],
  controllers: [PedidoController]
})
export class PedidoModule {}
