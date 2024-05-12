import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Module({})
export class SharedOrmLibraryModule {
  static forRoot(options?: TypeOrmModuleOptions): DynamicModule {
    if(!options) {
      options = {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'myaccount',
        password: 'test@1234',
        database: 'my-account',
        synchronize: true,
      }
    }
    return {
      module: SharedOrmLibraryModule,
      imports: [TypeOrmModule.forRoot(options)],
      exports: [SharedOrmLibraryModule],
    };
  }
}
