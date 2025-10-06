create database optimal_school;
use optimal_school;
CREATE TABLE Usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    rol ENUM('administrador', 'profesor', 'estudiante', 'acudiente') NOT NULL,
    primer_nombre VARCHAR(50) NOT NULL,
    segundo_nombre VARCHAR(50),
    primer_apellido VARCHAR(50) NOT NULL,
    segundo_apellido VARCHAR(50),
    tipo_documento ENUM('CC', 'TI', 'CE', 'PA') NOT NULL,
    documento VARCHAR(20) UNIQUE NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    telefono VARCHAR(20),
    direccion VARCHAR(200),
    fecha_nacimiento DATE,
    contrasena VARCHAR(255) NOT NULL
);

-- ======================================
-- ENTIDADES ESPECÍFICAS DE USUARIO
-- ======================================

-- Administrador (hereda de Usuario)
CREATE TABLE Administrador (
    id_administrador INT PRIMARY KEY,
    FOREIGN KEY (id_administrador) REFERENCES Usuario(id_usuario)
);

-- Profesor (hereda de Usuario)
CREATE TABLE Profesor (
    id_profesor INT PRIMARY KEY,
    titulo_academico VARCHAR(100),
    experiencia_anios INT,
    FOREIGN KEY (id_profesor) REFERENCES Usuario(id_usuario)
);

-- Estudiante (hereda de Usuario)
CREATE TABLE Estudiante (
    id_estudiante INT PRIMARY KEY,
    fecha_ingreso DATE,
    estado ENUM('activo', 'inactivo') DEFAULT 'activo',
    FOREIGN KEY (id_estudiante) REFERENCES Usuario(id_usuario)
);

-- Acudiente (hereda de Usuario)
CREATE TABLE Acudiente (
    id_acudiente INT PRIMARY KEY,
    parentesco ENUM('padre', 'madre', 'tutor', 'otro') NOT NULL,
    FOREIGN KEY (id_acudiente) REFERENCES Usuario(id_usuario)
);

CREATE TABLE Estudiante_Acudiente (
    id_estudiante INT,
    id_acudiente INT,
    PRIMARY KEY (id_estudiante, id_acudiente),
    FOREIGN KEY (id_estudiante) REFERENCES Estudiante(id_estudiante),
    FOREIGN KEY (id_acudiente) REFERENCES Acudiente(id_acudiente)
);

-- ======================================
-- POSTULACIÓN
-- ======================================

CREATE TABLE Postulante (
    id_postulante INT PRIMARY KEY AUTO_INCREMENT,
    -- Datos del niño
    nombres_postulante VARCHAR(50) NOT NULL,
    apellidos_postulante VARCHAR(50) NOT NULL,
    tipo_documento_postulante ENUM('TI', 'CC') NOT NULL,
    documento_postulante VARCHAR(20) UNIQUE NOT NULL,
    fecha_nacimiento_postulante DATE NOT NULL,
    direccion_postulante VARCHAR(200),

    -- Datos del acudiente
    nombres_acudiente VARCHAR(50) NOT NULL,
    apellidos_acudiente VARCHAR(50) NOT NULL,
    tipo_documento_acudiente ENUM('CC', 'CE', 'PA') NOT NULL,
    documento_acudiente VARCHAR(20) NOT NULL,
    correo_acudiente VARCHAR(100) NOT NULL,
    telefono_acudiente VARCHAR(20),
    direccion_acudiente VARCHAR(200),

    estado_postulacion ENUM('pendiente', 'aprobada', 'rechazada') DEFAULT 'pendiente',

    id_administrador INT NOT NULL,
    FOREIGN KEY (id_administrador) REFERENCES Administrador(id_administrador)
);

-- ======================================
-- CURSOS Y ASIGNATURAS
-- ======================================

CREATE TABLE Curso (
    id_curso INT PRIMARY KEY AUTO_INCREMENT,
    nombre_curso VARCHAR(50) NOT NULL,
    grado VARCHAR(20) NOT NULL
);

CREATE TABLE Asignatura (
    id_asignatura INT PRIMARY KEY AUTO_INCREMENT,
    nombre_asignatura VARCHAR(50) NOT NULL
);

CREATE TABLE Curso_Asignatura (
    id_curso INT,
    id_asignatura INT,
    PRIMARY KEY (id_curso, id_asignatura),
    FOREIGN KEY (id_curso) REFERENCES Curso(id_curso),
    FOREIGN KEY (id_asignatura) REFERENCES Asignatura(id_asignatura)
);

CREATE TABLE Profesor_Curso_Asignatura (
    id_profesor INT,
    id_curso INT,
    id_asignatura INT,
    PRIMARY KEY (id_profesor, id_curso, id_asignatura),
    FOREIGN KEY (id_profesor) REFERENCES Profesor(id_profesor),
    FOREIGN KEY (id_curso) REFERENCES Curso(id_curso),
    FOREIGN KEY (id_asignatura) REFERENCES Asignatura(id_asignatura)
);


-- ======================================
-- MATRÍCULA
-- ======================================

CREATE TABLE Matricula (
    id_matricula INT PRIMARY KEY AUTO_INCREMENT,
    id_estudiante INT NOT NULL,
    id_curso INT NOT NULL,
    fecha_matricula DATE NOT NULL,
anio_lectivo YEAR NOT NULL,
    FOREIGN KEY (id_estudiante) REFERENCES Estudiante(id_estudiante),
    FOREIGN KEY (id_curso) REFERENCES Curso(id_curso)
);

-- ======================================
-- CALIFICACIONES Y ASISTENCIA
-- ======================================

CREATE TABLE Calificacion (
    id_calificacion INT PRIMARY KEY AUTO_INCREMENT,
    id_estudiante INT NOT NULL,
    id_asignatura INT NOT NULL,
    periodo VARCHAR(20) NOT NULL,
    nota DECIMAL(3,1) NOT NULL,
    FOREIGN KEY (id_estudiante) REFERENCES Estudiante(id_estudiante),
    FOREIGN KEY (id_asignatura) REFERENCES Asignatura(id_asignatura)
);

CREATE TABLE Asistencia (
    id_asistencia INT PRIMARY KEY AUTO_INCREMENT,
    id_estudiante INT NOT NULL,
    fecha DATE NOT NULL,
    estado ENUM('asistio', 'falta', 'tarde') NOT NULL,
    FOREIGN KEY (id_estudiante) REFERENCES Estudiante(id_estudiante)
);
