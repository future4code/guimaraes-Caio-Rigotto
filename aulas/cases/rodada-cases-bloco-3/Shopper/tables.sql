-- Active: 1660620348611@@35.226.146.116@3306@guimaraes-4211162-caio-rigotto
CREATE TABLE IF NOT EXISTS Shopper_products(
    id VARCHAR(64) PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    price FLOAT(20, 2) NOT NULL,
    qty_stock INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS Shopper_users(
    user_id VARCHAR(64) PRIMARY KEY NOT NULL,
    user_name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL UNIQUE,
    nickname VARCHAR(64) NOT NULL UNIQUE,
    password VARCHAR(64) NOT NULL,
    role ENUM('NORMAL', 'ADMIN') NOT NULL DEFAULT 'NORMAL'
);
CREATE TABLE IF NOT EXISTS Shopper_deliveries(
    id VARCHAR(64) PRIMARY KEY NOT NULL,
    delivery_date DATE NOT NULL,
    user_id VARCHAR(64) NOT NULL,
    user_name VARCHAR(64) NOT NULL,
    total_price FLOAT(20, 2) NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS Shopper_sale(
    id VARCHAR(64) NOT NULL PRIMARY KEY,
    delivery_id VARCHAR(64) NOT NULL,
    product_id VARCHAR(64) NOT NULL,
    product_quantity VARCHAR(64) NOT NULL,
    product_price FLOAT(20, 2) NOT NULL,
    total_price FLOAT(20, 2) NOT NULL
    );
