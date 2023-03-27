"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function Question() {
  const router = useRouter();
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

    const json = await res.json().catch(() => {
      return {
        response: "Lo sentimos, hubo un error al enviar tu pregunta.",
      };
    });

    router.push(`/reply?q=${json.question}&a=${json.response}`);

    setResponse(json.response);
  });

  if (form.formState.isSubmitting) {
    return (
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
          Preparando respuesta.
        </h2>
        <div role="status" className="grid place-items-center">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 mx-auto"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
        <div className="max-w-lg mx-auto">
          <p className="text-white text-lg leading-7 text-center">
            Miles de robots están revisando montones de leyes para encontrar la
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
      <div className="max-w-xl mx-auto bg-white p-16 rounded">
        <p className="text-lg leading-7">{response}</p>
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
          {...form.register("question", { required: true, maxLength: 300 })}
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
