import { get } from "https://jscroot.github.io/api/croot.js";
import { ProfilePicture, ResponseRofi, profilerofi, responseTeam} from "../config/config.js";
import { JSONTeams, JSONlink, JSONrofi } from "../template/template.js";

get(JSONTeams, responseTeam);
get(JSONrofi, ResponseRofi);
get(JSONlink, ProfilePicture)