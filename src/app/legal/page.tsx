import React from "react";
import "tailwindcss/tailwind.css";

export default function Legal() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Aviso legal</h1>
      <p className="text-gray-700 mb-4">
        Estos son los términos y condiciones de uso de nuestra plataforma. Al
        utilizar nuestros servicios, estás aceptando estos términos y
        condiciones.
      </p>
      <h2 className="text-lg font-bold mb-2">Uso de la plataforma</h2>
      <p className="text-gray-700 mb-4">
        Puedes utilizar nuestra plataforma para resolver dudas legales mediante
        IA. No se permite utilizar nuestra plataforma para fines ilegales o
        fraudulentos.
      </p>
      <h2 className="text-lg font-bold mb-2">Propiedad intelectual</h2>
      <p className="text-gray-700 mb-4">
        Todos los derechos de propiedad intelectual de nuestra plataforma y su
        contenido pertenecen a nuestra empresa.
      </p>
      <h2 className="text-lg font-bold mb-4">Limitación de responsabilidad</h2>
      <p className="text-gray-700 mb-8">
        No nos hacemos responsables por ningún daño o perjuicio que puedas
        sufrir como resultado del uso de nuestra plataforma.
      </p>

      <h1 className="text-2xl font-bold mb-4">Política de Privacidad</h1>
      <p className="text-gray-700 mb-4">
        En robot-legal.com, nos comprometemos a proteger tu privacidad y tus
        datos personales. Esta política de privacidad describe cómo recopilamos,
        utilizamos y protegemos tu información personal.
      </p>
      <h2 className="text-lg font-bold mb-2">Información que recopilamos</h2>
      <p className="text-gray-700 mb-4">
        Recopilamos información personal cuando te registras en nuestra
        plataforma o utilizas nuestros servicios. La información que recopilamos
        incluye nombre y correo electrónico.
      </p>
      <h2 className="text-lg font-bold mb-2">Uso de la información</h2>
      <p className="text-gray-700 mb-4">
        Utilizamos la información que recopilamos para enviar respuestas
        detalladas a las dudas planteadas por los usuarios de forma privada.
      </p>
      <h2 className="text-lg font-bold mb-4">Protección de la información</h2>
      <p className="text-gray-700 mb-8">
        Nos comprometemos a proteger la información personal que recopilamos. No
        compartimos tu información con terceros sin tu consentimiento y tomamos
        medidas de seguridad para proteger tu información contra el acceso no
        autorizado y el uso indebido.
      </p>
    </div>
  );
}
