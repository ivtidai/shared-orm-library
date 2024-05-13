import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Settings, User } from './entities';

@Module({})
export class SharedOrmLibraryModule {
  static forRoot(options?: TypeOrmModuleOptions): DynamicModule {
    if(!options) {
      options = {
        type: process.env.DATABASE_DRIVER as  'mysql' | 'postgres',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        synchronize: true,
        entities: ['dist/**/*.entity{ .ts,.js}'],
      }
    }
    return {
      module: SharedOrmLibraryModule,
      imports: [TypeOrmModule.forRoot(options)],
      exports: [SharedOrmLibraryModule],
    };
  }
}
