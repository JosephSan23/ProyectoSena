-- insert
INSERT INTO Usuario (rol, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, tipo_documento, documento, correo, telefono, direccion, fecha_nacimiento, contrasena)
VALUES
('administrador', 'Laura', 'Marcela', 'Pérez', 'Gómez', 'CC', '1001001001', 'laura.perez@optimalschool.edu', '3105671234', 'Cra 10 #15-20', '1985-04-10', 'admin123'),
('profesor', 'Carlos', 'Andrés', 'Rodríguez', 'López', 'CC', '1002002002', 'carlos.rodriguez@optimalschool.edu', '3127894561', 'Calle 25 #30-12', '1980-09-12', 'prof123'),
('profesor', 'Diana', 'Carolina', 'García', 'Mora', 'CC', '1003003003', 'diana.garcia@optimalschool.edu', '3156987745', 'Av 5 #18-50', '1990-06-22', 'prof456'),
('estudiante', 'Mateo', NULL, 'Ramírez', 'Ortiz', 'TI', '1104004004', 'mateo.ramirez@optimalschool.edu', '3012233445', 'Cl 20 #8-15', '2012-03-15', 'estu123'),
('estudiante', 'Valentina', 'Sofía', 'Gómez', 'Ríos', 'TI', '1105005005', 'valentina.gomez@optimalschool.edu', '3025544332', 'Cl 33 #4-22', '2011-08-25', 'estu456'),
('acudiente', 'María', 'Elena', 'Ortiz', 'Jiménez', 'CC', '1006006006', 'maria.ortiz@optimalschool.edu', '3134478596', 'Cra 22 #18-12', '1987-11-30', 'acu123'),
('acudiente', 'Jorge', 'Luis', 'Gómez', 'Mendoza', 'CC', '1007007007', 'jorge.gomez@optimalschool.edu', '3149987765', 'Cl 40 #22-17', '1982-01-10', 'acu456');

SELECT * FROM Usuario;

-- Update
UPDATE Usuario
SET correo = 'laura.perez@colegiosangabriel.edu.co'
WHERE id_usuario = 1;

SELECT * FROM usuario where id_usuario = 1;

-- Delete
DELETE FROM Estudiante
WHERE id_estudiante = 1;

SELECT * FROM estudiante where id_Estudiante = 1;

-- Select
SELECT 
    CONCAT(u.primer_nombre, ' ', u.primer_apellido) AS nombre_estudiante,
    c.nombre_curso,
    c.grado,
    e.estado,
    u.correo
FROM Estudiante e
JOIN Usuario u ON e.id_estudiante = u.id_usuario
JOIN Matricula m ON e.id_estudiante = m.id_estudiante
JOIN Curso c ON m.id_curso = c.id_curso;
