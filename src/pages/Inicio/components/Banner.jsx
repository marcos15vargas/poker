export const Banner = () => {
  return (
    <section>
      <div className="banner w-full h-[60vh] lg:h-[40vh] mt-[-80px] bg-local flex flex-col items-center justify-center">
        <h1 className="text-rojo font-bold text-2xl mb-4 lg:text-[30px] lg:mb-2">
          APRENDE A JUGAR POKER YA!!
        </h1>
        <p className="font-bold text-sm lg:text-lg text-center mb-4 lg:mb-0">
          Se el mejor de las mesas aprendiendo con todo <br />
          el contenido de YOUTUBE,SIN PAGAR NADA.
        </p>
        <button className="font-bold py-3 px-4 bg-rojo mt-6 rounded-lg uppercase hover:scale-110 transition-all">
          Quiero Aprender...
        </button>
      </div>
    </section>
  );
};
