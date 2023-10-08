import { get } from "https://jscroot.github.io/api/croot.js";
import { ProfilePicture, Responsejosua, Responsejosua, profilejosua, responseTeam} from "../config/config.js";
import { JSONTeams, JSONlink, JSONjoss} from "../template/template.js";

get(JSONTeams, responseTeam);
get(JSONjoss, Responsejosua);
get(JSONlink, ProfilePicture)