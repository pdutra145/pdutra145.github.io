import { Blob } from "buffer";
import { Key } from "react";

export interface Introduction {
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
  data: Introduction[] | CertificateModel;
}

export interface Image {
    content: Blob
}
