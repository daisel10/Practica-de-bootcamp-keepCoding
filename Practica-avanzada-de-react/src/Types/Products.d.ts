export interface TypeProducts {
  id: string;
  createdAt: string;
  name: string;
  sale: boolean;
  price: number;
  tags: tags;
  photo: string | undefined;
}

const tags: Array<number> = ["lifestyle", "mobile", "motor", "work"];
