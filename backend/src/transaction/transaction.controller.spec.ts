import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { Transaction } from './entities/transaction.entity';

describe('TransactionController', () => {
  let controller: TransactionController;
  let mockTransaction: Transaction = new Transaction();
  let transactionService: TransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionController],
      providers: [TransactionService, {
        provide: getRepositoryToken(Transaction),
        useValue: {
          save: jest.fn().mockResolvedValue(mockTransaction),
          find: jest.fn().mockResolvedValue([mockTransaction])
        }
      }],
    }).compile();

    controller = module.get<TransactionController>(TransactionController);
    transactionService = module.get<TransactionService>(TransactionService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return array of transactions', async () => {
      const result = [
        {
          "id": 1,
          "type": 1,
          "date": new Date("2022-01-15T19:20:30-03:00"),
          "product": "CURSO DE BEM-ESTAR",
          "value": 0o12750,
          "seller": "JOSE CARLOS"
        }
      ];
      jest.spyOn(transactionService, 'findAll').mockImplementation(() => Promise.resolve(result));
      expect(await controller.findAll()).toBe(result);
    })
  })
});