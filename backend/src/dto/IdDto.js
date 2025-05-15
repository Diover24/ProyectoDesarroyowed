class idDto {
    constructor(IdVehiculo, IdPredial, Password, Rol, IdPerson) {
        this._IdVehiculo = IdVehiculo;
        this._IdPredial = IdPredial;
        this._Password = Password;
        this._Rol = Rol;
        this._IdPerson = IdPerson;
    }

    // Getter 
    get IdVehiculo() {
        return this._IdVehiculo;
    }

    get IdPredial() {
        return this._IdPredial;
    }

    get Password() {
        return this._Password;
    }

    get Rol() {
        return this._Rol;
    }

    get IdPerson() {
        return this._IdPerson;
    }
    // Setter 
    set IdVehiculo(value) {
        this._IdVehiculo = value;
    }

    set IdPredial(value) {
        this._IdPredial = value;
    }

    set Password(value) {
        this._Password = value;
    }

    set Rol(value) {
        this._Rol = value;
    }

    set IdPerson(value) {
        this._IdPerson = value;
    }
}
const IdDto = new idDto();

// Exportación por defecto
export default IdDto;