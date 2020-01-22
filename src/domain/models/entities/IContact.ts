import { IEntity } from './IEntity';

export interface IContact extends IEntity {
  id?: string;
  name: string;
  nickname?: string;
  email?: string;
  phone1: string;
  phone2?: string;
}
