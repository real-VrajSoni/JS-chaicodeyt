class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get password() {
        return `${this._password}vrajsoni`;
    }

    set password(value) {
        this._password = value.toUpperCase();
    }

    get email() {
        return this._email.toUpperCase();
    }
    set email(value) {
        this._email = value;
    }
}

const vraj = new User("vraj@ai.com", "unicorn");
console.log(vraj.password);
console.log(vraj.email);
