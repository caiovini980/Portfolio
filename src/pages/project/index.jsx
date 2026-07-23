import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useParams } from "react-router-dom"

import PortfolioData from '../../data/PortfolioData'

import Content from "./Content"

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
  const { slug } = useParams()
  const project = PortfolioData.find((project) => project.slug === slug)

  if (!project) {
    // Error page
    return <p>ERROR PAGE - PROJECT NOT FOUND</p>
  }

  useEffect(() => {
    document.title = `Caio | ${project.title}`
  }, [project]);

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