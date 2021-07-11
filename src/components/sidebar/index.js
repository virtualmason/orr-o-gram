
import useUser from '../../hooks/use-user';
import Suggestions from './suggestions'
import User from './user';

export default function Sidebar() {
   const {
       user : {username, fullName, userId}
    } = useUser()
console.log(username, fullName, userId)

   return (
     <div className='p-4'>
        <User  username ={username} fullName ={ fullName } />
     <Suggestions userId={userId} />
     </div>
    )
}