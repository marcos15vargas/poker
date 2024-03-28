import { contacto, links, redes } from "../constants";

export const Footer = () => {
  return (
    <section>
      <footer className="w-full lg:flex justify-around px-4 pt-4 pb-12">
        <div className="w-full lg:w-1/3 mt-6">
          <h3 className="text-2xl border-b-2 border-rojo mb-4 w-[120px]">
            Nosotros
          </h3>
          <p className="mb-4 ml-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
            facilis laborum labore dolores recusandae nemo perferendis
            voluptatibus beatae ullam magnam qui ducimus harum, corporis fugiat
            distinctio quidem iusto? Molestiae, harum?
          </p>
          <div className="flex">
            {redes.map((item, index) => (
              <div
                key={index}
                className="p-2 mx-2 bg-rojo rounded-md hover:bg-white hover:text-rojo"
              >
                <a className="" href={item.link} target="_blank">
                  {item.logo}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/6 mt-6">
          <h3 className="text-2xl border-b-2 border-rojo mb-4 w-16">Links</h3>
          {links.map((item, index) => (
            <div key={index} className="mt-1 text-xl lg:text-lg ml-3">
              <a className="hover:text-rojo hover:underline" href={item.link}>
                {item.title}
              </a>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/4 mt-6">
          <h3 className="text-2xl border-b-2 border-rojo mb-4 w-[110px]">
            Contacto
          </h3>
          {contacto.map((item, index) => (
            <div
              key={index}
              className="mt-1 text-xl ml-3 flex items-center mb-3 lg:text-lg"
            >
              <i className="text-rojo mr-4">{item.icon}</i>
              <p className="flex">{item.title}</p>
            </div>
          ))}
        </div>
      </footer>
    </section>
  );
};
