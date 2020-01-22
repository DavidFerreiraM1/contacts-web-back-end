import { ContactValidation } from '../models/validations/ContactValidation';
import { IContact } from '../models/entities/IContact';
import { IResponse } from '../../server/utils/response/IResponse';
import ApiResponse from '../../server/utils/response/ApiResponse';
import { ContactRepository } from '../../infra/Data/repository/ContactRepository';

class ContactService {
  private contactRepository = new ContactRepository();

  createContact (contact: IContact): IResponse {
    const { isValid, errors } = new ContactValidation(contact);
    if (!isValid) {
      const result = ApiResponse.setResponse(400, false, null, errors);
      return result;
    }
    const newContact = this.contactRepository.create(contact);
    const result = ApiResponse.setResponse(201, true, newContact, ['Contato criado com sucesso!']);
    return result;
  }

  updateContact (id: string, body: IContact): IResponse {
    const updatedContact = this.contactRepository.updateContact(id, body);
    if (updatedContact === null) {
      const result = ApiResponse.setResponse(400, false, null, ['Contato inválido!']);
      return result;
    }
    const result = ApiResponse.setResponse(200, true, updatedContact, ['Contato atualizado com sucesso!']);
    return result;
  };

  getListContact (): IResponse {
    const result = this.contactRepository.getList();
    return ApiResponse.setResponse(200, true, result, []);
  }

  getById (id: string): IResponse {
    const foundContact = this.contactRepository.getById(id);
    if (foundContact === null) {
      const result = ApiResponse.setResponse(400, false, null, ['Contato não encontrado!']);
      return result;
    }
    const result = ApiResponse.setResponse(200, true, foundContact, []);
    return result;
  }

  removeContact (id: string): IResponse {
    const result = this.contactRepository.removeContact(id);
    if (result === null) return ApiResponse.setResponse(400, false, null, ['Contato inválido!']);
    return ApiResponse.setResponse(200, true, result, ['Contato removido com sucesso!']);
  }
}

export default new ContactService();
