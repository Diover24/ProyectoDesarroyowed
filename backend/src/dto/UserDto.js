class userDto {
    constructor(IdUser, User, Password, Rol, IdPerson) {
        this._IdUser = IdUser;
        this._User = User;
        this._Password = Password;
        this._Rol = Rol;
        this._IdPerson = IdPerson;
    }

    // Getter 
    get IdUser() {
        return this._IdUser;
    }

    get User() {
        return this._User;
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
    set IdUser(value) {
        this._IdUser = value;
    }

    set User(value) {
        this._User = value;
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
const UserDto = new userDto();

// Exportación por defecto
export default UserDto;