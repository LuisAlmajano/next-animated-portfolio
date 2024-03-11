"use client";

import { motion } from "framer-motion";

const TestPage = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        className="w-96 h-96 bg-red-400 rounded"
        initial={{ x: -100 }}
        animate={{ x: 100, y: 300, opacity: 0.5 }}
        transition={{ delay: 1, duration: 3 }}
      ></motion.div>
    </div>
  );
};

export default TestPage;
