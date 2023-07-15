import { EntitySchema, OneToMany } from "typeorm";
import majorSchema from "./Major.js";
import candidateSchema from "./Candidate.js";

const hopeSchema = new EntitySchema ({

    name: 'hope',
    tableName: 'hope',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        candidate_id: {
            type: 'int',
        },
        hope_major_id: {
            type: 'int',
        },
    },
    relations: {       
        major: {
            type: OneToMany,
            target: () => majorSchema,
            joinColumn: {
                name: 'hope_major_id',
                referencedColumnName: 'id',
            }, 
        },
        candidate: {
            type: OneToMany,
            target: () => candidateSchema,
            joinColumn: {
                name: 'candidate_id',
                referencedColumnName: 'id',
            },
        },
    },
});

export default hopeSchema;