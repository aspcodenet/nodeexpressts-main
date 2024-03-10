import {  DataTypes, Sequelize } from 'sequelize';
import { IMigrationInterface } from './migrationhelper';

export class Migration202403101429 implements IMigrationInterface{
    async up(sequelize: Sequelize): Promise<void> {
        await sequelize.getQueryInterface().createTable('players', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: DataTypes.INTEGER
            },
            name: {
              type: DataTypes.STRING,
              allowNull:true
            },
            team: {
              type: DataTypes.STRING,
              allowNull:true
            },
            createdAt: {
              allowNull: false,
              type: DataTypes.DATE
            },
            updatedAt: {
              allowNull: false,
              type: DataTypes.DATE
            }
          });
          }
        async down(sequelize: Sequelize): Promise<void> {

        throw new Error('Method not implemented.');
    }

}

