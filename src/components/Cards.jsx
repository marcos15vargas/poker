import { cards } from "../constants";

export const Cards = () => {
  return (
    <section>
      <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="relative mx-auto max-w-5xl">
          {" "}
          {/*size cards*/}
          <div className="grid max-w-lg gap-8 mx-auto lg:grid-cols-3 lg:max-w-none">
            {/*Carta de ejemplo*/}
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
              >
                <div className="flex-shrink-0">
                  <img
                    className="object-cover w-full h-48"
                    src={card.image}
                    alt={card.alt}
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 bg-fondo">
                  <div className="flex-1">
                    <a href="#" className="block mt-1">
                      <p
                        className="text-2xl font-bold text-[] uppercase text-center"
                        style={{
                          color:
                            card.color == "azul"
                              ? "#2288a6"
                              : card.color == "rojo"
                              ? "#d70022"
                              : "#06a255",
                        }}
                      >
                        {card.title}
                      </p>
                      <p className="mt-4 text-base text-slate-200 text-pretty text-justify">
                        {card.text}
                      </p>
                    </a>
                  </div>
                  <div className="flex items-center mt-6 m-auto">
                    <button
                      className="rounded-lg py-3 px-8 hover:scale-110 transition-all uppercase text-slate-200"
                      style={{
                        backgroundColor:
                          card.color == "azul"
                            ? "#2288a6"
                            : card.color == "rojo"
                            ? "#d70022"
                            : "#06a255",
                      }}
                    >
                      Ver mas
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {/*Fin Carta*/}
          </div>
        </div>
      </div>
      <div className="w-full text-center mt-1">
        <hr
          className="max-w-4xl m-auto border-t-2 border-rojo"
          style={{ color: "#d70022" }}
        />
        <h2 className="mt-6 text-2xl text-rojo font-bold">
          Por donde vas a empezar?
        </h2>
      </div>
    </section>
  );
};
