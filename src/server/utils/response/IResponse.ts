export interface IResponse {
  statusCode: number;
  success: boolean;
  msg: string[];
  data: object | object[];
}