import AlacritySound from "./assets/sounds/alacrity.mpeg";
import BlastSound from "./assets/sounds/blast.mpeg";
import ChaosMeteorSound from "./assets/sounds/chaosmeteor.mpeg";
import ColdSnapSound from "./assets/sounds/coldsnap.mpeg";
import EmpSound from "./assets/sounds/emp.mpeg";
import ForgeSpiritSound from "./assets/sounds/forgespirit.mpeg";
import GhostWalkSound from "./assets/sounds/ghostwalk.mpeg";
import IceWallSound from "./assets/sounds/icewall.mpeg";
import SunstrikeSound from "./assets/sounds/sunstrike.mpeg";
import TornadoSound from "./assets/sounds/tornado.mpeg";
import quasIcon from "./assets/img/quas_icon.png";
import wexIcon from "./assets/img/wex_icon.png";
import exortIcon from "./assets/img/exort_icon.png";

export const QUAS_KEY = 81;
export const WEX_KEY = 87;
export const EXORT_KEY = 69;
export const CAST_KEY = 82;
export const GAME_DURATION = 10;
export const ENERGIES_KEYS = [81, 87, 69];

export const SKILLS = [
  {
    name: "Coldsnap",
    combo: ["818181"],
    sound: ColdSnapSound
  },
  {
    name: "Ghost Walk",
    combo: ["818187", "818781", "878181"],
    sound: GhostWalkSound
  },
  {
    name: "Ice Wall",
    combo: ["818169", "816981", "698181"],
    sound: IceWallSound
  },
  {
    name: "EMP",
    combo: ["878787"],
    sound: EmpSound
  },
  {
    name: "Tornado",
    combo: ["818787", "878187", "878781"],
    sound: TornadoSound
  },
  {
    name: "Alacrity",
    combo: ["878769", "876987", "698787"],
    sound: AlacritySound
  },
  {
    name: "Sunstrike",
    combo: ["696969"],
    sound: SunstrikeSound
  },
  {
    name: "Forge Spirit",
    combo: ["816969", "698169", "696981"],
    sound: ForgeSpiritSound
  },
  {
    name: "Chaos Meteor",
    combo: ["876969", "698769", "696987"],
    sound: ChaosMeteorSound
  },
  {
    name: "Deaf. Blast",
    combo: ["818769", "816987", "876981", "878167", "698187", "698781"],
    sound: BlastSound
  }
];

export const ENERGIES = {
  [QUAS_KEY]: {
    name: "Quas",
    key: QUAS_KEY,
    image: quasIcon
  },
  [WEX_KEY]: {
    name: "Wex",
    key: WEX_KEY,
    image: wexIcon
  },
  [EXORT_KEY]: {
    name: "Exort",
    key: EXORT_KEY,
    image: exortIcon
  }
};
