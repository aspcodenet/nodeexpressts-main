import {  Sequelize, DataTypes  } from 'sequelize';

import dotenv from 'dotenv';
import { Player } from './player';
dotenv.config();  // process.env.DB_PASSWORD hejsan123

export const sequelize = new Sequelize(`mysql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:3306/${process.env.DB_DATABASE}`)


export async function initializeDatabase(){
    Player.init(
        {
          id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: new DataTypes.STRING(128),
            allowNull: false
          },
          team: {
            type: new DataTypes.STRING(128),
            allowNull: false
          },
          createdAt: DataTypes.DATE,
          updatedAt: DataTypes.DATE,
        },
        {
          tableName: 'players',
          sequelize // passing the `sequelize` instance is required
        }
      );
}