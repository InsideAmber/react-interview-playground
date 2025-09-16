import React, { useState,useEffect} from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

// Example with 20 images
const images = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  url: `https://picsum.photos/id/${1010 + i}/800/400`,
  title: `Image ${i + 1}`
}));

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  // Group dots — show 5 dots around the current index
  const getVisibleDots = () => {
    const maxVisible = 5;
    const total = images.length;
    let start = Math.max(currentIndex - 2, 0);
    let end = start + maxVisible;

    if (end > total) {
      end = total;
      start = Math.max(end - maxVisible, 0);
    }
    return images.slice(start, end);
  };

  return (
    <div style={styles.container}>
      <div style={styles.carousel}>
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].title}
          style={styles.image}
        />

        {/* Navigation Buttons */}
        <div style={styles.buttons}>
          <button onClick={goToPrevious} style={styles.navButton}>
            <MdArrowBackIos size={24} />
          </button>
          <button onClick={goToNext} style={styles.navButton}>
            <MdArrowForwardIos size={24} />
          </button>
        </div>

        {/* Progress Container */}
        <div style={styles.progressContainer}>
          {currentIndex + 1} / {images.length}
        </div>

        {/* Grouped Dots */}
        <div style={styles.dots}>
          {getVisibleDots().map((image) => {
            // Map back to the actual index
            const actualIndex = images.findIndex(img => img.id === image.id);
            console.log(actualIndex);
            return (
              <span
                key={image.id}
                style={{
                  ...styles.dot,
                  backgroundColor: actualIndex === currentIndex ? "#333" : "#bbb"
                }}
                onClick={() => goToIndex(actualIndex)}
              />
            );
          })}
        </div>

        {/* Title Overlay */}
        <div style={styles.title}>{images[currentIndex].title}</div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "50px"
  },
  carousel: {
    position: "relative",
    width: "800px",
    height: "400px",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 0.5s ease-in-out"
  },
  buttons: {
    position: "absolute",
    top: "50%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    transform: "translateY(-50%)",
    padding: "0 20px"
  },
  navButton: {
    background: "rgba(0,0,0,0.5)",
    border: "none",
    color: "#fff",
    fontSize: "1.5rem",
    cursor: "pointer",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  progressContainer: {
    position: "absolute",
    top: "10px",
    right: "20px",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "0.9rem"
  },
  dots: {
    position: "absolute",
    bottom: "15px",
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  dot: {
    height: "12px",
    width: "12px",
    margin: "0 4px",
    borderRadius: "50%",
    display: "inline-block",
    cursor: "pointer",
    transition: "background-color 0.3s"
  },
  title: {
    position: "absolute",
    bottom: "50px",
    width: "100%",
    textAlign: "center",
    color: "#fff",
    fontSize: "1.2rem",
    textShadow: "1px 1px 5px rgba(0,0,0,0.7)"
  }
};
