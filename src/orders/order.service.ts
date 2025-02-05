import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './create-orders.dto';
import { UpdateOrderDto } from './update-orders.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  // Crear una nueva orden
  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = this.ordersRepository.create(createOrderDto);
    return await this.ordersRepository.save(order);
  }

  // Obtener todas las órdenes
  async findAll(): Promise<Order[]> {
    return await this.ordersRepository.find();
  }

  // Obtener una orden por su ID
  async findOne(id: number): Promise<Order> {
    return await this.ordersRepository.findOne({ where: { id } });
  }

  // Actualizar una orden
  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    await this.ordersRepository.update(id, updateOrderDto);
    return this.findOne(id);
  }

  // Eliminar una orden
  async remove(id: number): Promise<void> {
    await this.ordersRepository.delete(id);
  }
}