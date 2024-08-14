
import axios from 'axios'
import MailCard from './MailCard'


type Props = {
    token: string | null
    emails : object[]
}

const AllEmails =  (props: Props) => {
    


    return (
        <div>
            {props.emails.map((email, index) => (
                <MailCard key={index} email={email} />
            ))}
         
        </div>
    )
}

export default AllEmails