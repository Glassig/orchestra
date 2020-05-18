// to create uuid
// import {v4 as UUID} from "uuid"
// const id: string = uuid();

type uuid = string;

// I don't know how to do it
// <(x, y), r> is the format, otherwise.
type circle = string | null;

export interface Quest {
  title: string;
  description: string;
  type: QuestType;
  id: uuid;
  reward: string | null;
  creator_id: uuid;
  map_circle: circle; //GIS STUFF
  quest_statuses: [
    {
      status: QuestStatus;
    }
  ];
  creator: {
    displayname: string;
  };
}

export enum QuestType {
  KILL_MONSTERS = 0,
  DISCOVER = 1,
  TRAVERSE = 2,
}

export enum QuestStatus {
  NEW = 0,
  IN_PROGRESS = 1,
  COMPLETED = 2,
}
