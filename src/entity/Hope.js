import { EntitySchema } from 'typeorm';

// hope
const hopeSchema = new EntitySchema({
  name: 'hope',
  tableName: 'hope',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
  },
  relations: {
    candidate_id: {
      // many hope per one candidate?
      type: 'many-to-one',
      target: 'candidate',
      joinColumn: {
        name: 'candidate_id',
      },
    },
    hope_major_id: {
      // many hope per one major?
      type: 'many-to-one',
      target: 'major',
      joinColumn: {
        name: 'hope_major_id',
      },
    },
  },
});

export default hopeSchema;
