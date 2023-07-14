import { EntitySchema } from 'typeorm';

export const majorSchema = new EntitySchema({
  name: 'major',
  tableName: 'major',
  //primary key
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    //학과 이름을 저장한다.
    name: {
      type: 'varchar',
      length: 30,
    },
  },
  relations: {
    //user와 first major로 연결됨
    user: { type: 'one-to-many', target: 'User', inverseSide: 'first_major' },
    //passer와 second major로 연결됨
    passer: {
      type: 'one-to-many',
      target: 'passedUserInfo',
      inverseSide: 'second_major',
    },
    //hope와의 관계를 연결함.
    hopes: {
      type: 'one-to-many',
      target: 'hope',
      inverseSide: 'major',
    },
  },
});

//candidate와 major 간 many-to-many를 위한 table
export const hopeSchema = new EntitySchema({
  name: 'hope',
  tableName: 'hope',
  //primary key
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
  },
  relations: {
    //major와 연결해 hope_major를 저장한다.
    major: { type: 'many-to-one', target: 'major', joinColumn: { name: 'hope_major_id' } },
    //passer와 second major로 연결됨
    candidate: {
      type: 'many-to-one',
      target: 'candidateUserInfo',
      joinColumn: { name: 'candidate_id' },
    },
  },
});
