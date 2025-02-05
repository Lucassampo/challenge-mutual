import { User } from 'src/user/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // admin, empleado, auditor

   @OneToMany(() => User, (user) => user.role) // Relación inversa con User
   users: User[];
}