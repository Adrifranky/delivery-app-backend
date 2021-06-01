module.exports = {
  dialect: 'postgres',
  host: 'database-1.cmqsljoveepx.us-east-1.rds.amazonaws.com',
  username: 'postgres',
  password: 'admin123',
  database: 'delivery_app_db',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
