-- MySQL dump 10.11
--
-- Host: localhost    Database: gtdgears
-- ------------------------------------------------------
-- Server version	5.0.51a-3ubuntu5

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actions`
--

DROP TABLE IF EXISTS `actions`;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
CREATE TABLE `actions` (
  `act_id` int(10) unsigned NOT NULL auto_increment,
  `act_buc_id` int(11) NOT NULL,
  `act_ctxt_id` int(11) NOT NULL,
  `act_name` varchar(255) default NULL,
  `act_descr` text,
  `act_startdate` datetime NOT NULL,
  `act_enddate` datetime NOT NULL,
  PRIMARY KEY  (`act_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
SET character_set_client = @saved_cs_client;

--
-- Dumping data for table `actions`
--

LOCK TABLES `actions` WRITE;
/*!40000 ALTER TABLE `actions` DISABLE KEYS */;
INSERT INTO `actions` VALUES (1,1,1,'action1','hacer cosa 1','2008-10-01 13:47:13','2008-10-01 13:47:13'),(2,1,1,'action2','hacercosa2','2008-10-01 13:47:21','2008-10-01 13:47:21'),(3,1,2,'action3','hacer cosa3','2008-10-01 13:47:28','2008-10-01 13:47:28'),(4,1,3,'action4','hacer cosa3','2008-10-01 13:56:40','2008-10-01 13:56:40'),(5,1,1,'action5','hacer cosa3','2008-10-01 15:17:57','2008-10-01 15:17:57'),(6,1,2,'action6','hacer cosa3','2008-10-01 15:22:03','2008-10-01 15:22:03'),(8,1,1,'action4','action 4 para hacer','2008-10-03 14:56:41','2008-10-03 14:56:41'),(10,2,2,'accion 7','probar','2008-10-03 14:58:36','2008-10-03 14:58:36');
/*!40000 ALTER TABLE `actions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contexts`
--

DROP TABLE IF EXISTS `contexts`;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
CREATE TABLE `contexts` (
  `ctxt_id` int(10) unsigned NOT NULL auto_increment,
  `ctxt_name` varchar(50) NOT NULL,
  `ctxt_desc` varchar(255) NOT NULL,
  PRIMARY KEY  (`ctxt_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
SET character_set_client = @saved_cs_client;

--
-- Dumping data for table `contexts`
--

LOCK TABLES `contexts` WRITE;
/*!40000 ALTER TABLE `contexts` DISABLE KEYS */;
INSERT INTO `contexts` VALUES (3,'Lanux','Cosas de Lanux'),(2,'MW','Cosas de Laburo'),(1,'Personal','Cosas personales');
/*!40000 ALTER TABLE `contexts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
CREATE TABLE `projects` (
  `prj_id` int(10) unsigned NOT NULL auto_increment,
  `prj_name` varchar(50) NOT NULL,
  `prj_desc` text NOT NULL,
  `prj_ctxt_id` int(10) unsigned NOT NULL,
  PRIMARY KEY  (`prj_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
SET character_set_client = @saved_cs_client;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
CREATE TABLE `users` (
  `usr_id` int(10) unsigned NOT NULL auto_increment,
  `usr_name` varchar(50) NOT NULL,
  `usr_pass` varchar(255) NOT NULL,
  `usr_is_active` tinyint(1) NOT NULL default '1',
  PRIMARY KEY  (`usr_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
SET character_set_client = @saved_cs_client;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
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

-- Dump completed on 2008-10-03 19:48:08
