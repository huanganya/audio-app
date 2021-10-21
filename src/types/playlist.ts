import { UserInfo } from './user';
import { Audio } from './audio';

export interface Playlist {
    id: string;
    name: string;
    user: UserInfo;
    audios: Audio[];
    createdTime: Date;
    updatedTime: Date;
  }
