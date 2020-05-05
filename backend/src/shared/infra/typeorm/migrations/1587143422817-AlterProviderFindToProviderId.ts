import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export default class AlterProviderFindToProviderId1587143422817
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropColumn("appointments", "provider");

    await queryRunner.addColumn(
      "appointments",
      new TableColumn({
        name: "provider_id",
        type: "uuid",
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      "appointments",
      new TableForeignKey({
        name: "appointmentProvider",
        columnNames: ["provider_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("appointmentes", "appointmentProvider");

    await queryRunner.dropColumn("appointmentes", "provider_id");

    await queryRunner.addColumn(
      "appointmentes",
      new TableColumn({
        name: "provider",
        type: "varchar",
        isNullable: false,
      }),
    );
  }
}
