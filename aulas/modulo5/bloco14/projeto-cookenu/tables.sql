-- Active: 1660620348611@@35.226.146.116@3306@guimaraes-4211162-caio-rigotto

CREATE TABLE IF NOT EXISTS Cookenu_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL UNIQUE,
    password VARCHAR(64) NOT NULL
);

CREATE TABLE IF NOT EXISTS Cookenu_recipes (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(1024) NOT NULL,
    created_at DATE NOT NULL,
    author_id VARCHAR(64) NOT NULL,
    FOREIGN KEY (author_id) REFERENCES Cookenu_users(id)
);

CREATE TABLE IF NOT EXISTS Cookenu_assignees (
    recipe_id VARCHAR(64) NOT NULL,
    assignee_id VARCHAR(64) NOT NULL,
    PRIMARY KEY (recipe_id, assignee_id),
    FOREIGN KEY (recipe_id) REFERENCES Cookenu_recipes(id),
    FOREIGN KEY (assignee_id) REFERENCES Cookenu_users(id)
);

