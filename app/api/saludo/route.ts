import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // 1. Obtenemos la contraseña que nos envíe el usuario
  const { searchParams } = new URL(request.url);
  const passwordIngresada = searchParams.get('password');

  // 2. Comprobamos si coincide con nuestra variable de entorno
  if (passwordIngresada !== process.env.MI_PASSWORD) {
    return NextResponse.json(
      { error: "Acceso denegado: Contraseña incorrecta" }, 
      { status: 401 } // El código 401 significa "No autorizado"
    );
  }

  // 3. Si es correcta, mostramos el mensaje
  return NextResponse.json({
    mensaje: "¡Bienvenido! Has entrado correctamente.",
    fecha: new Date().toISOString()
  });
}