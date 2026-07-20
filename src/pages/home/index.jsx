import Header from "./Header"
import Footer from "./Footer";
import Content from "./Content";

import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // delay between each child's animation
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

function Home() {
    return (
        <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="min-h-screen min-w-screen font-normal bg-light-100 dark:bg-dark-100 transition-colors duration-300 ease-in-out">
            <motion.main variants={item}>
                <Content />
            </motion.main>
        </motion.div>
    )
}

export default Home;