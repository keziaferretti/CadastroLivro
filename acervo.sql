-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 18-Mar-2023 às 22:13
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `acervobackend`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `acervo`
--

CREATE TABLE `acervo` (
  `codigoRegisto` int(11) NOT NULL,
  `tituloDoLivro` varchar(100) NOT NULL,
  `autores` varchar(100) NOT NULL,
  `editora` varchar(100) NOT NULL,
  `edicao` varchar(20) NOT NULL,
  `anoPublicacao` varchar(10) NOT NULL,
  `dataAquisicao` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `acervo`
--

INSERT INTO `acervo` (`codigoRegisto`, `tituloDoLivro`, `autores`, `editora`, `edicao`, `anoPublicacao`, `dataAquisicao`) VALUES
(1, 'HTML', 'unoeste', 'Aprender', '10 edicao', '2020', '05/02/2023'),
(2, 'css para leigos', 'aprender', 'unoeste', '5 edicao', '2021', '25/12/2022');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `acervo`
--
ALTER TABLE `acervo`
  ADD PRIMARY KEY (`codigoRegisto`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `acervo`
--
ALTER TABLE `acervo`
  MODIFY `codigoRegisto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
