import { Inquiry, Prisma, PrismaClient } from "@prisma/client";
import Link from "next/link";

export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;
  const inquiry = (await prisma.inquiry.findUnique({
    where: { id: parseInt(id) },
  })) as Inquiry;
  const message = inquiry.message;
  const response = inquiry.response;

  return {
    title: message,
    description: response,
    openGraph: {
      title: message,
      description: response,
      url: `https://robot-legal.com/reply/${id}`,
      siteName: "robot-legal.com",
      images: [
        {
          url: `https://robot-legal.com/api/static/og?q=${encodeURIComponent(
            inquiry.message
          )}`,
          width: 1200,
          height: 600,
          alt: "robot-legal.com",
        },
      ],
      locale: "es",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: message,
      description: response,
      images: [
        `https://robot-legal.com/api/static/og?q=${encodeURIComponent(
          inquiry.message
        )}`,
      ],
    },
  };
}

export default async function Reply({ params }: { params: { id: string } }) {
  const { id } = params;
  const inquiry = await prisma.inquiry.findUnique({
    where: { id: parseInt(id) },
  });

  if (!inquiry) {
    return <h1> 404 </h1>;
  }

  const message = inquiry.message;
  const response = inquiry.response;

  return (
    <main>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <span className="text-3xl font-bold leading-tight text-gray-900">
            Robot legal
          </span>
        </div>
      </header>

      <section className="bg-blue-900 h-screen flex flex-col items-center justify-center ">
        <div className="text-white max-w-screen-lg mx-auto p-4">
          <h1 className="text-center text-4xl font-bold tracking-tight mb-4">
            {message}
          </h1>
          <p className="max-w-screen-md mx-auto text-xl text-justify mt-12">
            {response}
          </p>
        </div>

        <div className="text-center">
          <p className="block text-white my-8">
            Esta pregunta ha sido respondida automáticamente usando
            robot-legal.com
          </p>
          <div>
            <Link
              href="/#questions"
              className="bg-white text-blue-900 py-3 px-8 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Hacer una pregunta
            </Link>
            <Link
              target="_blank"
              className="ml-4 bg-white text-blue-900 py-3 px-8 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
              href={`https://twitter.com/intent/tweet?text=He usado robot-legal.com para resolver una duda!?&url=https://robot-legal.com/?q=${encodeURIComponent(
                message
              )}&a=${encodeURIComponent(response)}`}
            >
              ¿Te ha servido? Ayúdanos con un tweet 🙏
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
