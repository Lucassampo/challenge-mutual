import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { OrdersService } from './order.service';
import { CreateOrderDto } from './create-orders.dto';
import { UpdateOrderDto } from './update-orders.dto';
import { Order } from './order.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

   // Crear una nueva orden
   @Post()
   create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
     return this.ordersService.create(createOrderDto);
 }

   // Listar todas las órdenes
   @Get()
    findAll(): Promise<Order[]> {
     return this.ordersService.findAll();
 }

   // Obtener una orden por su ID
   @Get(':id')
     findOne(@Param('id') id: string): Promise<Order> {
     return this.ordersService.findOne(+id);
 }

  // Actualizar una orden
     @Put(':id')
     update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto): Promise<Order> {
     return this.ordersService.update(+id, updateOrderDto);
 }

   // Eliminar una orden
   @Delete(':id')
     remove(@Param('id') id: string): Promise<void> {
     return this.ordersService.remove(+id);
   }
}