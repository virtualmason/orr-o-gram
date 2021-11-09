import { skeleton } from "react-loading-skeleton";
import { updatedPhotos } from "../services/firebase";
import usePhotos from "../hooks/use-photos";
import user from "../hooks/use-user";
//userphotos of loged in user
//on loading the phots need skeleton
//if we hav photo render create ppost componet
//if they have no photo ask them to make
export default function Timeline() {
  // let photos = updatedPhotos(user.id);
  return (
    <div className="container col-span-2">
      <p>I am the timeline</p>
    </div>
  );
}
