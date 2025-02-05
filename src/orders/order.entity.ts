import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity('orders') 
export class Order{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId:number;

    @Column()
    description: string;

    @Column()
    creationDate: string;

    @ManyToOne(() => User, (user) => user.orders, { onDelete: 'CASCADE' })
    user: User;
}
