export const getFormattedDate = (dateString: string): string => {
  const offerDate = new Date(dateString);
  const today = new Date();

  const dayDifference = Math.floor(
    (today.getTime() - offerDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (dayDifference === 0) {
    return "Publicado hoy";
  } else if (dayDifference === 1) {
    return "Publicado ayer";
  } else if (dayDifference <= 7) {
    return `Publicado hace ${dayDifference} días`;
  } else {
    return (
      `Publicado el ` +
      new Intl.DateTimeFormat("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(offerDate)
    );
  }
};
