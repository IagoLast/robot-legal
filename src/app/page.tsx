import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Question from "@/components/Question";

export default function Home() {
  return (
    <main>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Robot legal
          </h1>
        </div>
      </header>

      <section className="bg-blue-700 flex items-center justify-center h-screen">
        <div className="text-center text-white">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">
            Resuelve tus dudas legales al instante
          </h2>
          <p className="text-lg mb-8">
            Robot legal es la primera plataforma que resuelve tus dudas legales
            en segundos utilizando inteligencia artificial.
          </p>
          <a
            href="#questions"
            className="bg-white text-blue-700 py-3 px-8 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Hacer una pregunta
          </a>
        </div>
      </section>

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            ¿Cómo funciona Robot legal?
          </h2>
          <div className="flex flex-wrap justify-center items-center mb-16">
            <div className="max-w-sm mx-auto  px-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Introduce tus datos y explícanos tu caso en detalle.
              </h3>
              <p className="text-base text-gray-500">
                Proporciona algunos datos básicos y una descripción de tu caso.
                Cuanta más información aportes más precisa será la respuesta.
              </p>
            </div>
            <div className="max-w-sm mx-auto  px-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Recibe una respuesta de nuestra inteligencia artificial
              </h3>
              <p className="text-base text-gray-500">
                Nuestra inteligencia artificial procesará tu caso y te ofrecerá
                una respuesta precisa en cuestión de segundos.
              </p>
            </div>
            <div className="max-w-sm mx-auto px-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Contamos con una red de abogados humanos para casos complicados
              </h3>
              <p className="text-base text-gray-500">
                ¿Necesitas ayuda? Contamos con un grupo de abogados expertos que
                te ayudarán a resolver tu caso.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="questions"
        className="bg-blue-700 py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-lg mx-auto">
            <Question />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            ¿No sabes que preguntar? Aquí tienes algunas ideas:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           
            <div className="text-gray-700 text-lg leading-7">
              <p className="mb-4">
                ¿Cuál es la legislación vigente en España en cuanto a la
                privacidad de los datos personales?
              </p>
              <p className="mb-4">
                ¿Puedo demandar a una empresa si no me paga el salario
                correspondiente?
              </p>
            </div>
           
            <div className="text-gray-700 text-lg leading-7">
              <p className="mb-4">
                ¿Qué puedo hacer si mi casero se niega a devolver la fianza
                después de que haya dejado el piso en perfecto estado?
              </p>
              <p className="mb-4">¿Cómo puedo registrar una marca en España?</p>
            </div>
           
            <div className="text-gray-700 text-lg leading-7">
              <p className="mb-4">
                ¿Puedo reclamar una indemnización por un accidente laboral?
              </p>
              <p className="mb-4">
                ¿Cómo puedo solicitar la nacionalidad española?
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-lg font-medium">Robot legal</span>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-white">
                  Aviso Legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-sm">
            <p className="mb-1">
              &copy; 2023 Robot legal. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}