export type JobOfferType = {
  id: number;
  title: string;
  location: string;
  modality: string;
  workDay: string;
  type: string;
  recruiter: string;
  image: string;
  date: string;
};

export const fakeOffers: JobOfferType[] = [
  {
    id: 1,
    title: "Desarrollador Frontend Senior",
    location: "Buenos Aires, Argentina",
    remote: true,
    type: "Tiempo completo",
    recruiter: "Mariana Pérez",
    image:
      "https://images.squarespace-cdn.com/content/v1/5d77a7f8ad30356d21445262/1695000300830-5TKAFHC2EBYTTM2QUWUP/fotos-de-perfil-blanco-y-negro.jpg",
    date: "hoy",
  },
  {
    id: 2,
    title: "UX/UI Designer",
    location: "Córdoba, Argentina",
    remote: true,
    type: "Freelance",
    recruiter: "Juan Gomez",
    image:
      "https://b2472105.smushcdn.com/2472105/wp-content/uploads/2023/01/Perfil-Profesional-_63-819x1024.jpg?lossy=1&strip=1&webp=1",
    date: "ayer",
  },
  {
    id: 3,
    title: "Backend Developer",
    location: "Rosario, Argentina",
    remote: true,
    type: "Tiempo completo",
    recruiter: "Ana López",
    image:
      "https://cdn.alboompro.com/5ec55e1f25241f00010570e7_6286594ee2407400016871ff/original_size/img_5498.jpg?v=1",
    date: "ayer",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    location: "Mendoza, Argentina",
    remote: true,
    type: "Medio tiempo",
    recruiter: "Carlos Ruiz",
    image:
      "https://b2472105.smushcdn.com/2472105/wp-content/uploads/2023/01/Perfil-Profesional-27_1-819x1024.jpg?lossy=1&strip=1&webp=1",
    date: "hace 1 semana",
  },
  {
    id: 5,
    title: "Project Manager",
    location: "Buenos Aires, Argentina",
    remote: true,
    type: "Tiempo completo",
    recruiter: "Sofia Martínez",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk42z2hc8ONgM0p7jIK4H4vkpTQRTStFJjmA&s",
    date: "hace 1 semana",
  },
  {
    id: 6,
    title: "QA Engineer",
    location: "Santa Fe, Argentina",
    remote: true,
    type: "Freelance",
    recruiter: "Diego Vargas",
    image:
      "https://b2472105.smushcdn.com/2472105/wp-content/uploads/2023/01/Perfil-Profesional-_50-820x1024.jpg?lossy=1&strip=1&webp=1",
    date: "hace 2 semanas",
  },
  {
    id: 7,
    title: "Mobile Developer",
    location: "Tucumán, Argentina",
    remote: true,
    type: "Tiempo completo",
    recruiter: "Lucía Fernández",
    image:
      "https://nagoregarciasanz.com/wp-content/uploads/2019/03/nagore-garcia-sanz-home-ngs-1.jpg",
    date: "hace 2 semanas",
  },
  {
    id: 8,
    title: "Desarrollador Frontend Junior",
    location: "Salta, Argentina",
    remote: true,
    type: "Prácticas",
    recruiter: "Martin Silva",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfWKwltJ7Y0swi0Ryluk0MUToIqWCyKRpB8w&s",
    date: "hace 2 semanas",
  },
];
