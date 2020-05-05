import Appointment from "../infra/typeorm/entities/Appointment";

export default interface IAppointmentsRepository {
  findByDate(date: Date): Promise<Appointment | undefined>;
}
