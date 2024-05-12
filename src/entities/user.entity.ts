import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Settings } from './settings.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  firstName: string;

  @Column({ type: 'varchar', length: 30 })
  lastName: string;

  @Column({ type: 'varchar', length: 40 })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  // Define the one-to-one relationship with Settings entity
  @OneToOne(() => Settings, settings => settings.user)
  settings: Settings;
}
