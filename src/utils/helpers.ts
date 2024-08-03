export function formatISODateToBRDate(data: string): string {
  const splittedData = data.split('-');
  const year = splittedData[0];
  const month = splittedData[1];
  const day = splittedData[2];
  return `${day}/${month}/${year}`;
}

export function calculateHowMuchTimeHasPassed(initialDate: Date) {
  // Converte a string de data inicial para um objeto Date
  const currentDate = new Date();

  // Calcula a diferença em anos e meses
  let years = currentDate.getFullYear() - initialDate.getFullYear();
  let months = currentDate.getMonth() - initialDate.getMonth();

  // Ajusta se o mês atual for menor que o mês inicial
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months };
}
