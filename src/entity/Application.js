import { EntitySchema, ManyToOne } from "typeorm";
import candidateSchema from "./Candidate.js";

const applicationSchema = new EntitySchema ({

    name: 'application',
    tableName: 'application',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        candidate_id: {
            type: 'int',
        },
        pnp: {
            type: 'varchar',
            length: 255,
        },
        applied_major1: {
            type: 'varchar',
            length: 255,
        },
        applied_major2: {
            type: 'varchar',
            length: 255,
        },
        apply_semester: {
            type: 'int',
        },
        apply_times: {
            type: 'int',
        },
        apply_check: {
            type: 'int',
        },
        apply_image: {
            type: 'long',
        },
        application_description: {
            type: 'varchar',
            length: 255,
        },
     },
     relations: {
        candidate: {
            type: ManyToOne,
            target: () => candidateSchema,
            joinColumn: {
                name: 'id',
                referencedColumnName: 'candidate_id',
            },
        },
     },
});

export default applicationSchema;