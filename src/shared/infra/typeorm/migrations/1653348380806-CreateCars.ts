import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCars1653348380806 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(

				new Table({
					name: "cars",
					columns: [
						{
							name: "id",
							type: "uuid",
							isPrimary: true,
						},
						{
							name: "name",
							type: "varchar",
						},
						{
							name: "discricao",
							type: "varchar",
							isUnique:true
						},
						{
							name: "numero_licenca",
							type: "varchar",
						},
						{
							name: "daily_rate",
							type: "varchar",
						},
						{
							name: "available",
							type: "boolean",
							default:true
						},
						{
							name: "lecense_placa",
							type: "varchar",
						},
						{
							name: "id_category",
							type: "uuid",
							isNullable:true
						},
						{
							name: "create_at",
							type: "timestamp",
							default: "now()",
						},
					],
					foreignKeys:[
						{
							name:"FXid_category",
							referencedTableName:"categories",
							referencedColumnNames:["id"],
							columnNames:["id_category"],
							onDelete:"SET NULL",
							onUpdate:"SET NULL"
						}
					]
				})
			);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
