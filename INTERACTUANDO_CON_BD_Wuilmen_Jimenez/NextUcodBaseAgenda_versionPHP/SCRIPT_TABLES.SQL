--1.-Script para crear la tabla USER mediante phpMyAdmin
CREATE TABLE `user` (
 `email` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
 `nombre` varchar(250) COLLATE latin1_spanish_ci NOT NULL,
 `contrasenia` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
 `fecha_nacimiento` date NOT NULL,
 PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci
--2.-Script para crear la tabla EVENT mediante phpMyAdmin
CREATE TABLE `event` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `titulo` varchar(100) COLLATE latin1_spanish_ci DEFAULT NULL,
 `start_date` date DEFAULT NULL,
 `end_date` date DEFAULT NULL,
 `start_hour` time DEFAULT NULL,
 `allDay` tinyint(1) DEFAULT NULL,
 `end_hour` time DEFAULT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci
