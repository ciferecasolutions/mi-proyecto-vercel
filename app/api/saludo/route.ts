import { NextResponse } from 'next/server';

export async function GET() {
  // Aquí leemos la variable de entorno desde la "caja fuerte"
  const miSecreto = process.env.MI_PASSWORD;

  return NextResponse.json({
    mensaje: "Hola desde tu API",
    fecha: new Date().toISOString(),
    // Solo mostramos el secreto si existe, para probar que funciona
    clave_detectada: miSecreto ? "¡Clave encontrada con éxito!" : "No se encontró la clave"
  });
}