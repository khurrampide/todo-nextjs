"use client";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

async function DeleteItem() {
//   console.log(item);
  try {
    const res = await fetch("http://localhost:3000/api/todo", {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data)

    if (!res.ok) {
      console.log("Couldn't fetch ToDO API");
      throw new Error("Couldn't fetch ToDO API");
    } else {
      //return data;
      console.log(data)
    }
  } catch (error) {
    console.log((error as { message: string }).message);
  }
}

const DeleteTodo = (id: number) => {
  return (
    <div>
      <RiDeleteBinLine key="1" onClick={() => DeleteItem()} />
    </div>
  );
};

export default DeleteTodo;
