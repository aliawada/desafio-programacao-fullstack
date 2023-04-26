import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTransactionsTable1682488841710 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            create table transactions (
                id bigserial primary key,
                type int not null,
                date timestamp not null,
                product text not null,
                value integer not null,
                seller text not null 
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`drop table transactions`);
    }

}
