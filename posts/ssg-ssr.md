---
title: "Introduction to Functional Programming"
date: "2021-02-24"
---

[Read on Hasnode](https://www.google.comhttps://sayurikamble.hashnode.dev/introduction-to-functional-programming)

In Functional Programing, we want express our whole program in terms of functions.
Functional Programing is Declarative. Which means we focus more on **what to do** instead of **How to do**

First lets understand why Functional Programming is so important.
Functional Programming enables us to

- Write re-useable code.
- Debug easily.
- Read better.

> Functions are 1st Class Citizens
> because functions can be :

- Assigned to variables.
- Can be added to objects and arrays as well .
- Sent to other functions as a argument.
- Can be Returned from other functions.

Let's get right into it.

**Non Functional Way**

```let name = "Sayuri" ;
let message = "Hey, fellow devs, I am " ;
console.log(message + name)

---> Hey, fellow devs, I am Sayuri
```

**Functional Way**

```
function message(name) {
    return "Hey, fellow devs, I am " + name ;
}

console.log(message("Sayuri")) ;

---> Hey, fellow devs, I am Sayuri
```

### --> Pure Functions

> A Pure Function is a function which,
> Given the same input, will always return the same output.

A Pure Function :

- Takes in at least 1 parameter.
- Return Something (A value or a function).
- Does not mutates any arguments.

Not Pure

```
let name = "Sayuri" ;

function message(){
    console.log("Hey, fellow devs, I am " + name )
}
```

The above code is not pure because

- --> It is not taking **name** as an parameter.
- --> It's dealing with something in the global scope.
- --> Also it not having a **return** value.

Pure Functions have no _side effects_ which means it cannot alter anything outside the function.

**Pure Function**

```
function message(name) {
   return "Hey, fellow devs, I am " + name
}
```

### Higher Order Function

> A higher order function is a function that takes a function as an argument, or returns a function or does both.

```
const greet = function takeName (name){
    return function message(msg){
        return msg  + name
    }
}

greet("Sayuri ")("Hey, fellow devs, I am ")

--> Hey, fellow devs, I am Sayuri
```

### Immutable Code

Immutability means can't be changed.

**Mutation --> (Bad)**

```
const code= [ "Javascript", "Python", "React" ]
code[ 1 ] = "Node"
console.log(code)

--> [ "Javascript", "Node", "React" ]
```

**Immutation**

```const code = [ "Javascript", "Python", "React" ]
const code2 = code.map(lang=> {
  if(lang=== 'Python') {
    lang= 'Node';
  }
  return lang;
});

console.log(code2)

--> [ "Javascript", "Node", "React" ]
```

Last but not the Least
Do not Iterate using for or while/loops --> Use Map, Reduce, Filter etc.

Let me your thoughts.
