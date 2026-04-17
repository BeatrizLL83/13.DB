import type { ZodEmail } from 'zod';

export interface User {
  id: number;
  email: string;
  handleName: string; //es el alias
  password: string;
  firstNAme: string;
  lastNAme: string;
  avatar?: string;
}

// email:
