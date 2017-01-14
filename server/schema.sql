CREATE DATABASE chat;

USE chat;


/* Create other tables and define schemas for them here! */

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
-- Stores username and user_id
-- ---

DROP TABLE IF EXISTS `Users`;
    
CREATE TABLE `Users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(50) NOT NULL DEFAULT 'anonymous',
  PRIMARY KEY (`id`)
) COMMENT 'Stores username and user_id';

-- ---
-- Table 'Messages'
-- has id, user_id, text
-- ---

DROP TABLE IF EXISTS `Messages`;
    
CREATE TABLE `Messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `text` VARCHAR(255) NULL DEFAULT NULL,
  `id_Users` INTEGER NULL DEFAULT NULL,
  `id_Rooms` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) COMMENT 'has id, user_id, text';

-- ---
-- Table 'Rooms'
-- id, roomname
-- ---

DROP TABLE IF EXISTS `Rooms`;
    
CREATE TABLE `Rooms` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `roomname` VARCHAR(255) NOT NULL DEFAULT 'lobby',
  PRIMARY KEY (`id`)
) COMMENT 'id, roomname';

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Messages` ADD FOREIGN KEY (id_Users) REFERENCES `Users` (`id`);
ALTER TABLE `Messages` ADD FOREIGN KEY (id_Rooms) REFERENCES `Rooms` (`id`);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

