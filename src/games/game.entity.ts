/* eslint-disable prettier/prettier */
import {
  BaseEntity,
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  //JoinColumn,
  //OneToMany,
} from 'typeorm';
//import { User } from '../users/user.entity';

@Entity()
@Unique(['type'])
export class Gamer extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  type: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  description: string;

  @Column({ nullable: false, type: 'integer' })
  range: number;

  @Column({ nullable: false, type: 'decimal' })
  price: number;

  @Column({ nullable: false, type: 'integer' })
  max_number: number;

  //@OneToMany(() => User, (user) => user.id, { cascade: true })
  //@JoinColumn()
  //admin: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
