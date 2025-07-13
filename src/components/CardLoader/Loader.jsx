const Loader = ({
  width = 220,
  height = 130,
  colorStart = "#c1cddc",
  colorEnd = "#e9eef7",
}) => {
  return (
    <div
      className="loader"
      style={{
        width: "${width}px",
        height: "${height}px",
        background: "linear-gradient(90deg, ${colorStart}, ${colorEnd})",
      }}
    ></div>
  );
};

export default Loader;
