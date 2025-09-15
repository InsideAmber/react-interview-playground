import React, { useState, useEffect } from "react";

// implement 
// Grouped dots (5 visible at once) showing the active slide
// A progress container that shows where the user is in the list (like “4 / 20”)

const images = [
  {
    id: 1,
    url: "https://picsum.photos/id/1015/800/400",
    title: "Mountain View"
  },
  {
    id: 2,
    url: "https://picsum.photos/id/1016/800/400",
    title: "River Side"
  },
  {
    id: 3,
    url: "https://picsum.photos/id/1018/800/400",
    title: "Forest Path"
  },
  {
    id: 4,
    url: "https://picsum.photos/id/1020/800/400",
    title: "City Lights"
  }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div style={styles.container}>
      <div style={styles.carousel}>
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].title}
          style={styles.image}
        />
        <div style={styles.buttons}>
          <button onClick={goToPrevious} style={styles.navButton}>‹</button>
          <button onClick={goToNext} style={styles.navButton}>›</button>
        </div>
        <div style={styles.dots}>
          {images.map((_, index) => (
            <span
              key={index}
              style={{
                ...styles.dot,
                backgroundColor: index === currentIndex ? "#333" : "#bbb"
              }}
              onClick={() => goToIndex(index)}
            />
          ))}
        </div>
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
    fontSize: "2rem",
    cursor: "pointer",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
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
    margin: "0 5px",
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
