import { IEntity } from '../entities/IEntity';

/**
 * Classe responsável para toda abstração comum entre entitdades
 */
export abstract class AbstractValidation<TEntity extends IEntity> {
  private _isValid: boolean;
  private _errors: string[];

  constructor () {
    this._isValid = true;
    this._errors = [];
  }

  get errors () {
    return this._errors;
  }

  get isValid () {
    return this._isValid;
  }

  protected setError (error: string) {
    this._errors.push(error);
  }
  
  protected abstract validate (entity: TEntity): void;
  protected checkAndSetValidation (): void {
    if (this._errors.length > 0) this._isValid = false;
  }
}