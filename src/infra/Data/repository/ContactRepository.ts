/* eslint-disable @typescript-eslint/no-explicit-any */
import { IContact } from './../../../domain/models/entities/IContact';
import SchemasManagement from '../dataFiles/SchemasManagement';
import { GuidGenerator } from '../utils/GuidGenerator';

export class ContactRepository {
  private schemasManagement = new SchemasManagement();

  create (body: IContact): any {
    const newContact: IContact = {
      id: GuidGenerator(),
      active: true,
      ...body
    };
    const result = this.schemasManagement.setData('contacts', newContact);
    return result;
  }

  getList (): any {
    const list = this.schemasManagement.getData('contacts');
    if (list.length === 0) return list;
    const foundList = list.filter((contact: { active: boolean; }) => contact.active === true);
    return foundList.sort((a: { name: number; }, b: { name: number; }) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }

  updateContact (id: string, body: IContact): any {
    const list = this.getList();
    let keyContact = -1;
    list.map((contact: { id: string; }, index: number) => {
      if (contact.id === id) keyContact = index;
    });
    if (keyContact === -1) return null;
    const updatedContact: IContact = {
      id: body.id,
      ...list[keyContact],
      ...body
    };
    list[keyContact] = updatedContact;
    this.schemasManagement.updateData('contacts', list);
    return list[keyContact];
  }

  getById (id: string): any {
    const list = this.schemasManagement.getData('contacts');
    const [foundContact] = list.filter((contact: { id: string; }) => contact.id === id);
    return foundContact;
  }

  removeContact (id: string): any {
    const list = this.schemasManagement.getData('contacts');
    let keyContact = -1;
    list.map((contact: { id: string; }, index: number) => {
      if (contact.id === id) keyContact = index;
    });
    if (keyContact === -1) return null;
    list[keyContact].active = false;
    this.schemasManagement.updateData('contacts', list);
    return list[keyContact];
  }
};
