export const Info = () => {
  return (
    <section className="w-full lg:h-[100vh] mt-16 lg:mt-0">
      <div className="w-full h-full lg:flex items-center justify-center">
        <div className="w-full text-center text-pretty lg:w-1/2 lg:py-12 lg:px-24 lg:text-left">
          <h2 className="text-4xl font-bold mb-9 lg:px-8">TITULO DE EJEMPLO</h2>
          <p className="px-12 mb-4 lg:mb-5 text-slate-200 lg:px-8 text-xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            ab adipisci nisi dolores eligendi enim recusandae, aliquid error
            maiores et accusamus ea placeat impedit, consequatur praesentium?
            Ullam optio ducimus reiciendis.
          </p>
          <button className="font-bold lg:ml-8 text-xl py-3 px-4 ml-4 bg-rojo mt-6 rounded-lg hover:scale-110 transition-all">
            Contactame
          </button>
        </div>
        <div className="w-full lg:w-1/2 p-12">
          <img src="../public/info.webp" alt="info-imagen"></img>
        </div>
      </div>
    </section>
  );
};
