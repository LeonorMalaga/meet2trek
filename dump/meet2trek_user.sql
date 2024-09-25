-- MySQL dump 10.13  Distrib 8.0.38, for macos14 (arm64)
--
-- Host: 127.0.0.1    Database: meet2trek
-- ------------------------------------------------------
-- Server version	8.4.1

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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `about_me` varchar(500) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `preferred_area` varchar(255) DEFAULT NULL,
  `preferred_country` varchar(255) DEFAULT NULL,
  `preferred_difficulty` tinyint DEFAULT NULL,
  `preferred_distance` int NOT NULL,
  `preferred_province` varchar(255) DEFAULT NULL,
  `slogan` varchar(120) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Sonriente y amigable, siempre dispuesto a hechar un buen rato de chachara. 25 años , soñador y amante de los animales.','Alberto@gmail.com','../USERS/Alberto0/icon/Alberto.png','Alberto','1234asdf','FRIGILIANA','SPAIN',1,2000,'MALAGA','Mirando siempre al frente sin perder el objetivo','Gonzalez','born2trek'),(2,'Joven dinamico y emprendedor, siempre dispuesto a ayudar','Antonio@gmail.com','../USERS/Antonio0/icon/people-1.jpg','Antonio','1234asdf','ARDALES','SPAIN',3,6000,'MALAGA','Una sonrisa ante todo','Jimenez','Antonio0'),(3,'Joven entusiasta de la naturaleza a la que le gusta descubrir nuevos rincones.','Claudia@gmail.com','../USERS/Claudia0/icon/people-2.jpg','Claudia','1234asdf','FRIGILIANA','SPAIN',6,10000,'MALAGA','Aire, viento y sol es todo lo que necesito','Gonzalez','Claudia0'),(4,'strong young man','Jonathan@hotmail.com','../USERS/Jonathan0/icon/people-4.jpg','Jonathan','1234asdf','ARDALES','SPAIN',5,8000,'MALAGA','I am the best','Hein','Jonathan0');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-25 21:37:21
