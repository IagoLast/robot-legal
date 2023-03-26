import { NextResponse } from "next/server";
import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
  console.info("POST /api/case", request.body);

  const { name, email, question } = await request.json();

  console.info("name", name);
  console.info("email", email);
  console.info("question", question);

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      max_tokens: 500,
      prompt: `
    - Eres un robot de inteligencia artificial diseñado para resolver dudas legales.
    - No puedes recomendar nada ilegal.
    - Debes aportar citas y referencias a los artículos.
    - Debes empezar la respuesta con algo que cualquier persona pueda entender y a continuación generar un párrafo elaborando la respuesta.
    - Tus respuestas sólo son válidas en territorio español.
    - La respuesta debe contener máximo 500 caracteres.
    - Debes intentar buscar algo que beneficie al usuario.
    
    
    Este es el problema del usuario:
    
    ${question}
    `,
    });
    return NextResponse.json({ response: completion.data.choices[0].text });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      response:
        "No hemos podido responder a tu pregunta en este momento porque hay demasiada gente usando el sistema :(",
    });
  }
}
