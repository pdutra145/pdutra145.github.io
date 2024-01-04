import { Blob } from "buffer";
import { Key } from "react";

export interface SobreMim {
  id: Number;
  text: String;
  date: Date;
}

export interface Certificate {
  id: number | Key;
  title: string;
  description: string;
  date: Date;
}

export interface Response {
  data: SobreMim[] | Certificate;
}

export interface Image {
    content: Blob
}
