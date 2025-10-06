-- 1: Muestra los estudiantes
DELIMITER // 

CREATE procedure VerEstudiantes() 
BEGIN
SELECT e.id_estudiante, concat(u.primer_nombre, ' ', IFNULL(u.segundo_nombre, '')) 
AS nombres, CONCAT(u.primer_apellido, ' ', IFNULL(u.segundo_apellido, '')) 
AS apellidos, e.fecha_ingreso, e.estado FROM estudiante e 
JOIN usuario u ON e.id_estudiante = u.id_usuario;
END //

DELIMITER ;

CALL VerEstudiantes();

-- 2: Muestra los estudiantes activos
DELIMITER //

CREATE PROCEDURE mostrar_estudiantes_activos()
BEGIN
    SELECT * FROM estudiante WHERE estado = 'activo';
END //

DELIMITER ;


-- 3: Inserta estudiantes
DELIMITER //

CREATE PROCEDURE insertar_estudiante(
    IN p_primer_nombre VARCHAR(50),
    IN p_segundo_nombre VARCHAR(50),
    IN p_primer_apellido VARCHAR(50),
    IN p_segundo_apellido VARCHAR(50),
    IN p_correo VARCHAR(100),
    IN p_contrasena VARCHAR(100),
    IN p_fecha_ingreso DATE,
    IN p_estado ENUM('activo', 'inactivo')
)
BEGIN
    DECLARE nuevo_id INT;

    -- 1️ Insertar primero en la tabla Usuario
    INSERT INTO usuario (rol, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, contrasena)
    VALUES ('estudiante',p_primer_nombre, p_segundo_nombre, p_primer_apellido, p_segundo_apellido, p_correo, p_contrasena);

    -- 2️ Guardar el id generado automáticamente
    SET nuevo_id = LAST_INSERT_ID();

    -- 3️ Insertar el estudiante usando ese id
    INSERT INTO estudiante (id_estudiante, fecha_ingreso, estado)
    VALUES (nuevo_id, p_fecha_ingreso, p_estado);

END //

DELIMITER ;

CALL insertar_estudiante(
    'Laura', 
    'María', 
    'Gómez', 
    'Ríos', 
    'laura.gomez@example.com', 
    '1234', 
    '2025-10-06', 
    'activo'
);

-- 4: Actualiza el estado de estudiante
DELIMITER //

CREATE PROCEDURE actualizar_estado_estudiante(
    IN p_id_estudiante INT,
    IN p_nuevo_estado ENUM('activo', 'inactivo')
)
BEGIN
    UPDATE estudiante
    SET estado = p_nuevo_estado
    WHERE id_estudiante = p_id_estudiante;
END //

DELIMITER ;

CALL actualizar_estado_estudiante(15, 'inactivo');

-- 5: Muestra los profesores que dictan cierta materia
DELIMITER //

CREATE PROCEDURE listar_profesores_por_asignatura(
    IN p_nombre_asignatura VARCHAR(50)
)
BEGIN
    SELECT p.id_profesor,
           CONCAT(u.primer_nombre, ' ', u.primer_apellido) AS nombre_profesor,
           a.nombre_asignatura
    FROM profesor p
    JOIN usuario u ON p.id_profesor = u.id_usuario
    JOIN profesor_curso_asignatura pca ON p.id_profesor = pca.id_profesor
    JOIN asignatura a ON pca.id_asignatura = a.id_asignatura
    WHERE a.nombre_asignatura = p_nombre_asignatura;
END //

DELIMITER ;

CALL listar_profesores_por_asignatura('Matemáticas');
