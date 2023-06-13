//import { Todo } from "@/lib/drizzle";
import React from "react";
import { NextRequest, NextResponse } from "next/server";
import { todoTable, Todo, NewTodo } from "@/lib/drizzle";
import { db } from "@vercel/postgres";
import DeleteTodo from "./DeleteTodo";

const getData = async () => {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/todo", {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (!res.ok) {
      console.log("Couldn't fetch ToDO API");
      throw new Error("Couldn't fetch ToDO API");
    } else {
      return data;
    }
  } catch (error) {
    console.log((error as { message: string }).message);
  }
};



const TodoList = async () => {
  const res: { data: Todo[] } = await getData();

  return (
    <div className="max-h-[370px] overflow-auto px-4 mb-10  mt-4">
      {res.data.map((item, i) => (
        <div key={item.id} className=" flex items-center rounded-lg p-3 gap-x-4 my-3 bg-blue-200 ">
          {/* Circle */}
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <div className="flex justify-between w-full bg-green-200">
            {/* Text */}
            <div>{item.task}</div>
            {/* Delete */}
            {/* <DeleteTodo id={i}/> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
