-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: assignment
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `content` varchar(16000) DEFAULT NULL,
  `authorId` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_authorId` (`authorId`),
  CONSTRAINT `FK_authorId` FOREIGN KEY (`authorId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,'article1','All of the fake data was generated with the help of chatGPT.This is the content for article 1. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',11),(2,'article2','All of the fake data was generated with the help of chatGPT.This is the content for article 2. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',3),(3,'article3','All of the fake data was generated with the help of chatGPT.This is the content for article 3. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',10),(4,'article4','All of the fake data was generated with the help of chatGPT.This is the content for article 4. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',14),(5,'article5','All of the fake data was generated with the help of chatGPT.This is the content for article 5. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',7),(6,'article6','All of the fake data was generated with the help of chatGPT.This is the content for article 6. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',10),(7,'article7','All of the fake data was generated with the help of chatGPT.This is the content for article 7. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',14),(8,'article8','All of the fake data was generated with the help of chatGPT.This is the content for article 8. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',8),(9,'article9','All of the fake data was generated with the help of chatGPT.This is the content for article 9. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',13),(10,'article10','All of the fake data was generated with the help of chatGPT.This is the content for article 10. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',12),(11,'article11','All of the fake data was generated with the help of chatGPT.This is the content for article 11. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',3),(12,'article12','All of the fake data was generated with the help of chatGPT.This is the content for article 12. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',11),(13,'article13','All of the fake data was generated with the help of chatGPT.This is the content for article 13. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',14),(14,'article14','All of the fake data was generated with the help of chatGPT.This is the content for article 14. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',8),(15,'article15','All of the fake data was generated with the help of chatGPT.This is the content for article 15. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',12),(16,'article16','All of the fake data was generated with the help of chatGPT.This is the content for article 16. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',4),(17,'article17','All of the fake data was generated with the help of chatGPT.This is the content for article 17. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',13),(18,'article18','All of the fake data was generated with the help of chatGPT.This is the content for article 18. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',9),(19,'article19','All of the fake data was generated with the help of chatGPT.This is the content for article 19. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',3),(20,'article20','All of the fake data was generated with the help of chatGPT.This is the content for article 20. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',5),(21,'article21','All of the fake data was generated with the help of chatGPT.This is the content for article 21. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',2),(22,'article22','All of the fake data was generated with the help of chatGPT.This is the content for article 22. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',6),(23,'article23','All of the fake data was generated with the help of chatGPT.This is the content for article 23. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',9),(24,'article24','All of the fake data was generated with the help of chatGPT.This is the content for article 24. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',13),(25,'article25','All of the fake data was generated with the help of chatGPT.This is the content for article 25. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',8),(26,'article26','All of the fake data was generated with the help of chatGPT.This is the content for article 26. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',14),(27,'article27','All of the fake data was generated with the help of chatGPT.This is the content for article 27. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',2),(28,'article28','All of the fake data was generated with the help of chatGPT.This is the content for article 28. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',12),(29,'article29','All of the fake data was generated with the help of chatGPT.This is the content for article 29. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',7),(30,'article30','All of the fake data was generated with the help of chatGPT.This is the content for article 30. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',1),(31,'article31','All of the fake data was generated with the help of chatGPT.This is the content for article 31. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',13),(32,'article32','All of the fake data was generated with the help of chatGPT.This is the content for article 32. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',2),(33,'article33','All of the fake data was generated with the help of chatGPT.This is the content for article 33. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',15),(34,'article34','All of the fake data was generated with the help of chatGPT.This is the content for article 34. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',9),(35,'article35','All of the fake data was generated with the help of chatGPT.This is the content for article 35. It may contain random text, lorem ipsum, or any other content you desire. You can customize the content generation logic here.',12);
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-23  2:56:06
