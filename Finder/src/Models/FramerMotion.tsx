export const leftSectionVariants = {
    initial: {
      opacity: 0,
      x: -50
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring", 
        stiffness: 100, // Força da "mola"
        damping: 20 // Amortecimento
      }
    }
  };

  export const rightSectionVariants = {
    initial: {
      opacity: 0,
      x: 50
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring", 
        stiffness: 100, // Força da "mola"
        damping: 20 // Amortecimento
      }
    }
  };
