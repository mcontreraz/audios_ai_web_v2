function formatDate(fechaStr) {
  // Dividir la cadena de fecha y hora en sus componentes
  const partes = fechaStr?.split(/[-T:.Z]/);

  // Crear un objeto de fecha utilizando los componentes
  const fecha = new Date(
    Date.UTC(
      partes[0],
      partes[1] - 1,
      partes[2],
      partes[3],
      partes[4],
      partes[5]
    )
  );

  // Extraer componentes de fecha y hora
  const anio = fecha.getUTCFullYear();
  const mes = (fecha.getUTCMonth() + 1).toString().padStart(2, "0");
  const dia = fecha.getUTCDate().toString().padStart(2, "0");
  const horas = fecha.getUTCHours().toString().padStart(2, "0");
  const minutos = fecha.getUTCMinutes().toString().padStart(2, "0");

  // Formatear y devolver la fecha
  return `${anio}-${mes}-${dia} ${horas}:${minutos}`;
}
function shortenString(text) {
  // Split the text into an array of words
  const words = text.split(" ");

  // Check if the text is 200 words or fewer
  if (words.length <= 200) {
    return text;
  }

  // Join the first 200 words to form the new text
  const shortenedText = words.slice(0, 200).join(" ");

  return shortenedText;
}

function formatDuration(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000); // Convertir milisegundos a segundos
  const pad = (num) => num.toString().padStart(2, "0");
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = Math.floor(seconds % 60);

  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

export { formatDate, shortenString, formatDuration };
