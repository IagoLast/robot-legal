import Question from "@/components/Question";
import { PrismaClient } from "@prisma/client";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";

const prisma = new PrismaClient();
export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: "Robot Legal",
    description: "Resuelve tus dudas legales con inteligencia artificial",
    openGraph: {
      title: "Robot Legal",
      description: "Resuelve tus dudas legales con inteligencia artificial",
      url: `https://robot-legal.com`,
      siteName: "robot-legal.com",
      locale: "es",
      type: "website",
      images: [
        {
          url: "https://robot-legal.com/img/robot-legal.png",
          width: 1200,
          height: 600,
          alt: "robot-legal.com",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Robot Legal",
      description: "Resuelve tus dudas legales con inteligencia artificial.",
      images: [`https://robot-legal.com/img/robot-legal.png`],
    },
  };
}

export default async function Home() {
  const inquiries = await prisma.inquiry.findMany({
    take: 12,
    orderBy: { createdAt: "desc" },
  });

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
            <div className="max-w-sm mx-auto px-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Introduce tus datos y explícanos tu caso en detalle.
              </h3>
              <p className="text-base text-gray-500">
                Proporciona algunos datos básicos y una descripción de tu caso.
                Cuanta más información aportes más precisa será la respuesta.
              </p>
            </div>
            <div className="max-w-sm mx-auto px-4">
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
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Preguntas reales de otros usuarios
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
            {inquiries.map((i) => (
              <Link
                className="text-blue-700 underline cursor-pointer"
                href={`reply/${i.id}`}
                key={i.id}
              >
                {i.message}
              </Link>
            ))}
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
                <a href="/legal" className="hover:text-white">
                  Aviso Legal
                </a>
              </li>
              <li>
                <a href="/legal" className="hover:text-white">
                  Política de Privacidad
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
      <Analytics />
    </main>
  );
}
