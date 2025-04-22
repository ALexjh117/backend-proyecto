

import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Usuario } from './Usuario';
import { Actividad } from './Actividad';

@Table({ tableName: 'Asistencia' })
export class Asistencia extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  AsiId!: number;

  @Column({ type: DataType.DATE, allowNull: false })
  AsiFecha!: Date;

  @Column({ type: DataType.INTEGER, allowNull: true })
  AsiHorasAsistidas!: number;

  @Column({ type: DataType.STRING(100), allowNull: false })
  QREntrada!: string;

  @Column({ type: DataType.STRING(100), allowNull: false })
  QRSalida!: string;

  @ForeignKey(() => Usuario)
  @Column({ type: DataType.INTEGER, allowNull: false })
  IdUsuario!: number;

  @ForeignKey(() => Actividad)
  @Column({ type: DataType.INTEGER, allowNull: false })
  IdActividad!: number;
}
