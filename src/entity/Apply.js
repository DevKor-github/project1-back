import { EntitySchema } from 'typeorm';

// application
const applicationSchema = new EntitySchema({
  name: 'application',
  tableName: 'application',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    pnp: {
      type: 'bool',
    },
    applied_major1: {
      type: 'varchar',
    },
    applied_major2: {
      type: 'varchar',
    },
    apply_semester: {
      type: 'varchar',
      length: 4,
      // ex) 23-1
    },
    apply_times: {
      type: 'bool',
      // false면 처음, true면 재지원
      // enum?
    },
    apply_check: {
      type: 'bool',
    },
    apply_image: {
      type: 'bytea',
    },
    application_description: {
      type: 'varchar',
    },
  },
  relations: {
    candidate_id: {
      type: 'many-to-one',
      target: 'candidate',
      joinColumn: {
        name: 'candidate_id',
      },
    },
  },
});

export default applicationSchema;
