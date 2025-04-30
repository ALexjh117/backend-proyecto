import { Table, Column, Model, ForeignKey, DataType } from 'sequelize-typescript';
import { Usuario } from './Usuario';
import { Feedback } from './Feedback';

@Table({ tableName: 'RelUsuarioFeedback', timestamps : true })
export class RelUsuarioFeedback extends Model {
  @ForeignKey(() => Usuario)
  @Column({ type: DataType.INTEGER, allowNull: false })
   declare IdUsuario: number;

  @ForeignKey(() => Feedback)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare IdFeedback: number;

  @Column({ type: DataType.DATEONLY, allowNull: true })
  declare FechaRelUsuaFeed: Date;
}
