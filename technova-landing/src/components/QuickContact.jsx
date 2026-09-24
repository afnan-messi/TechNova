import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import './QuickContact.css'

const phoneNumber = '+14155550148'
const whatsappNumber = '14155550148'

function QuickContact() {
  return <div className="quick-contact"><a className="quick-contact-button quick-contact-whatsapp" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp"><FaWhatsapp /></a><a className="quick-contact-button quick-contact-phone" href={`tel:${phoneNumber}`} aria-label="Call us at +1 (415) 555-0148"><FaPhoneAlt /></a></div>
}

export default QuickContact
