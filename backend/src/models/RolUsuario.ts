import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Usuario } from './Usuario';

@Table({ tableName: 'RolUsuario', timestamps : true })
export class RolUsuario extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  IdRol!: number;

  @Column({ type: DataType.ENUM("Administrador", "Aprendiz", "Instructor"), allowNull: false })
  NombreRol!: string;

  @ForeignKey(() => Usuario)
  @Column({ type: DataType.INTEGER, allowNull: false })
  IdUsuario!: number;
}
