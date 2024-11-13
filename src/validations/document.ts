function isInvalidCPFSequence(cpf: string): boolean {
  const invalidSequences = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];
  return invalidSequences.includes(cpf);
}

function calculateCheckDigit(cpf: string, factor: number): number {
  let sum = 0;
  for (let i = 0; i < factor - 1; i++) {
    sum += parseInt(cpf.charAt(i), 10) * (factor - i);
  }
  const remainder = (sum * 10) % 11;
  return remainder === 10 || remainder === 11 ? 0 : remainder;
}

export function isValidCpf(cpf: string): boolean {
  const cleanedCPF = cpf.replace(/\D/g, "");

  if (cleanedCPF.length !== 11 || isInvalidCPFSequence(cleanedCPF)) {
    return false;
  }

  const firstCheckDigit = calculateCheckDigit(cleanedCPF, 10);
  const secondCheckDigit = calculateCheckDigit(cleanedCPF, 11);

  return (
    firstCheckDigit === parseInt(cleanedCPF.charAt(9), 10) &&
    secondCheckDigit === parseInt(cleanedCPF.charAt(10), 10)
  );
}
