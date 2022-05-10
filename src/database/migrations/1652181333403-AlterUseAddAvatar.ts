import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class AlterUseAddAvatar1652181333403 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                  name: "avatar",
                  type: "varchar",
                  isNullable: true,
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropColumn("users","avatar")
    }

}
