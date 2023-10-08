import { get } from "https://jscroot.github.io/api/croot.js";
import {responseData} from "../config/config.js";
import { JSONlink } from "../template/template.js";

get(JSONlink, responseData);