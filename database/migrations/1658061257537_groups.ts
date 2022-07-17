import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'groups'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('email', 254).notNullable().unique()
      table.string('name', 254).notNullable()
      table.string('city', 254).notNullable()
      table.string('state', 254).notNullable()
      table.string('logo', 254)
      table.string('code', 254).notNullable().unique()
      table.string('phone', 254).notNullable().unique()
      table.string('whatsapp', 254).unique()
      table.string('site', 254).unique()
      table.string('instagram', 254).unique()
      table.boolean('status').notNullable().defaultTo(true)
      table.text('description')
      table.timestamps(true, true)
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      // table.timestamp('created_at', { useTz: true })
      // table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
