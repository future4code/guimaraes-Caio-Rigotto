import { BaseDatabase } from "./data/BaseDatabase";

class Migrations extends BaseDatabase {
    async createTable() {
        BaseDatabase.connection
            .raw(`
      CREATE TABLE IF NOT EXISTS labook_users(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS labook_posts(
         id VARCHAR(255) PRIMARY KEY,
         photo VARCHAR(255) NOT NULL,
         description VARCHAR(255) NOT NULL,
         type ENUM("normal","event") DEFAULT "normal",
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         author_id VARCHAR(255),
         FOREIGN KEY (author_id) REFERENCES labook_users (id)
      );

      CREATE TABLE IF NOT EXISTS labook_users_relations(
        id VARCHAR(255) PRIMARY KEY,
        sender_id VARCHAR(255) NOT NULL,
        receiver_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (sender_id) REFERENCES labook_users (id),
        FOREIGN KEY (receiver_id) REFERENCES labook_users (id)
     );
   `)
            .then(console.log)
            .catch(console.log)
    }
}

const migrations = new Migrations()
migrations.createTable()