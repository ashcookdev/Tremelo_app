import { API } from "aws-amplify";
import { createProfile } from './graphql/mutations';




import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Profile_set() {

    const Graph = async () => {
    const newProfile = await API.graphql({
        query: createProfile,
        variables: {
            input: {
            "ArtistName": "Lorem ipsum dolor sit amet",
            "Genre": "Lorem ipsum dolor sit amet",
            "Role": "Lorem ipsum dolor sit amet",
            "ProfilePic": "Lorem ipsum dolor sit amet",
            "Bio": "Lorem ipsum dolor sit amet"
        }
        }});
    }

  return (
   

    )
}


