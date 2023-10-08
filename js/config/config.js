import {setInner,addInner } from "https://jscroot.github.io/element/croot.js";
import { CardTemplate, CardTujuan, DeskripsiAPk, LatarBelakang, TeamsProfile, TitleTemplate, inpogrpc, teknologiyangdigunakan } from "../template/template.js";

export function IsiTitle(value){
    let content=TitleTemplate.replace("#title#",value.title);
    // console.log(content);
    addInner("title", content);
}

export function isiTujuan(value){
    value.tujuan.butir.forEach(element => {
        let content = CardTujuan.replace("#tujuan#",element).replace("counter", GetRandomCounter());
        // console.log(value.tujuan);
        addInner("cardtujuan", content);
    });
}

export function DeskripsiAplikasi(value) {
    let content=DeskripsiAPk.replace("#deskripsi#", value.deskripsi);
    // console.log(value.deskripsi);
    addInner("deskripsiapk", content);
}

export function isiLatarBelakang(value){
    let content=LatarBelakang.replace("#latarbelakang#",value.introduction);
    // console.log(content);
    addInner("latarbelakang", content);
}

export function TujuanAbout(value){
    value.tujuan.butir.forEach(element => {
        let content = LatarBelakang.replace("#latarbelakang#",element);
        // console.log(element);
        addInner("tujuan", content);
    });
}

export function LuaranonAbout(value){
    value.luaran.forEach(element => {
        let content = LatarBelakang.replace("#latarbelakang#",element);
        // console.log(element);
        addInner("luaran", content);
    });
}

export function Teknologiisi(value){
    const maxLoopCount = 3; 
    let loopCount = 0; 
    let currentIteration = 1; 
  
    value.teori.title.forEach(element => {
      if (loopCount < maxLoopCount) { 
        let content = teknologiyangdigunakan.replace("#image#", GetRandomImage()).replace("#tekno#", element);
        // console.log(element);
        addInner("teknologi", content);
    
        loopCount++;
      } else if (currentIteration >= 4) {
        let content = teknologiyangdigunakan.replace("#image#", GetRandomImage()).replace("#tekno#", element);
        // console.log(element);
        addInner("teknologianother", content);
      }
  
      currentIteration++; 
    });
}

export function Manfaatisi(value){
    const maxLoopCount = 3; 
    let loopCount = 0; 
    let currentIteration = 1; 
  
    value.manfaat.forEach(element => {
      if (loopCount < maxLoopCount) { 
        let content = teknologiyangdigunakan.replace("#image#", GetRandomImage()).replace("#tekno#", element);
        // console.log(element);
        addInner("manfaatprj", content);
    
        loopCount++;
      } else if (currentIteration >= 4) {
        let content = teknologiyangdigunakan.replace("#image#", GetRandomImage()).replace("#tekno#", element);
        // console.log(element);
        addInner("manfaatprj2", content);
      }
  
      currentIteration++; 
    });
}

export function TeknologionAbout(value){
    value.teori.title.forEach(element => {
          let content =LatarBelakang.replace("#latarbelakang#",element);
        //   console.log(element);
          addInner("teknologiyg", content);
        });
}

export function RumusanMasalah(value){
    value.rumusan.forEach(element => {
          let content =LatarBelakang.replace("#latarbelakang#",element);
        //   console.log(element);
          addInner("rumusan", content);
        });
}



export function ManfaatonAbout(value){
    value.manfaat.forEach(element => {
          let content =LatarBelakang.replace("#latarbelakang#",element);
        //   console.log(element);
          addInner("manfaat", content);
        });
}

export function KegunaanOnAbout(value){
    value.kegunaan.forEach(element => {
          let content =LatarBelakang.replace("#latarbelakang#",element);
        //   console.log(element);
          addInner("kegunaan", content);
        });
}

export function Data1Loop(value){
        let content=CardTemplate.replace("#imgUrl#",value.imgurl).replace("#nama#",value.nama).replace("#npm#",value.npm).replace("#kelas#",value.kelas);
        console.log(value);
        addInner("cardnya1", content);

}

export function Data2Loop(value){
    let content=CardTemplate.replace("#imgUrl#",value.imgurl).replace("#nama#",value.nama).replace("#npm#",value.npm).replace("#kelas#",value.kelas);
    // console.log(value);
    addInner("cardnya2", content);
}

export function Infogrpc(value) {
    let content=inpogrpc.replace("#gambar#",value.infographic);
    // console.log(content);
    addInner("info", content);
}
export function profilejoss(value) {
    let content=TeamsProfile.replace("#profile#",value.profilejoss);
    console.log(value.profilejoss);
    addInner("gambarjosua", content);
}

export function profilenia(value) {
    let content=TeamsProfile.replace("#profile#",value.profilenia);
    console.log(value.profilenia);
    addInner("gambarnia", content);
}

export function GetRandomImage() {
    let image = [
        "acros-assets/icons/features/auth.svg",
        "acros-assets/icons/features/users.svg",
        "acros-assets/icons/features/exchange.svg",
        "acros-assets/icons/features/auth.svg",
        "acros-assets/icons/features/users.svg",
        "acros-assets/icons/features/exchange.svg"
    ]
    return image[Math.floor(Math.random() * image.length)];
  }


let currentIndex = 0;
export function GetRandomCounter(){
    let counter = [
        "Pertama",
        "Kedua", 
        
    ]
    const currentCounter = counter[currentIndex];
  
    currentIndex = (currentIndex + 1) % counter.length;
  
    return currentCounter;
}

export function responseData(result){
    IsiTitle(result);
    isiTujuan(result);
    Teknologiisi(result);
    DeskripsiAplikasi(result);
    Infogrpc(result)
    // Manfaatisi(result)
}

export function responseLatarbelakang(result){
    isiLatarBelakang(result);
    TujuanAbout(result)
    TeknologionAbout(result)
    ManfaatonAbout(result)
    LuaranonAbout(result)
    RumusanMasalah(result)
    KegunaanOnAbout(result)
}

export function responseTeam(result){
  Data1Loop(result);
}

export function Responsejosua(result){
    Data2Loop(result);
}

export function ProfilePicture(result){
    profilejosua(result);
    profilenia(result);
}