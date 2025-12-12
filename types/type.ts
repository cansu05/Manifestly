import { Dispatch, SetStateAction } from "react";

export type ManifestItem = {
  id: string;
  text: string;
};

export type InputProps = {
  setEnteredManifestText: Dispatch<SetStateAction<string>>;
  enteredManifestText: string;
};

export type ManifestListProps = {
  data: ManifestItem[];
  setManifestList: Dispatch<SetStateAction<ManifestItem[]>>;
};

export type DeleteButtonProps = {
  id: string;
  setManifestList: Dispatch<SetStateAction<ManifestItem[]>>;
};
