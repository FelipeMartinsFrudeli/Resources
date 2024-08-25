import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

const { nanoid } = require("nanoid");

@Entity('categories')
export class Category {
  
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @BeforeInsert()
  generateId() {
    this.id = `category_${nanoid()}`;
  }
}