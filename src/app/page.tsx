"use client";

import Formtodo from "@/components/formtodo";
import TodoItem from "@/components/TodoItem";
import axios from "axios";
import { useEffect, useState } from "react";


interface Todo {
  _id: string;
  title: string;
  description: string;
}
export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get("/api/todo");
        setTodos(res.data);
      } catch (error: any) {
        console.error("Error fetching todos:", error.message);
      }
    };

    fetchTodos();
  }, [todos]);

  const handleEdit = async (id: string) => {
    try {

      console.log("Todo updated successfully:", id);

    } catch (error) {
      console.error("Error editing todo:", error);
    }
  };

  const handleDelete = async (id: string) => {
    console.log("Delete todo:", id);
    const res = await axios.delete(`/api/todo/${id}`)
    console.log("Todo deleted successfully:", res.data);
  };


  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen gap-3 sm:py-5 bg-black font-sans">
      <header className="row-start-1 text-center">
        <h1 className="text-3xl font-semibold text-gray-500">Todo Application</h1>
        <p className="text-gray-600">Manage your tasks efficiently</p>
      </header>

      <main className="row-start-2 flex items-center justify-center w-full max-w-lg">
        <Formtodo />
      </main>

      <hr />
      <div className="p-4 flex flex-row gap-4">
        {todos && todos.length > 0 ? (
          todos.map(todo => (
            <TodoItem
              key={todo._id}
              todo={todo}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p className="text-white">No todos available</p>
        )}
      </div>
    </div>
  );
}
