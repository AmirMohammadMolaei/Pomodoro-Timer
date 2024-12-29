// import { useState } from "react";
// import { Fragment } from "react/jsx-runtime";
import { BoxTimer } from "../components/common";

// interface Person {
//   firstName: string;
//   lastName: string;
//   getFullName(): string;
// }

enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

const App = () => {
  // const message: string = "Hello world!";
  // console.log(message);

  // const Calculation = (num1: number, num2: number): number => {
  //   const result = num1 + num2;
  //   console.log(result)
  //   return result;
  // };
  // Calculation(5, 10);

  // const obj: Person = {
  //   firstName: "John",
  //   lastName: "Doe",
  //   getFullName(): string {
  //     return this.firstName + " " + this.lastName;
  //   },
  // };
  // console.log(obj.getFullName())

  // console.log(Direction.Left)

  // const GenericType = (arr: T[]): void => {
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log(arr[i]);
  //   }
  // };

  // GenericType([1,2,3])
  // GenericType(["a","b","c"])

  // const [unionType, setUnionType] = useState<string | number>()
  // setUnionType("Hello, world!")
  // console.log("String value: " + unionType)

  // string
  // number
  // boolean
  // symbol => const UNIQUE_KEY = Symbol()
  // null
  // object
  // void

  // Tuple Type
  //  const tuple: [string, number] = ["Hello, world!", 2]
  //  console.log(tuple)

  // const [pName, setPName] = useState<string>()
  // const [pAge, setPAge] = useState<number>()
  // setPName("John Doe");
  // setPAge(35);

  // console.log(`Name of the person is ${pName} and his age is ${pAge}`);

  // const nums : number[] = [1000, 2000, 3000, 4000]

  // for (const j in nums) {
  //   console.log(nums[j])
  // }

  // const a: [number, string] = [20, "Amir"];
  // const [score, name] = a;
  // console.log(score);
  // console.log(name);

  // const addFun: (x: number, y: number) => number = function (
  //   x: number,
  //   y: number
  // ): number {
  //   return x + y;
  // };

  // Optional Parameters
  // const addFun = (x: number, y: number, z?: number): number => {
  //   if (z) {
  //     return x + y + z;
  //   } else {
  //     return x + y;
  //   }
  // };

  // Default Parameters
  // const addFun = (x: number, y: number, z: number = 30): number => {
  //   return x + y + z;
  // };

  // const addFun = new Function("x", "y", "return x + y");

  // console.log(addFun(5, 2))

  // Literal Types
  // type Direction = "North" | "East" | "South" | "West";

  // Anonymous Function
  // const addFun: (x: number, y: number) => number = function (
  //   x: number,
  //   y: number
  // ) {
  //   return x + y;
  // };
  // console.log(addFun(6, 2))

  // Multiple Interface Inheritance
  // interface Head {
  //   head: string;
  // }

  // interface Body {
  //   body: string;
  // }

  // interface Leges {
  //   leg: string;
  // }

  // interface Person extends Head, Body, Leges {}

  // interface Todo {
  //   title: string;
  //   description: string;
  // }

  // type TodoPick = Pick<Todo, "title">;
  // type TodoPick = Partial<Todo>;

  // const myTodo: TodoPick = { title: "Write a code" };

  // console.log(myTodo.title);

  console.log(Direction.Left)

  return <BoxTimer />;
};

export default App;
