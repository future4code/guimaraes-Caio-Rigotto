
CREATE TABLE IF NOT EXISTS Pkm_data (
    id VARCHAR(64) PRIMARY KEY, 
    name VARCHAR(64) NOT NULL,
    pokedex_number VARCHAR(64) NOT NULL,
    generation VARCHAR(64) NOT NULL,
    type_1 VARCHAR(64) DEFAULT '',
    type_2 VARCHAR(64) DEFAULT '',
    stat_total VARCHAR(64) NOT NULL,
    atk VARCHAR(64) NOT NULL,
    def VARCHAR(64) NOT NULL,
    sta VARCHAR(64) NOT NULL
);