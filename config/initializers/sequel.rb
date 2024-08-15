# config/initializers/sequel.rb
require 'sequel'

# Establish connection
DB = Sequel.connect(
  adapter: 'postgres',
  database: 'dev_food_circle',
  user: 'avatar',
  password: 'lVys1_94',
  port: 5432
)

# Optional: Load Sequel extensions
Sequel::Model.plugin :timestamps, update_on_create: true
Sequel::Model.plugin :validation_helpers

# If you want to log SQL queries:
DB.loggers << Logger.new($stdout)
