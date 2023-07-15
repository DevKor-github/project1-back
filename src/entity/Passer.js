import { EntitySchema, OneToOne } from 'typeorm';
import userSchema from './User.js';
import majorSchema from './Major.js';

const passerSchema = new EntitySchema ({
    name: 'passer',
	tableName: 'passer',
	columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        user_id: {
            type: 'int', 
        },
        second_major_id: {
            type: 'int',
        },
        pass_semester: {
            type: 'int',
        },
        pass_gpa: {
            type: 'int',
        },
        wanna_sell: {
            type: 'int',
        },
        pass_check: {
            type: 'int',
        },
        pass_image: {
            type: 'long',
        },
        pass_description: {
            type: 'varchar',
            nullable: true,
        },
    },        
    relations: {
        user: {         
            type: OneToOne,
            target: () => userSchema,
            joinColumn: {
                name: 'user_id',
                referencedColumnName: 'passer_id',
            },
        },
        major: {       
            type: OneToOne,
            target: () => majorSchema,
            joinColumn: {
                name: 'second_major_id',
                referencedColumnName: 'id',
            },
        },
    },
});

export default passerSchema;