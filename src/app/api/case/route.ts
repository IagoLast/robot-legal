import { NextResponse } from "next/server";
import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
  console.info("POST /api/case", request.body);

  const { name, email, question } = await request.json();

  console.info("name", name);
  console.info("email", email);
  console.info("question", question);

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

  console.log(completion.data.choices[0].text);

  return NextResponse.json({ response: completion.data.choices[0].text });
}
