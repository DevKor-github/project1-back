import { EntitySchema, OneToOne } from "typeorm";
import userSchema from "./User.js";
import hopeSchema from "./Hope.js";

const candidateSchema = new EntitySchema ({
    name: 'candidate',
    tableName: 'candidate',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        user_id: {
            type: 'int',
        },
        gpa: {
            type: 'int',
        },
    },
    relations: {
        user: {
            type: OneToOne,
            target: () => userSchema,
            joinColumn: {
                name: 'user_id',
                referencedColumnName: 'candidate_id',
            },
        },
        hope: {
            type: OneToOne,
            target: () => hopeSchema,
            joinColumn: {
                name: 'id',
                referencedColumnName: 'candidate_id',
            },
        },
    },
});

export default candidateSchema;