import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../style";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex flex-1 flex-col justify-start mr-10">
          <img
            src={logo}
            alt="hoo_bank"
            className="w-64 h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((link) => (
            <div
              className="flex flex-col ss:my-0 my-4 min-w-36"
              key={link.title}>
              <h4 className="font-poppins font-medium text-[18px] text-white leading-[27px]">
                {link.title}
              </h4>
              <ul className="list-none mt-4">
                {link.links.map((l, index) => (
                  <li
                    key={index}
                    className={`font-poppins font-normal text-[16px] leading-6 text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== link.links.length - 1 ? "mb-4" : ""
                    }`}>
                    {l.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-7 text-white">
          2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((media, index) => (
            <img
              key={media.id}
              src={media.icon}
              alt={media.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
