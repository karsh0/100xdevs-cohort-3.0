type UserType = {
    name:string,
    age: number,
    email:string,
}

interface User{
    course: number[],
    userId: number
}

function DisplayUser(u: UserType){
    console.log("name: " + u.name)
    console.log("age: " + u.age)
}

const user: UserType = {
    name:"karan",
    age: 20,
    email: "email@gmail.com"
}

DisplayUser(user)
