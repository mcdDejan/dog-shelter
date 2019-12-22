-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dog_shelter
-- ------------------------------------------------------
-- Server version	8.0.18

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
-- Dumping data for table `adoptions`
--

LOCK TABLES `adoptions` WRITE;
/*!40000 ALTER TABLE `adoptions` DISABLE KEYS */;
INSERT INTO `adoptions` VALUES (1,'2019-12-19 21:16:59',3,2);
/*!40000 ALTER TABLE `adoptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `breeds`
--

LOCK TABLES `breeds` WRITE;
/*!40000 ALTER TABLE `breeds` DISABLE KEYS */;
INSERT INTO `breeds` VALUES (5,'labrador',NULL,0,0,1),(6,NULL,NULL,1,1,2),(7,'husky','labrador',1,0,3),(8,'malamut',NULL,0,0,4);
/*!40000 ALTER TABLE `breeds` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `characteristics`
--

LOCK TABLES `characteristics` WRITE;
/*!40000 ALTER TABLE `characteristics` DISABLE KEYS */;
INSERT INTO `characteristics` VALUES (1,'male','large','black',NULL,'short',1),(2,'female','small','brown','white','short',2),(3,'female','medium','white',NULL,'medium',3),(4,'male','large','gray',NULL,'long',4);
/*!40000 ALTER TABLE `characteristics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `dogs`
--

LOCK TABLES `dogs` WRITE;
/*!40000 ALTER TABLE `dogs` DISABLE KEYS */;
INSERT INTO `dogs` VALUES (1,'Bak','young',NULL,5446431,'2019-12-19','Karposh 4',NULL,'adoptable','Friendly',NULL),(2,'Astra','puppy',NULL,NULL,'2019-12-19','Debar Maalo',NULL,'adopted','Young puppy, around 3 months old',NULL),(3,'Bela','adult',NULL,4246995,'2019-12-19','Karposh 4',NULL,'pending','She is a bit fearfull, needs socialization',NULL),(4,'Leo','adult',7348249,NULL,'2019-12-19','Kisela Voda',NULL,'pending','Looks home raised, probably lost',NULL);
/*!40000 ALTER TABLE `dogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `medicalrecords`
--

LOCK TABLES `medicalrecords` WRITE;
/*!40000 ALTER TABLE `medicalrecords` DISABLE KEYS */;
INSERT INTO `medicalrecords` VALUES (1,'2019-12-19 20:41:53','2019-12-19 20:41:53',NULL,'Healthy dog, not neutered',2);
/*!40000 ALTER TABLE `medicalrecords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','Adminski',1,0,'admin@gmail.com','$2a$10$ndioTFwREdWctvyXP60O0.opt6Y2wGIolS7FxYVEYKLyAxktH3qL6',70111111,'Skopje','Ul. Makedonska Vojska BB','2019-12-19 20:29:34',1),(2,'Marko','Krstevski',0,1,'marko@gmail.com','$2a$10$Z4loh5isg0znANuIR1BZX.dde6jt2kT10kDrEiaL1iuGpcsGJ/DLm',70111444,'Skopje','Ul. Partizanska BB','2019-12-19 20:38:03',1),(3,'Ivana','Stankovska',0,0,'iva@gmail.com','$2a$10$6pwgImvqr/RvjA/9aFUJxujck5J/EMXWYJK5nDyB.gGfPEd276n.G',70777222,'Skopje','Ul. Partizanska BB','2019-12-19 20:40:13',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-20 18:17:01
