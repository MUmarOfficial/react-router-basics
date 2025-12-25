import type { Params } from "react-router";

export interface Contact {
  name: {
    first: string;
    last: string;
  };
  email: string;
  login: {
    uuid: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export type LoaderArgs = {
  params: Params<string>;
};
