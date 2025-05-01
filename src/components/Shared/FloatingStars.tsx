const FloatingStars = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Stars layer */}
        <div className="absolute w-[300%] h-full animate-starsMove opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.4)_1px,transparent_2px)] bg-[size:20px_20px]"></div>
      </div>
    );
  };
  
  export default FloatingStars;
  