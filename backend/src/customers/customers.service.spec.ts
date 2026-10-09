import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service.js';
import { CustomersService } from './customers.service.js';

describe('CustomersService', () => {
  let service: CustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CustomersService,
        {
          provide: PrismaService,
          useValue: {
            db: {
              orm: {
                public: {
                  Customer: {
                    all: async () => [],
                  },
                },
              },
            },
          },
        },
      ],
    }).compile();

    service = module.get<CustomersService>(CustomersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
