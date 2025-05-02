-- CreateTable
CREATE TABLE `Aluno` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `plano` ENUM('EXPERIMENTAL', 'MENSAL', 'BIMESTRAL', 'TRISMESTRAL', 'ANUAL') NULL DEFAULT 'EXPERIMENTAL',
    `modalidade` ENUM('MUSCULACAO', 'NATACAO', 'FUNCIONAL') NULL DEFAULT 'MUSCULACAO',
    `aniversario` DATETIME(3) NULL,
    `vencimento` DATETIME(3) NULL,
    `contaCriada` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Aluno_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
