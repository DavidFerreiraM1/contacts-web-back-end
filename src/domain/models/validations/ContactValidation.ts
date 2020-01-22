import { AbstractValidation } from './AbstractValidtion';
import { IContact } from '../entities/IContact';

class ContactValidation extends AbstractValidation<IContact> {
  
  constructor (public contact: IContact) {
    super();
    this.validate(contact);
  }

  protected validate (contact: IContact) {
    const { email, phone1, phone2 } = contact ;
    this.phone(phone1, phone2);
    this.email(email);
    this.checkAndSetValidation();
  }

  private email (email?: string) {
    const regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{1,3}\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (email !== undefined && email !== null && !regexEmail.test(email)) this.setError('Email inválido!');
  }

  private phone (phone1: string, phone2?: string) {
    const regexPhone = /^\d{2}\9\d{8}$/g;
    if (phone1 === undefined || phone1 === null) {this.setError('Número de Telefone 1 é obrigatório!');}
    if (!regexPhone.test(phone1)) {this.setError('Número de Telefone 1 é inválido!');}
    if (phone2 === null) this.setError('Número de Telefone 2 não pode ser nulo!');
    if (phone2 !== undefined && regexPhone.test(phone2)) this.setError('Número de Telefone 2 é inválido!');
  }
}

export { ContactValidation };