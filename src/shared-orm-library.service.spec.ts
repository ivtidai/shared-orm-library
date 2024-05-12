import { Test, TestingModule } from '@nestjs/testing';
import { SharedOrmLibraryService } from './shared-orm-library.service';

describe('SharedOrmLibraryService', () => {
  let service: SharedOrmLibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharedOrmLibraryService],
    }).compile();

    service = module.get<SharedOrmLibraryService>(SharedOrmLibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
