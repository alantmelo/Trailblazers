import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Group extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })

  @column()
  public createdAt: DateTime

  @column()
  public userId: string

  @column()
  public name: string

  @column()
  public logo: string

  @column()
  public code: string

  @column()
  public phone: string

  @column()
  public site: string

  @column()
  public city: string

  @column()
  public state: string

  @column()
  public whatsapp: string

  @column()
  public instagram: string

  @column()
  public email: string

  @column()
  public status: boolean
  
  @column()
  public description: boolean

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
