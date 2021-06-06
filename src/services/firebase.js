import {firebase, FieldValue} from '../lib/firebase';

  export default async function doesUsernameExist(username) {

    const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();
    console.log(result)

    return result.docs.map((user) => user.data().length > 0)
}

//228
//test@test.com, test123
//Karl Hadwen