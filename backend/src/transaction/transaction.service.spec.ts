import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { TransactionService } from './transaction.service';

describe('TodoService', () => {
  let service: TransactionService;
  let mockTransaction: Transaction = new Transaction();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionService, {
        provide: getRepositoryToken(Transaction),
        useValue: {
          save: jest.fn().mockResolvedValue(mockTransaction),
          find: jest.fn().mockResolvedValue([mockTransaction])
        }
      }],
    }).compile();

    service = module.get<TransactionService>(TransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return array of todos', async () => {
      const todos = await service.findAll();
      expect(todos).toStrictEqual([mockTransaction]);
    })
  })
});