import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Order } from 'src/orders/order.entity'
import { Role } from 'src/roles/role.entity';

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  phone: string;



  @Column({name:"role_id"})
  role_id: number;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: "role_id" }) // Esto crea la columna roleId
  role: Role;
}