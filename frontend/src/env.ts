import { z } from "zod";

/**
 * Especificamos el esquema de validación para las variables de ambiente del lado del servidor aca.
 * Asi nos aseguramos que la app no se construye con variables de ambiente invalidas o inexistentes.
 */
const server = z.object({
  //ejemplo:
  //   DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "test", "production"]),
});

/**
 * Especificamos el esquema de validación para las variables de ambiente del lado del client aca.
 * Para exponerlas en el lado del cliente, deben tener el prefijo "NEXT_PUBLIC_".
 */
const client = z.object({
  //Ejemplo:
  NEXT_PUBLIC_API_URL: z.string().min(1),
});

/**
 * Validamos las variables:
 */
const serverParse = server.safeParse({
  NODE_ENV: process.env.NODE_ENV,
});

const clientParse = client.safeParse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
});


if (serverParse.success === false) {
  console.error(
    "❌ Invalid environment variables:",
    serverParse.error.flatten().fieldErrors
  );
  throw new Error("Invalid environment variables");
}

if (clientParse.success === false) {
  console.error(
    "❌ Invalid environment variables:",
    clientParse.error.flatten().fieldErrors
  );
  throw new Error("Invalid environment variables");
}

export const envServer = serverParse.data;
export const envClient = clientParse.data;
