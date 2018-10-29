ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '0000';

DROP DATABASE IF EXISTS my_db;
CREATE DATABASE my_db;

USE my_db;

DROP TABLE IF EXISTS `product`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;

CREATE TABLE `product` (
  `ProductID` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `ProductName` varchar(45) NOT NULL,
  `Price` int(11) NOT NULL,
  PRIMARY KEY (`ProductID`),
  UNIQUE KEY `ProductID_UNIQUE` (`ProductID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40101 SET character_set_client = @saved_cs_client */;

INSERT INTO `product` VALUES (1,'Book',18),(2,'Mobile',400),(3,'PC',1000),(4,'PS4',500),(5,'Chromebook',500);
