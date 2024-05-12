import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Settings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isNotificationEnabled: boolean;

  @Column()
  isNewDashboardEnabled: boolean;

  @Column()
  timezone: string;

  // Define the one-to-one relationship with User entity
  @OneToOne(() => User, user => user.settings)
  @JoinColumn()
  user: User;
}
