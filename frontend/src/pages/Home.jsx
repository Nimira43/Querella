import { Link } from 'react-router-dom'
import { BsTicketPerforated, BsQuestionCircle} from "react-icons/bs"

function Home() {
  return (
    <>
      <section className='heading'>
        <h1>Querella Helpdesk</h1>
        <p>Please select an option from below</p>
      </section>
      <Link
        to='new-ticket'
        className='btn btn-reverse btn-block'
      >
        <BsQuestionCircle /> Create New Ticket
      </Link>
      <Link
        to='tickets'
        className='btn btn-block'
      >
        <BsTicketPerforated /> View Tickets
      </Link>
    </>
  )
}

export default Home
