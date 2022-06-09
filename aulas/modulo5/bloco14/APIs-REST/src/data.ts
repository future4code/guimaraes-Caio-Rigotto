enum AUTH {
    ADMIN="ADMIN",
    NORMAL="NORMAL"
}

export type USERS = {
    id:number,
    name:string,
    email:string,
    type:AUTH,
    age:number
}

export let users:USERS[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: AUTH.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: AUTH.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: AUTH.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: AUTH.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: AUTH.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: AUTH.ADMIN,
        age: 60
    }
]