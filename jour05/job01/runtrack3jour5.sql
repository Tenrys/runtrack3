-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 13, 2020 at 01:20 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `runtrack3jour5`
--
CREATE DATABASE IF NOT EXISTS `runtrack3jour5` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `runtrack3jour5`;

-- --------------------------------------------------------

--
-- Table structure for table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `nom`, `prenom`, `email`, `password`) VALUES
(1, 'a', 'a', 'test@email.com', '$2y$10$p2PTBPMnryG1IKdJStTQmeT0cI5U9wqBUbm4T/l63Y11HvCCzWM/W'),
(2, 'Mandine', 'enzo', 'enzo.mandine@laplateforme.io', '$2y$10$hspBN.UU5.0E8hsn0rIxDe.Q0c4E.J2V/86IdXT0.dpD0aV/xfGmu'),
(3, 'Maubert', 'Marceau', 'marceau.maubert@laplateforme.io', '$2y$10$YqJqWxynPWcA2LWEsbr12eCDHCaLeQTzTTtnpin3LCh3nwU7QI0aO'),
(4, 'test', 'test', 'test@test.com', '$2y$10$wwJ0Ncf.W8HxnY7GBqD8aen4LURsr7RryrpjKoSwDhU5VO3IUSLIO');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
