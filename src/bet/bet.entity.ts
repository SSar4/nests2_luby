/* eslint-disable prettier/prettier */
import { User } from 'src/users/user.entity';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Bet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int', { array: true, nullable: false })
  numbers: number[];

  @Column()
  userId: string;

  @Column()
  gameId: string;

  @ManyToOne(() => User, (user) => user.bets)
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
