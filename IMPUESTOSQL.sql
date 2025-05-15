-- Crear base de datos
CREATE DATABASE impuestos;
GO
USE impuestos;
-- Tabla Estado
CREATE TABLE Estado (
    IdEstado INT IDENTITY(1,1) NOT NULL,
    Nombre VARCHAR(100) NOT NULL,
    CONSTRAINT PK_Estado PRIMARY KEY(IdEstado)
);
GO
-- Tabla Persona
CREATE TABLE Persona (
    IdPerson INT IDENTITY(1,1) NOT NULL,
    Estado VARCHAR(50) NOT NULL CHECK (Estado IN ('activo','inactivo')),
    Cedula BIGINT UNIQUE NOT NULL,
    Nombre1 VARCHAR(50) NOT NULL,
    Nombre2 VARCHAR(50) NULL,
    Apellido1 VARCHAR(50) NOT NULL,
    Apellido2 VARCHAR(50) NULL,
    Telefono BIGINT NOT NULL,
    Correo VARCHAR(100) NOT NULL,
    Direccion VARCHAR(100) NOT NULL,  
    CONSTRAINT PK_Persona PRIMARY KEY(IdPerson)
);
GO
--Tabla User
CREATE TABLE Usuario (
	IdUser INT IDENTITY (1,1) NOT NULL,
	Usuario VARCHAR(50) NOT NULL,
    Contraseña VARCHAR(50) NOT NULL,
	Rol VARCHAR (10) NOT NULL,
	IdPersonfk INT NOT NULL,
    CONSTRAINT PK_User PRIMARY KEY(IdUser),
	CONSTRAINT FK_Personfk FOREIGN KEY (IdPersonfk) REFERENCES Persona(IdPerson),
	CHECK (Rol IN('Admin','Parther'))
)
GO
-- Tabla Vehiculo
CREATE TABLE Vehiculo (
    IdVehiculo INT IDENTITY(1,1) NOT NULL,
    Nombre VARCHAR(50) NOT NULL CHECK (Nombre IN ('Moto','Carro')),
    Placa VARCHAR(10) UNIQUE NOT NULL,
    Cilindraje INT NOT NULL,
    CONSTRAINT PK_Vehivulo PRIMARY KEY(IdVehiculo),
);
GO
-- Tabla Predial
CREATE TABLE Predial (
    IdPredial INT IDENTITY(1,1) NOT NULL,
    Direccion VARCHAR(50) NOT NULL,
    Metros_Cuadrados INT NOT NULL,
    CONSTRAINT PK_Predial PRIMARY KEY(IdPredial),
);
GO
-- Tabla Tipo_De_Impuesto
CREATE TABLE Tipo_De_Impuesto (
    IdTipoImpu INT IDENTITY(1,1) NOT NULL,
	IdVehiculofk INT NULL,
	IdPredialfk INT NULL,
    Nombre VARCHAR(50) NOT NULL,
    CONSTRAINT PK_Tipo_Impu PRIMARY KEY(IdTipoImpu),
    CONSTRAINT FK_Vehiculofk FOREIGN KEY (IdVehiculoFk) REFERENCES Vehiculo(IdVehiculo),
	CONSTRAINT FK_Predialfk FOREIGN KEY (IdPredialFk) REFERENCES Predial(IdPredial)
);
GO

-- Tabla Impuesto
CREATE TABLE Impuesto (
    IdImpu INT IDENTITY(1,1) NOT NULL,
    Fecha_Limite DATE NOT NULL,
    Total MONEY NOT NULL,
    IdPersonFk INT NOT NULL,
    IdTipoImpuestoFk INT NOT NULL,
    CONSTRAINT PK_Impu PRIMARY KEY(IdImpu),
    CONSTRAINT FK_Person FOREIGN KEY (IdPersonFk) REFERENCES Persona(IdPerson),
    CONSTRAINT FK_impue_TipoImpu FOREIGN KEY (IdTipoImpuestoFk) REFERENCES Tipo_De_Impuesto(IdTipoImpu)
);
GO
-- Tabla Notificacion
CREATE TABLE Notificacion (
    IdNotificacion INT IDENTITY(1,1) NOT NULL,
    IdImpuFk INT NOT NULL,
    FechaEnvio DATE NOT NULL,
    Mensaje VARCHAR(200) NOT NULL,
    CONSTRAINT PK_Notificacion PRIMARY KEY (IdNotificacion),
    CONSTRAINT FK_Notificacion_Impu FOREIGN KEY (IdImpuFk) REFERENCES Impuesto(IdImpu)
);
GO
-- Tabla Factura
CREATE TABLE Factura (
    IdFactura INT IDENTITY(1,1) NOT NULL,
    FechaPago DATE NOT NULL,
    IdImpuFk INT NOT NULL,
    CONSTRAINT PK_Factura PRIMARY KEY(IdFactura),
    CONSTRAINT FK_Factura_Impu FOREIGN KEY (IdImpuFk) REFERENCES Impuesto(IdImpu)
);
GO
-- Tabla Historial
CREATE TABLE Historial (
    IdHistorial INT IDENTITY(1,1) NOT NULL,
    IdFacturaFk INT NOT NULL,
    Fecha DATE NOT NULL,
    CONSTRAINT PK_Historial PRIMARY KEY(IdHistorial),
    CONSTRAINT FK_Historial_Factura FOREIGN KEY (IdFacturaFk) REFERENCES Factura(IdFactura)
);
GO
-- Tabla Pago
CREATE TABLE Pago (
    IdPago INT IDENTITY(1,1) NOT NULL,
    MontoPagado MONEY NOT NULL, 
    IdFacturaFk INT NOT NULL,
    CONSTRAINT PK_Pago PRIMARY KEY(IdPago),
    CONSTRAINT FK_Pago_Factura FOREIGN KEY (IdFacturaFk) REFERENCES Factura(IdFactura)
);
GO
-- Tabla DetalleFactura
CREATE TABLE DetalleFactura (
    IdDetalle INT IDENTITY(1,1) NOT NULL,
    IdEstadoFk INT NOT NULL,
    IdFacturaFk INT NOT NULL,
    MontoTotal MONEY NOT NULL,
    FechaPago DATE NOT NULL,
    MetodoParaPagar VARCHAR(50) NOT NULL,  
    CONSTRAINT PK_Detalle PRIMARY KEY(IdDetalle),
    CONSTRAINT FK_Detalle_Estado FOREIGN KEY (IdEstadoFk) REFERENCES Estado(IdEstado),
    CONSTRAINT FK_Detalle_Factura FOREIGN KEY (IdFacturaFk) REFERENCES Factura(IdFactura)
);


-- Insertar datos en la tabla Estado
INSERT INTO Estado (Nombre)
VALUES
('pagado'),
('pendiente'),
('rechazado');
select*from Estado

select*from Tipo_De_Impuesto


-- Insertar datos en la tabla Persona
INSERT INTO Persona (Estado, Cedula, Nombre1, Nombre2, Apellido1, Apellido2, Telefono, Correo, Direccion)
VALUES
('activo', 12345678901, 'Juan', 'Carlos', 'Pérez', 'Gómez', 3001234567, 'juanperez@mail.com', 'Calle 123'),
('inactivo', 23456789012, 'Ana', 'Lucía', 'Martínez', 'Lopez', 3012345678, 'analucia@mail.com', 'Calle 456'),
('activo', 34567890123, 'Carlos', 'Alberto', 'Gómez', 'Ramos', 3023456789, 'carlosgomez@mail.com', 'Calle 789'),
('inactivo', 45678901234, 'Marta', 'Isabel', 'Vásquez', 'Martínez', 3034567890, 'marta@mail.com', 'Calle 101'),
('activo', 56789012345, 'Luis', 'Fernando', 'Ruiz', 'Torres', 3045678901, 'luisruiz@mail.com', 'Calle 202'),
('inactivo', 67890123456, 'Julia', 'María', 'Sánchez', 'Fernández', 3056789012, 'julia@mail.com', 'Calle 303');

select*from Persona

INSERT INTO Usuario (Usuario,Contraseña,Rol,IdPersonfk)
VALUES
('JCarlos','3211','Parther',1),
('ALucia','3211','Parther',2),
('CAlberto','3211','Parther',3),
('MIsabel','3211','Parther',4),
('LFernando','3211','Admin',5),
('JMaria','3211','Parther',6);


-- Insertar datos en la tabla Vehiculo
INSERT INTO Vehiculo (Nombre, Placa, Cilindraje)
VALUES
('Carro ', 'ABC12A', 1600),
('Carro ', 'XYZ23B', 1800),
('Carro',  'DEF34C', 1400),
('Carro',  'GHI45D', 1200),
('Carro',  'JKL56E', 2000),
('Moto',  'KWK07V', 399),
('Moto',  'HRH08W', 150),
('Moto',  'TNT09X', 135),
('Moto',  'RNC10Y', 346);
-- Ver los datos insertados
SELECT * FROM Vehiculo;


select*from Vehiculo



-- Insertar datos en la tabla Predial
INSERT INTO Predial (Direccion, Metros_Cuadrados)
VALUES
('Calle 1',  120),
('Calle 2',  150),
('Calle 3',  100),
('Calle 4',  180),
('Calle 5',  200),
('Calle 6', 250),
('Calle 7',  130),
('Calle 8',  160),
('Calle 9',  110),
('Calle 10',  140),
('Calle 11',  170),
('Calle 12',  190),
('Calle 13',  220),
('Calle 14',  240),
('Calle 15',  210);

INSERT INTO Tipo_De_Impuesto (IdVehiculofk,IdPredialfk,Nombre )
VALUES
(1,NULL,'Impuesto de Vehículo'), 
(NULL,2,'Impuesto Predial');

select*from Predial
select*from Tipo_De_Impuesto

INSERT INTO Impuesto (Fecha_Limite, Total, IdPersonFk, IdTipoImpuestoFk)
VALUES
('2025-12-31', 500.00, 1, 1),  
('2025-11-30', 400.00, 2, 2), 
('2025-10-31', 300.00, 3, 1),  
('2025-09-30', 600.00, 4, 1), 
('2025-08-31', 700.00, 5, 2),  
('2025-07-31', 800.00, 6, 1); 

select*from Impuesto

-- Insertar datos en la tabla Notificacion
INSERT INTO Notificacion (IdImpuFk, FechaEnvio, Mensaje)
VALUES
(1, '2025-12-15', 'Notificación de impuesto IVA: El pago debe realizarse antes del 31 de diciembre.'),
(2, '2025-11-15', 'Notificación de impuesto sobre la Renta: El pago debe realizarse antes del 30 de noviembre.'),
(3, '2025-10-15', 'Notificación de impuesto de Vehículo: El pago debe realizarse antes del 31 de octubre.'),
(4, '2025-09-15', 'Notificación de impuesto IVA: El pago debe realizarse antes del 30 de septiembre.'),
(5, '2025-08-15', 'Notificación de impuesto sobre la Renta: El pago debe realizarse antes del 31 de agosto.'),
(6, '2025-07-15', 'Notificación de impuesto de Vehículo: El pago debe realizarse antes del 31 de julio.');
select*from Notificacion

-- Insertar datos en la tabla Factura
INSERT INTO Factura (FechaPago, IdImpuFk)
VALUES
('2025-12-20', 1),
('2025-11-20', 2),
('2025-10-20', 3),
('2025-09-20', 4),
('2025-08-20', 5),
('2025-07-20', 6);
select*from Factura

-- Insertar datos en la tabla Historial
INSERT INTO Historial (IdFacturaFk, Fecha)
VALUES
(1, '2025-12-01'),
(2, '2025-11-01'),
(3, '2025-10-01'),
(4, '2025-09-01'),
(5, '2025-08-01'),
(6, '2025-07-01');

select*from Historial


-- Insertar datos en la tabla Pago
INSERT INTO Pago (MontoPagado, IdFacturaFk)
VALUES
(500.00, 1),
(400.00, 2),
(300.00, 3),
(600.00, 4),
(700.00, 5),
(800.00, 6);
select*from Pago

-- Insertar datos en la tabla DetalleFactura
INSERT INTO DetalleFactura (IdEstadoFk, IdFacturaFk, MontoTotal, FechaPago, MetodoParaPagar)
VALUES
(1, 1, 500.00, '2025-12-20', 'Tarjeta de Crédito'),
(2, 2, 400.00, '2025-11-20', 'Efectivo'),
(3, 3, 300.00, '2025-10-20', 'Transferencia Bancaria'),
(2, 4, 600.00, '2025-09-20', 'Tarjeta de Crédito'),
(1, 5, 700.00, '2025-08-20', 'Efectivo'),
(3, 6, 800.00, '2025-07-20', 'Transferencia Bancaria');

select*from DetalleFactura

ALTER PROCEDURE VERIMPUESTO
@ID INT,
@PLACA VARCHAR (50),
@DIRECCION VARCHAR(100)
AS
BEGIN
	select I.Fecha_Limite,I.Pago, T.Nombre as Nombre, V.Nombre AS NombreVehiculo, V.Placa, V.Cilindraje, P.Direcion, P.Metros_Cuadrados from 
	Impuesto I inner join Tipo_De_Impuesto T on I.IdTipoImpuestoFk = T.IdTipoImpu 
	left join Vehiculo V on T.IdVehiculofk = V.IdVehiculo
	left join Predial P on T.IdPredialfk = P.IdPredial
	WHERE (V.Placa=@PLACA OR P.Direcion= @DIRECCION) AND I.IdPersonFk=@ID
END
EXEC VERIMPUESTO @ID = 1, @PLACA = 'ABC12A', @DIRECCION = '';
EXEC VERIMPUESTO @ID = 1, @PLACA = '', @DIRECCION = 'Calle 2';


select*from Impuesto I inner join Tipo_De_Impuesto T on I.IdTipoImpuestoFk = T.IdTipoImpu 
	left join Vehiculo V on T.IdVehiculofk = V.IdVehiculo
	left join Predial P on T.IdPredialfk = P.IdPredial
	WHERE (V.Placa='ABC12A' OR P.Direcion= '') AND I.IdPersonfk=1


select*from Persona
select*from Impuesto
select*from Tipo_De_Impuesto
select*from Vehiculo
select*from Predial


create procedure Estado_factura
@param1 int
AS
BEGIN
	SELECT Estado.Nombre,Factura.FechaPago,DetalleFactura.FechaPago, DetalleFactura.MetodoParaPagar,DetalleFactura.MontoTotal
	from Estado inner join DetalleFactura  ON IdEstado = IdEstadoFk inner join Factura on IdFactura = IdFacturaFk where IdEstado=@param1;
END;
SELECT*FROM Estado

EXEC  Estado_factura 1




create procedure Historial_impuesto
@param1 int
AS
BEGIN
	SELECT T.Nombre,I.Fecha_Limite,D.FechaPago,D.MetodoParaPagar,D.MontoTotal,E.Nombre
	from Tipo_De_Impuesto T inner join Impuesto I ON T.IdTipoImpu= I.IdTipoImpuestoFk inner join Persona P ON P.IdPerson = I.IdPersonFk inner join Factura F on I.IdImpu = F.IdImpuFk inner join DetalleFactura D on F.IdFactura = D.IdFacturaFk inner join Estado E on D.IdEstadoFk = E.IdEstado  where P.IdPerson=@param1;
END;
 select *from Historial

 EXEC Historial_impuesto 3




 create trigger proteger_datos
 on Persona INSTEAD OF DELETE
 AS
 BEGIN
  UPDATE Persona
  set Estado = 'inactivo'
  WHERE IdPerson in (select IdPerson from deleted);
  END
  

  select*from Persona
  delete from Persona where IdPerson=1
   


CREATE PROCEDURE Actuali_De_Email
@param1 INT,
@param2 VARCHAR(100)
AS
BEGIN
	UPDATE Persona
	SET Correo = @param2
	WHERE IdPerson=@param1;
END

EXEC Actuali_De_Email 1, 'juanp@gmail.com'




CREATE PROCEDURE Actualizacio_De_Telefono
@param1 INT,
@param2 BIGINT
AS
BEGIN
	UPDATE Persona
	SET Telefono = @param2
	WHERE IdPerson=@param1;
END

CREATE PROCEDURE Actualizacion_De_Contraseña
@param1 INT,
@param2 VARCHAR(50)
AS
BEGIN
	UPDATE Usuario
	SET Contraseña = @param2
	WHERE IdPersonfk = @param1;
END

CREATE TRIGGER generador_notifi
ON Impuesto
AFTER INSERT
AS
BEGIN
    INSERT INTO Notificacion (IdImpuFk, FechaEnvio, Mensaje)
    SELECT 
        i.IdImpu, 
        DATEADD(DAY, -15, i.Fecha_Limite), -- Enviar notificación 15 días antes de la fecha límite
        CONCAT('Recordatorio: Su impuesto vence el ', FORMAT(i.Fecha_Limite, 'yyyy-MM-dd'), '.')--y aqui enviamos el recordatorio
    FROM inserted i;
END;




CREATE TRIGGER Actualizar_estado_factura
ON Pago
AFTER INSERT
AS
BEGIN

    UPDATE df --apodo pa detalle de factura
    SET IdEstadoFk = 2  -- 2 significa 'Pagado'
    FROM DetalleFactura df
    INNER JOIN inserted i ON df.IdFacturaFk = i.IdFacturaFk
    INNER JOIN (
        SELECT IdFacturaFk, SUM(MontoPagado) AS TotalPagado
        FROM Pago
        GROUP BY IdFacturaFk
    ) p ON df.IdFacturaFk = p.IdFacturaFk
    WHERE p.TotalPagado >= df.MontoTotal;  -- Se cambia el estado solo si el pago es concretao si sae
END;
GO

CREATE PROCEDURE Insertar_Persona
    @Estado VARCHAR(50),
    @Cedula BIGINT,
    @Nombre1 VARCHAR(50),
    @Nombre2 VARCHAR(50),
    @Apellido1 VARCHAR(50),
    @Apellido2 VARCHAR(50),
    @Telefono BIGINT,
    @Correo VARCHAR(100),
    @Direccion VARCHAR(100),
    @Usuario VARCHAR(50),
    @Contraseña VARCHAR(50)
AS
BEGIN
    INSERT INTO Persona (Estado, Cedula, Nombre1, Nombre2, Apellido1, Apellido2, Telefono, Correo, Direccion, Usuario, Contraseña)
    VALUES (@Estado, @Cedula, @Nombre1, @Nombre2, @Apellido1, @Apellido2, @Telefono, @Correo, @Direccion, @Usuario, @Contraseña);
END;

EXEC Insertar_Persona 
    @Estado = 'activo', 
    @Cedula = 1234567890, 
    @Nombre1 = 'Juan', 
    @Nombre2 = 'Carlos', 
    @Apellido1 = 'Perez', 
    @Apellido2 = 'Lopez', 
    @Telefono = 5551234, 
    @Correo = 'juan.perez@example.com', 
    @Direccion = 'Calle Falsa 123', 
    @Usuario = 'juanperez', 
    @Contraseña = 'contraseña123';

	select*from Persona

create procedure actu_metros_cuad 
@idpredial int,
@metrosc int
as
begin 
update Predial
set Metros_Cuadrados=@metrosc where IdPredial=@idpredial
end

	select*from Predial

	exec actu_metros_cuad 1,340



select * FROM Persona
select * from Impuesto
SELECT * FROM Tipo_De_Impuesto
select*from Vehiculo

ALTER PROCEDURE MostrarImpuestosVehiculo
	@id INT
AS
BEGIN
	
	SELECT 
		I.Fecha_Limite, 
		I.Pago, 
		T.Nombre, 
		V.Cilindraje,
		V.Nombre AS NombreVehiculo,
		V.Placa 
	FROM Impuesto I 
	INNER JOIN Tipo_De_Impuesto T ON I.IdTipoImpuestoFk = T.IdTipoImpu 
	INNER JOIN Vehiculo V ON T.IdVehiculofk = V.IdVehiculo 
	WHERE I.IdPersonFk = @id
END


EXEC MostrarImpuestosVehiculo 1

ALTER PROCEDURE MostrarImpuestosPredial
	@id INT
AS
BEGIN
	
	SELECT 
		I.Fecha_Limite, 
		I.Pago, 
		T.Nombre, 
		P.Direcion,
		P.Metros_Cuadrados
	FROM Impuesto I 
	INNER JOIN Tipo_De_Impuesto T ON I.IdTipoImpuestoFk = T.IdTipoImpu 
	INNER JOIN Predial P ON T.IdPredialfk = P.IdPredial 
	WHERE I.IdPersonFk = @id
END
EXEC MostrarImpuestosPredial 1