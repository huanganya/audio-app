import { Playlist } from './playlist';
import { Audio } from "./audio";
import { Tag } from "./tag";

//todo: what need to put in the Dashboard?
export interface Dashboard {
    tags: Tag[],
    audios: Audio[],
    playlists: Playlist[]
  }
