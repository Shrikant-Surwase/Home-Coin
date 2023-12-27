import { Form } from "react-router-dom"

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";

//framer motion
import {motion} from 'framer-motion'
// assets
import illustration from "../assets/intro2.jpg"

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <motion.h1 initial={{x:-200,y:0}} animate={{x:0,y:0}} transition={{type:"spring"}}>
          Take Control of <span className="accent">Your Money</span>
        </motion.h1>
        <motion.p initial={{x:0,y:100}} animate={{x:0,y:0}} transition={{type:"spring",duration:1.2}}>
          Personal budgeting is the secret to financial freedom. Start your journey today.
        </motion.p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?" aria-label="Your Name" autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark" >
            <motion.span initial={{x:-200,y:0}} animate={{x:0,y:0}} transition={{type:"spring"}}>Create Account</motion.span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <motion.img src={illustration} alt="Person with money" width={430} initial={{x:200,y:0}} animate={{x:0,y:0}} transition={{type:"spring"}}/>
    </div>
  )
}
export default Intro