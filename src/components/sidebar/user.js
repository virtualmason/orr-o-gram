import PropTypes from 'prop-types';
import { memo } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom'
import { fromJSON } from 'postcss';

const User = ({username, fullName}) => {
    console.group(username, fullName)
 return !username || !fullName ? (
        <Skeleton count={1} height={61} />

    ):(
        <Link to={`p/${username}`} className="grid" >
            <p>{username}</p>
        </Link>
    )

}

User.propTypes = {
    username: PropTypes.string,
    fullName: PropTypes.string

}

export default User;