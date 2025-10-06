-- Tabla Usuarios
INSERT INTO Usuario (rol, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, tipo_documento, documento, correo, telefono, direccion, fecha_nacimiento, contrasena)
VALUES
('administrador', 'Laura', 'Marcela', 'Pérez', 'Gómez', 'CC', '1001001001', 'laura.perez@optimalschool.edu', '3105671234', 'Cra 10 #15-20', '1985-04-10', 'admin123'),
('profesor', 'Carlos', 'Andrés', 'Rodríguez', 'López', 'CC', '1002002002', 'carlos.rodriguez@optimalschool.edu', '3127894561', 'Calle 25 #30-12', '1980-09-12', 'prof123'),
('profesor', 'Diana', 'Carolina', 'García', 'Mora', 'CC', '1003003003', 'diana.garcia@optimalschool.edu', '3156987745', 'Av 5 #18-50', '1990-06-22', 'prof456'),
('estudiante', 'Mateo', NULL, 'Ramírez', 'Ortiz', 'TI', '1104004004', 'mateo.ramirez@optimalschool.edu', '3012233445', 'Cl 20 #8-15', '2012-03-15', 'estu123'),
('estudiante', 'Valentina', 'Sofía', 'Gómez', 'Ríos', 'TI', '1105005005', 'valentina.gomez@optimalschool.edu', '3025544332', 'Cl 33 #4-22', '2011-08-25', 'estu456'),
('acudiente', 'María', 'Elena', 'Ortiz', 'Jiménez', 'CC', '1006006006', 'maria.ortiz@optimalschool.edu', '3134478596', 'Cra 22 #18-12', '1987-11-30', 'acu123'),
('acudiente', 'Jorge', 'Luis', 'Gómez', 'Mendoza', 'CC', '1007007007', 'jorge.gomez@optimalschool.edu', '3149987765', 'Cl 40 #22-17', '1982-01-10', 'acu456');

-- Tabla de roles
INSERT INTO Administrador (id_administrador) VALUES (1);
INSERT INTO Profesor (id_profesor, titulo_academico, experiencia_anios)
VALUES
(2, 'Licenciado en Matemáticas', 10),
(3, 'Licenciada en Lengua Castellana', 8);

INSERT INTO Estudiante (id_estudiante, fecha_ingreso, estado)
VALUES
(4, '2023-01-15', 'activo'),
(5, '2023-01-15', 'activo');

INSERT INTO Acudiente (id_acudiente, parentesco)
VALUES
(6, 'madre'),
(7, 'padre');

INSERT INTO Estudiante_Acudiente (id_estudiante, id_acudiente)
VALUES
(4, 6),
(5, 7);


-- Cursos y asignaturas
INSERT INTO Curso (nombre_curso, grado)
VALUES
('5A', 'Quinto'),
('6A', 'Sexto');

INSERT INTO Asignatura (nombre_asignatura)
VALUES
('Matemáticas'),
('Lengua Castellana'),
('Ciencias Naturales');

INSERT INTO Curso_Asignatura (id_curso, id_asignatura)
VALUES
(1, 1),
(1, 2),
(2, 3);

INSERT INTO Profesor_Curso_Asignatura (id_profesor, id_curso, id_asignatura)
VALUES
(2, 1, 1), -- Carlos enseña Matemáticas en 5A
(3, 1, 2); -- Diana enseña Lengua Castellana en 5A


-- Matriculas
INSERT INTO Matricula (id_estudiante, id_curso, fecha_matricula, anio_lectivo)
VALUES
(4, 1, '2024-01-15', 2024),
(5, 1, '2024-01-15', 2024);

-- Calificaciones
INSERT INTO Calificacion (id_estudiante, id_asignatura, periodo, nota)
VALUES
(4, 1, 'Primer Periodo', 4.5),
(4, 2, 'Primer Periodo', 4.0),
(5, 1, 'Primer Periodo', 3.8),
(5, 2, 'Primer Periodo', 4.2);

-- Asistencia
INSERT INTO Asistencia (id_estudiante, fecha, estado)
VALUES
(4, '2024-04-01', 'asistio'),
(4, '2024-04-02', 'falta'),
(5, '2024-04-01', 'asistio'),
(5, '2024-04-02', 'asistio');

-- Postulante
INSERT INTO Postulante (
    nombres_postulante, apellidos_postulante, tipo_documento_postulante, documento_postulante,
    fecha_nacimiento_postulante, direccion_postulante,
    nombres_acudiente, apellidos_acudiente, tipo_documento_acudiente, documento_acudiente,
    correo_acudiente, telefono_acudiente, direccion_acudiente,
    estado_postulacion, id_administrador
)
VALUES
('Samuel', 'Ruiz Torres', 'TI', '1150001001', '2013-05-20', 'Cl 9 #7-11',
 'Lucía', 'Torres Rincón', 'CC', '1020008008', 'lucia.torres@gmail.com', '3204456677', 'Cl 9 #7-11',
 'pendiente', 1);