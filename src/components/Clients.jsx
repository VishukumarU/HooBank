import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4 md:h-20`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            className={`${styles.flexCenter} flex-1 sm:min-w-48 min-w-32 hover:bg-gray-400 hover:py-4 hover:rounded-full`}
            key={client.id}>
            <img
              src={client.logo}
              alt="client"
              className="sm:w-48 w-24 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
