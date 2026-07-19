import Header from "../components/Header"
import Footer from "../components/Footer";
import Content from "../components/Content";

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

function MainPage() {
    return (
        <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="min-h-screen min-w-screen font-normal bg-light-100 dark:bg-dark-100">
            <motion.header variants={item}>
                <Header />
            </motion.header>
            
            <motion.main variants={item}>
                <Content />
            </motion.main>
            
            <motion.footer variants={item}>
                <Footer />
            </motion.footer>
        </motion.div>
    )
}

export default MainPage;