
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IUser {
  readonly id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt?: string;
}

export interface IChildren {
  children: any;
}

export interface IAuthContext {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  handleLogout(): void;
}

export interface IModalContext {
  handleSetModal: Dispatch<SetStateAction<IModal | null>>;
}

export interface IModal extends Partial<IChildren> {
  title: string;
  content?: string;
  twoButtons?: boolean;
  design: JSX.Element;
  handleCloseModal?(): void;
}

export interface ICharacterResponse {
  info: IQueryInfo;
  characters: IQueryResponse<ICharacter>;
}

export interface IQueryInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface IQueryResponse<T = unknown> {
  results: T[];
}

export interface ICharacter {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: string[];
  url: string[];
  created: string;
  isFavorite: boolean;
}

export interface IDefaultInput extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  marginVertical?: string;
}
