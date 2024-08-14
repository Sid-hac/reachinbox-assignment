
import axios from 'axios'
import MailCard from './MailCard'


type Props = {
    token: string | null
}

const AllEmails =  (props: Props) => {
    // const router = useRouter()


    // try {
    //     const response = await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/list", {
    //         headers: {
    //             'Authorization': `Bearer ${props.token}`
    //         }
    //     });
    //     console.log(response.data);
        
     
    // } catch (error) {
    //     console.error("Error fetching emails:", error);
    // }

    return (
        <div>
            <MailCard />
        </div>
    )
}

export default AllEmails