import React from "react";
import "./styles.scss";
import Button from "../../components/button";
import Modal from "../../components/modal";
import ContactMemberForm from "../../components/contact-member-form";
import { useModal } from "../../hooks";
import { useTranslation } from "react-i18next";

// const socialsIcons = {
//   Facebook,
//   Instagram,
//   Twitter,
//   Youtube,
// };

const ClubMember = ({ img, name, description, website, socials, id }) => {
  const modal = useModal();
  const { t } = useTranslation();
  return (
    <>
      <Modal {...modal}>
        <ContactMemberForm memberId={id} onExitClick={modal.onClose} />
      </Modal>
      <div className="current-member">
        <div className="current-member-img">
          <img src={img} alt="club-member" />
        </div>

        <div className="current-member-details">
          <h3>{name}</h3>
          <p>{description}</p>

          <div className="contacts-wrapper mt-9">
            <Button onClick={modal.onOpen} variant="filled">
              {t("contact")}
            </Button>
            {socials[0].name && socials[0].value ? (
              <a
                href={socials[0].value}
                target="_blank"
                className="website-link hover:opacity-80 hover:underline transition-opacity  font-poppins"
              >
                {t("more_info")}
              </a>
            ) : null}

            {/* <div className="social-links flex mt-10">
              {socials?.map((social) => (
                <React.Fragment key={social.value}>
                  <a className="mr-7" href={social.value} target="_blank">
                    {social.name}
                  </a>
                  <a className="mr-7" href={social.value} target="_blank">
                    {social.name}
                  </a>{" "}
                  <a className="mr-7" href={social.value} target="_blank">
                    {social.name}
                  </a>
                  <a className="mr-7" href={social.value} target="_blank">
                    {social.name}
                  </a>
                </React.Fragment>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClubMember;
