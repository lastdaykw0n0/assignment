export interface Banner {
  id: string;
  image: { kr: string; en: string };
  description?: { kr?: string; en?: string };
  link: { kr: string; en: string };
  buttonText?: { kr?: string; en?: string };
}
