import MailchimpSubscribe from "react-mailchimp-subscribe"
import { Newsletter } from "./Newsletter"

export const MailchimpForm = () => {
    const postUrl = `${process.env.REACT_APP_MAILCHMIP_URL}?u=${process.env.REACT_APP_MAILCHMIP_U}$id=${process.env.REACT_APP_MAILCHMIP_ID}`

    return (
        <>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <Newsletter
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                    >

                    </Newsletter>
                )}
            >
            </MailchimpSubscribe>
        </>
    )
}