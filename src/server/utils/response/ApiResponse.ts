import { Response } from 'express';

import { IResponse } from './IResponse';

class ApiResponse {
  setResponse (statusCode: number, success: boolean, data: any | null, msg: string[]) {
    const result: IResponse = {
      statusCode: statusCode,
      success: success,
      data: data,
      msg: msg
    };
    return result;
  }

  sendResponse (res: Response, result: IResponse): Response {
    const { statusCode, success, data, msg } = result;
    const response = {
      success,
      data,
      msg
    };
    return res.status(statusCode).send(response);
  }
}

export default new ApiResponse();