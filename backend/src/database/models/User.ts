import { Entity, ObjectIdColumn, Column, BeforeInsert, BeforeUpdate, ObjectID } from 'typeorm';
import bcrypt from 'bcrypt';

@Entity()
class User {

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(){
    this.password = bcrypt.hashSync(this.password, 8);
  }

  constructor( name: string, email: string, password: string ){
    this.name = name;
    this.email = email;
    this.password = password;
  };
};

export { User }