import { Playlist } from "./playlist";

export interface Audio {
    id: string;
    tags: string;
    userId: string;
    name: string;
    path: string;
    playlists: Playlist[]
  }
