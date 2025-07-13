import Column from './Column/Column';

export default function Main({loading}) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className='main__content'>
          {/* Колонки будут здесь */}
          <Column loading={loading} title="Без статуса" />
          <Column loading={loading} title="Нужно сделать" />
          <Column loading={loading} title="В работе" />
          <Column loading={loading} title="Тестирование" />
          <Column loading={loading} title="Готово" />
          </div>
        </div>
      </div>
    </main>
  );
}