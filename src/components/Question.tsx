"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Question() {
  const [response, setResponse] = useState();
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      question: "",
    },
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    const res = await fetch("/api/case", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const json = await res.json();

    setResponse(json.response);
  });

  if (form.formState.isSubmitting) {
    return (
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
          Preparando respuesta.
        </h2>
        <div className="max-w-lg mx-auto">
          <p className="text-white text-lg leading-7">
            Miles de robots están revisando el código civil para encontrar la
            respuesta a tu pregunta.
          </p>
        </div>
      </div>
    );
  }

  return response ? (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
        Respuesta
      </h2>
      <div className="max-w-lg mx-auto">
        <p className="text-white text-lg leading-7">{response}</p>
      </div>
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
        Hacer una pregunta
      </h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-white font-medium mb-2">
          Nombre completo
        </label>
        <input
          {...form.register("name", { required: true })}
          type="text"
          name="name"
          id="name"
          className="border border-gray-400 p-2 w-full bg-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white font-medium mb-2">
          Correo electrónico
        </label>
        <input
          {...form.register("email", { required: true })}
          type="email"
          name="email"
          id="email"
          className="border border-gray-400 p-2 w-full bg-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="question" className="block text-white font-medium mb-2">
          Cuéntanos tu duda legal.
        </label>
        <textarea
          {...form.register("question", { required: true, maxLength: 5000 })}
          name="question"
          id="question"
          rows={4}
          className="border border-gray-400 p-2 w-full bg-white"
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-white text-blue-700 py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
        >
          Enviar pregunta
        </button>
      </div>
    </form>
  );
}
