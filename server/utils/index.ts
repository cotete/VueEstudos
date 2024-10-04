import oracledb from 'oracledb';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const username = process.env.DB_USER || '';
const password = process.env.DB_PASSWORD || '';
const host = process.env.DB_HOST || '';
const port = process.env.DB_PORT || '';
const serviceName = process.env.DB_SERVICE_NAME || '';

// Create the connection string
const connectString = `${host}:${port}/${serviceName}`;

// Function to initiate a connection
export async function connectToDatabase() {
  try {
    // Establish connection
    const connection = await oracledb.getConnection({
      user: username,
      password: password,
      connectString: connectString,
    });

    console.log('Connection established successfully!');
    
    // Return the connection object for later use
    return connection;

  } catch (err) {
    console.error('Error connecting to the database:', err);
    throw err; // Re-throw the error for the caller to handle
  }
}