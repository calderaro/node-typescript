export default class CustomError extends Error {
  name = "";
  status = 0;
  constructor(message: string, name: string, status: number) {
    super(message);
    this.name = name;
    this.status = status;
  }
}
