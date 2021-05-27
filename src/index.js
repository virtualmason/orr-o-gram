import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Skeleton from "react-loading-skeleton";
import { isBefore } from "date-fns";

ReactDOM.render(<App />, document.getElementById("root"));


//Clieent rendered: app:react )ccra)
   //databbase whiccch is firebase
   //reeact-oading-sskelleton
   //tailwind

   //archiiteeccture
    //components, 
    //contant,
    //context, 
   // helpers,
   // lib,
   // services
    //(firebase function in here)
    //stylles (talwind's foldeer (app/tailwind()))
    // ***lasst place 37mmin firebase
    /**
     Production rules when done, test lests us read and write to firestore(basically anything while in dev),need test mode for sead file to write to database at first
rules_version = '2';

service cloud.firestore {

  match /databases/{database}/documents {

    match /{document=**} {

      allow read;
      allow write : if request.auth.uid != null;

        request.time < timestamp.date(2021, 6, 26);

    }

  }

}

     */