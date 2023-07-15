/*
import { EntitySchema, OneToOne } from "typeorm";
import postSchema from "./Post.js";

const categorySchema = new EntitySchema ({
    name: 'category',
    tableName: 'category',
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
    },
    relations: {
        post: {         
            type: OneToOne,
            target: () => postSchema,
            joinColumn: {
                name: 'category_id',
                referencedColumnName: 'id',
            },
        },
    },
});

export default categorySchema;

*/