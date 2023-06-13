"use client";
import { NewTodo } from "@/lib/drizzle";
import Image from "next/image";
import React, { useState } from "react";
import {useRouter} from 'next/navigation'

const AddTodo = () => {
  const [task, setTask] = useState<NewTodo | null>(null);
  console.log(task);
  const {refresh} = useRouter();

  const handleSubmit = async () => {

    try {
      if (task) {
        const res = await fetch("/api/todo", {
          method: "POST",
          body: JSON.stringify({
            task: task.task,
          }),
        });
        console.log(res.ok)
        refresh();
      }
    } catch (error) {console.log("error")}
  };

  return (
    <div>
      <form className="w-full flex gap-x-6">
        <input
          onChange={(e) => setTask({ task: e.target.value })}
          type="text"
          className=" w-full rounded-full py-3 px-6 focus:outline-secondary"
        />
        <button type="button" onClick={handleSubmit} className="shrink-0  bg-gradient-to-b from-primary to-secondary  p-4 rounded-full">
          <Image src={"/Vector.png"} alt="Image" width={20} height={20} />
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
