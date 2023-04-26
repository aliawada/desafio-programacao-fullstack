import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("transaction")
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    type: number

    @Column()
    date: Date

    @Column()
    product: string

    @Column()
    value: number

    @Column()
    seller: string
}
