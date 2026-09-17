import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";
//database connection
dotenv.config();
// const databaseUrl = process.env.DATABASE_URL;
// if (!databaseUrl) {
//   throw new Error("DATABASE_URL is required");
// }

const sequelize = new Sequelize("product_db", "dev_user", "dev_password", {
  host: "postgres-db",
  port: 5432,
  dialect: "postgres",
  logging: false,
});

//define database schema
const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to PostgresSQL!!");
    await sequelize.sync({ alter: false });
    console.log("Table synchronized !");
  } catch (error) {
    console.error("Connection failed", error);
    process.exit(1);
  }
};
export { sequelize, Product, connectDB };
