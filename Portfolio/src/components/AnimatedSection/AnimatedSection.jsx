import { motion } from "framer-motion";

const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Inicia invisível e 50px abaixo
      whileInView={{ opacity: 1, y: 0 }} // Animação para visível e na posição original
      viewport={{ once: false, amount: 0.2 }} // Dispara a animação apenas uma vez e quando 20% do elemento estiver visível
      transition={{ duration: 1.2, ease: "easeOut" }} // Duração mais longa e curva de easing suave
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
