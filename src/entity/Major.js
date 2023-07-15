import { EntitySchema, ManyToOne, OneToOne } from "typeorm";
import passerSchema from "./Passer.js";
import userSchema from "./User.js";
import hopeSchema from "./Hope.js";

const majorSchema = new EntitySchema ({
    name: 'major',
    tableName: 'major',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        name: {
            type: 'varchar',
            length: 255,
        },
        recuriting: {
            type: 'int',
        },
    },
    relations: {
        passer: {      
            type: OneToOne,
            target: () => passerSchema,
            joinColumn: {
                name: 'id',
                referencedColumnName: 'second_major_id',
            },
        },
        user: {        
            type: OneToOne,
            target: () => userSchema,
            joinColumn: {
                name: 'id',
                referencedColumnName: 'student_id',
            },
        },
        hope: {
            type: ManyToOne,
            target: () => hopeSchema,
            joinColumn: {
                name: 'id',
                referencedColumnName: 'hope_major_id',
            },
        },
    },
});

export default majorSchema;