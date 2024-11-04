import { z } from "zod";

// Esquemas de validación básicos (por elemento):

const stringSchema = (max: number) => {
  return z
    .string()
    .min(2, { message: "Por favor complete el campo" })
    .max(max, { message: `Debe tener como máximo ${max} caracteres` });
};

const modalitySchema = z.enum(["Presencial", "Híbrido", "Remoto"], {
  message: "Por favor seleccione",
});
const contractTypeSchema = z.enum(
  ["Contrato fijo", "Contrato temporal", "Pasantía", "Trainee"],
  { message: "Por favor seleccione" }
);

const workDaySchema = z.enum(["Tiempo completo", "Flexible", "Medio tiempo"], {
  message: "Por favor seleccione",
});

// TODO: una vez definido si el rol va a ser por un selector o un check,
// cambiar este schema y añadirlo al registerSchema

export const jobPostSchema = z.object({
  title: stringSchema(70),
  location: stringSchema(80),
  modality: modalitySchema,
  contractType: contractTypeSchema,
  workDay: workDaySchema,
  description: stringSchema(650),
  salary: z.string().optional(),
  requirements: z
    .array(
      z.object({
        description: stringSchema(80),
      })
    )
    .min(1, { message: "Debe agregar al menos un requerimiento" }),
  companyName: stringSchema(70),
  companyDescription: stringSchema(650),
});
