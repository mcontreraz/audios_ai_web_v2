function convertirFormatoFecha(fechaStr) {
    const fecha = new Date(fechaStr);
    const anio = fecha.getFullYear();
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const dia = fecha.getDate().toString().padStart(2, '0');
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    return `${anio}-${mes}-${dia} ${horas}:${minutos}`;
  }

function shortenString(text) {
    // Split the text into an array of words
    const words = text.split(' ');
  
    // Check if the text is 200 words or fewer
    if (words.length <= 200) {
      return text;
    }
  
    // Join the first 200 words to form the new text
    const shortenedText = words.slice(0, 200).join(' ');
  
    return shortenedText;
  }

export { convertirFormatoFecha, shortenString }