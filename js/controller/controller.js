import { get, postWithBearer } from "https://jscroot.github.io/api/croot.js";
import {GetDataForm, responseData, ResponsePost} from "../config/config.js";
import { JSONlink, token, URLPost } from "../template/template.js";

get(JSONlink, responseData);

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let data = GetDataForm();
        postWithBearer(URLPost, token, data, ResponsePost)
    });
});

