import { Router } from 'express';
import ContactController from '../controllers/Contact';

const contactRoutes = Router();

contactRoutes.get('/', ContactController.getList);
contactRoutes.get('/:id', ContactController.getById);
contactRoutes.post('/', ContactController.create);
contactRoutes.put('/:id', ContactController.updateContact);
contactRoutes.delete('/:id', ContactController.removeContact);

export default contactRoutes;
