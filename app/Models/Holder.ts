import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Holder extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  declare name: string

  @column()
  declare parent: number

  @column()
  declare createdBy: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime


  public toJSON() {
    return {
      id: this.id,
      name: this.name,
      parent: this.parent,
    
    }
  }
}
