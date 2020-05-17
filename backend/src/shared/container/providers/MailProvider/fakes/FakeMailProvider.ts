import IMailProvider from "../models/IMailProvider";
import ISendMailDTO from "../dtos/ISendMailDTO";

export default class FakeMailProvider implements IMailProvider {
  private messagens: ISendMailDTO[] = [];

  public async sendMail(message: ISendMailDTO): Promise<void> {
    this.messagens.push(message);
  }
}
