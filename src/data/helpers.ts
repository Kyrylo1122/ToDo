type GenerateId = () => void;
export const generateId: GenerateId = () =>
  Math.random().toString(16).slice(2) + new Date().getTime().toString();
