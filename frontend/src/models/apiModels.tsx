import { Blob } from "buffer";
import { Key } from "react";

export interface SobreMim {
  id: Number;
  text: String;
  date: Date;
}

export interface CertificateModel {
  id: number | Key;
  title: string;
  description: string;
  date: Date;
  image:string;
}

export interface Response {
  data: SobreMim[] | CertificateModel;
}

export interface Image {
    content: Blob
}
