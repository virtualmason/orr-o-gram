
import useUser from '../..hooks/use-user';
export default function Sidebar() {
    const{ 
       user: {fullName, username,  userId } 

    } = useUser();

    console.log('x', x);
    return <div className='p-4'>
        <User />
        <Suggestions />
    </div>
}