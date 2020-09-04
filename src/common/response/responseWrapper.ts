export class ResponseWrapper {
  message?: string;
  data: any;
  constructor(data: any, message?: string) {
    this.message = message;
    this.data = data;
  }
}
