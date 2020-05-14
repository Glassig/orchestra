// to create uuid
// import {v4 as UUID} from "uuid"
// const id: string = uuid();

type uuid = string;

export interface Quest {
  id: uuid;
  title: string;
  description: string;
  reward: string;
  creator_id: uuid;
  // map_circle: circle  GIS STUFF
  type: QuestType; //should be enum
}

export enum QuestType {
  KILL_MONSTERS = 0,
  DISCOVER = 1,
  TRAVERSE = 2,
}
