export function formatISODateToBRDate(data: string): string {
  const splittedData = data.split('-');
  const year = splittedData[0];
  const month = splittedData[1];
  const day = splittedData[2];
  return `${day}/${month}/${year}`;
}
