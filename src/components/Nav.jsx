// rrd imports
import { Form, NavLink } from "react-router-dom"

// library
import { TrashIcon } from '@heroicons/react/24/solid'

import {motion} from 'framer-motion'
// assets
import logomark from "../assets/savings-save-money-manage-money-budget-svgrepo-com.svg"

const Nav = ({ userName }) => {
  return (
    <nav>
      <motion.div initial={{y:-100,x:0}} animate={{x:0,y:0}} transition={{type:"spring"}}>
      <NavLink
        to="/"
        aria-label="Go to home"
      >
        <img src={logomark} alt="" height={40} />
        <span>HomeCoin</span>
      </NavLink>
      </motion.div>
      {
        userName && (
          <Form
            method="post"
            action="logout"
            onSubmit={(event) => {
              if (!confirm("Delete user and all data?")) {
                event.preventDefault()
              }
            }}
          >
            <button type="submit" className="btn btn--warning">
              <span>Delete User</span>
              <TrashIcon width={20} />
            </button>

          </Form>
        )
      }
    </nav>
  )
}
export default Nav