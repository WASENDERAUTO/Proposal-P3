import data from "../json/isiproposal.json" assert { type: "json" };
import { setInner } from "https://jscroot.github.io/element/croot.js";

setInner("Title", data.title);
setInner("deskripsiProposal", data.description);

setInner("judulProposal", data.isiProposal.judulProposal);
setInner("deskripsi1", data.isiProposal.deskripsi1);
setInner("latarbelakang1", data.isiProposal.latarBelakang1);
setInner("latarbelakang2", data.isiProposal.latarBelakang2);
setInner("latarbelakang3", data.isiProposal.latarBelakang3);
setInner("latarbelakang4", data.isiProposal.latarBelakang4);

setInner("name1", data.team[0].name1);
setInner("npm1", data.team[0].npm1);
setInner("email1", data.team[0].email1);
setInner("github1", data.team[0].github1);
setInner("name2", data.team[1].name2);
setInner("npm2", data.team[1].npm2);
setInner("email2", data.team[1].email2);
setInner("github2", data.team[1].github2);
