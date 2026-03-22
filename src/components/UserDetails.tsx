import type { ApiUser } from '../types';
import { formatParsedName, parseName } from '../utils/UsersNameFormat';

export interface UserDetailCardProps {
    user: ApiUser | null;
}

function UserDetails({user} : UserDetailCardProps) {
    if(!user) return null;
    const parsed = parseName(user.name);
    const displayName = formatParsedName(parsed);
    const address = user.address;
    return (
        <div className='detail'>
            <p>{displayName}</p>
            <p>{address.street}</p>
            <p>{address.suite}</p>
            <p>{address.zipcode}</p>
        </div>
    )
}

export default UserDetails
