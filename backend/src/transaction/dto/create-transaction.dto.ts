export class CreateTransactionDto {
    type: number;
    date: Date;
    product: string;
    value: number;
    seller: string;
}