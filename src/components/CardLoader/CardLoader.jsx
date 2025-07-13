import Loader from "./Loader";

const CardLoader = () => {
  return (
    <div className="card-loader">
      <div className="card-loader__content">
        {/* Имитация заголовка */}
        <div className="card-loader__pretitle">
          <Loader width={82} height={20} />
          <Loader width={18} height={4} />
        </div>
        {/* Имитация текста */}
        <Loader width={113} height={13} />
        {/* Имитация даты */}
        <Loader width={58} height={13} />
      </div>
    </div>
  );
};
export default CardLoader;
