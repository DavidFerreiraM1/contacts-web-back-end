import { Request, Response } from 'express';
import { IContact } from '../../domain/models/entities/IContact';
import ContactService from '../../domain/services/Contact';
import ApiResponse from '../utils/response/ApiResponse';

class ContactController {
  create (req: Request, res: Response): Response {
    const model: IContact = req.body;
    const result = ContactService.createContact(model);
    return ApiResponse.sendResponse(res, result);
  }

  updateContact (req: Request, res: Response): Response {
    const { body, params } = req;
    const result = ContactService.updateContact(params.id, body);
    return ApiResponse.sendResponse(res, result);
  };

  getList (req: Request, res: Response): Response {
    const result = ContactService.getListContact();
    return ApiResponse.sendResponse(res, result);
  }

  getById (req: Request, res: Response): Response {
    const { id } = req.params;
    const result = ContactService.getById(id);
    return ApiResponse.sendResponse(res, result);
  };

  removeContact (req: Request, res: Response): Response {
    const { id } = req.params;
    const result = ContactService.removeContact(id);
    return ApiResponse.sendResponse(res, result);
  };
}

export default new ContactController();
