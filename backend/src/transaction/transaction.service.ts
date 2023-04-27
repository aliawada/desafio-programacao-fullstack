import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) { }

  create(createTransactionDto: CreateTransactionDto) {
    return this.transactionRepository.save(createTransactionDto)
  }

  findAll() {
    return this.transactionRepository.find();
  }

  findOne(id: number) {
    return this.transactionRepository.findOneBy({ id });
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    const transaction = await this.transactionRepository.findOneBy({ id });
    if (!transaction) {
      throw new NotFoundException("to do not found");
    }
    transaction.type = updateTransactionDto.type;
    transaction.date = updateTransactionDto.date;
    transaction.product = updateTransactionDto.product;
    transaction.value = updateTransactionDto.value;
    transaction.seller = updateTransactionDto.seller;
    return this.transactionRepository.save(transaction);
  }

  remove(id: number) {
    this.transactionRepository.delete(id);
  }
}