import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export default class PutImageInCourse1603904530157 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
    	await queryRunner.addColumn('courses', new TableColumn({
    		name: 'image',
    		type: 'varchar'
    	}))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    	await queryRunner.dropColumn('courses', 'image');
    }

}
