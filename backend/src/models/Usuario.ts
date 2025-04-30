import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { RolUsuario } from './RolUsuario';
import { AlquilerElementos } from './AlquilerElementos';
import { Asistencia } from './Asistencia';
import { Constancia } from './Constancia';
import { ConsultaIA } from './ConsultaIA';
import { RelUsuarioEvento } from './RelUsuarioEvento';
import { RelUsuarioFeedback } from './RelUsuarioFeedback';

@Table({ tableName: 'Usuario' , timestamps : true})
export class Usuario extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  IdUsuario!: number;

  @Column({ type: DataType.STRING(50), allowNull: false, unique: true })
  IdentificacionUsuario!: string;

  @Column({ type: DataType.STRING(100), allowNull: false })
  Nombre!: string;

  @Column({ type: DataType.STRING(100), allowNull: false })
  Apellido!: string;

  @Column({ type: DataType.STRING(255), allowNull: false, unique: true })
  Correo!: string;

  @Column({ type: DataType.STRING(20), allowNull: true })
  Telefono!: string;

  @Column({ type: DataType.STRING(255), allowNull: false })
  Contrasena!: string;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  FechaRegistro!: Date;

  @HasMany(() => RolUsuario)
  rolUsuarios!: RolUsuario[];

  @HasMany(() => AlquilerElementos)
  alquilerElementos!: AlquilerElementos[];

  @HasMany(() => Asistencia)
  asistencias!: Asistencia[];

  @HasMany(() => Constancia)
  constancias!: Constancia[];

  @HasMany(() => ConsultaIA)
  consultasIA!: ConsultaIA[];

  @HasMany(() => RelUsuarioEvento)
  relUsuarioEventos!: RelUsuarioEvento[];

  @HasMany(() => RelUsuarioFeedback)
  relUsuarioFeedbacks!: RelUsuarioFeedback[];
}
