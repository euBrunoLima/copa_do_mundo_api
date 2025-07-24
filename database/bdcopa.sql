CREATE DATABASE  IF NOT EXISTS `bdcopa` /*!40100 DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bdcopa`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: bdcopa
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `cli_codigo` int NOT NULL,
  `cli_cpf` varchar(14) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `cli_nome` varchar(60) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `cli_dataNascimento` varchar(10) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `cli_email` varchar(60) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `cli_telefone` varchar(15) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`cli_codigo`),
  UNIQUE KEY `cli_cpf` (`cli_cpf`,`cli_email`,`cli_telefone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `selecoes`
--

DROP TABLE IF EXISTS `selecoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `selecoes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `selecao` varchar(25) COLLATE utf8mb3_unicode_ci NOT NULL,
  `grupo` char(1) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `selecoes`
--

LOCK TABLES `selecoes` WRITE;
/*!40000 ALTER TABLE `selecoes` DISABLE KEYS */;
INSERT INTO `selecoes` VALUES (53,'Senegal','A'),(55,'Inglaterra','B'),(56,'Irã','B'),(57,'Estados Unidos','B'),(58,'País de Gales','B'),(59,'Argentina','C'),(60,'Arábia Saudita','C'),(61,'México','C'),(62,'Polônia','C'),(63,'França','D'),(64,'Austrália','D'),(66,'Tunísia','D'),(67,'Espanha','E'),(68,'Costa Rica','E'),(69,'Alemanha','E'),(70,'Japão','E'),(71,'Bélgica','F'),(72,'Canadá','F'),(73,'Marrocos','F'),(74,'Croácia','F'),(75,'Brasil','G'),(76,'Sérvia','G'),(77,'Suíça','G'),(78,'Camarões','G'),(79,'Portugal','H'),(80,'Gana','H'),(81,'Uruguai','H'),(82,'Coreia do Sul','H'),(83,'Catar','A'),(84,'Dinamarca','D'),(85,'Equador','A'),(86,'Holanda','A');
/*!40000 ALTER TABLE `selecoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'bdcopa'
--

--
-- Dumping routines for database 'bdcopa'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-24 12:19:18
