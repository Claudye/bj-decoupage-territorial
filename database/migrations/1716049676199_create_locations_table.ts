import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'locations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('location_type').notNullable() //towns,departement,district, le nom d'une region
      table.integer('location_id').notNullable() // l'ID d'une région      table.decimal('latitude', 9, 6).nullable() // Latitude
      table.decimal('longitude', 9, 6).nullable() // Longitude (optionnel)
      table.decimal('latitude', 9, 6).nullable() // Longitude (optionnel)
      table.decimal('altitude', 7, 2) // Altitude (optionnel)
      table.string('preview_image').nullable()
      table.enum('status', ['init', 'pending', 'verified', 'deactivated'])
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
