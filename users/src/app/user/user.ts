export class User {
    constructor(
       public  gender: string,
       public  name: Name,
       public  location: Location,
       public  email: string,
       public  login: Login,
       public  dob: Dob,
       public  registered: Registered,
       public  phone: string,
       public  cell: string,
       public  id: Id,
       public  picture: Picture,
       public  nat: string
    ) { }

}
export class Name {
    constructor(
        public title: string,
        public first: string,
        public last: string
    ) {}
}

export class Coordinate {
    constructor(
        public latitude: string,
        public longitude: string
    ) {}
}

export class Timezone {
    constructor(
        public offset: string,
        public description: string
    ) {}
}

export class Location {
    constructor(
        public street: string,
        public city: string,
        public state: string,
        public postcode: number,
        public coordinates: Coordinate,
        public timezone: Timezone
    ) {}
}

export class Login {
    constructor(
        public  uuid: string,
        public username: string,
        public password: string,
        public salt: string,
        public md5: string,
        public sha1: string,
        public sha256: string
    ) {}
}

export class Dob {
    constructor(
        public date: string,
        public age: number
    ) {}
}

export class Registered {
    constructor(
        public date: string,
        public age: number
    ) {}
}

export class Id {
    constructor(
        public name: string,
        public value?: any
    ) {}
}

export class Picture {
    constructor(
        public large: string,
        public medium: string,
        public thumbnail: string
    ) {}
}