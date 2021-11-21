import React from "react";
import "./styles.scss";
import Button from "../../components/button";
import Facebook from "../../images/icons/Facebook.svg";
import Instagram from "../../images/icons/Instagram.svg";
import Twitter from "../../images/icons/Twitter.svg";
import Youtube from "../../images/icons/Youtube.png";
import Modal from "../../components/modal";
import ContactMemberForm from "../../components/contact-member-form";
import { useModal } from "../../hooks";
import { useTranslation } from "react-i18next";

const socialsIcons = {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
};

const ClubMember = ({ img, name, description, website, socials }) => {
  const modal = useModal();
  const { t } = useTranslation();
  return (
    <>
      <Modal {...modal}>
        <ContactMemberForm onExitClick={modal.onClose} />
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
            <a
              href={website}
              target="_blank"
              className="website-link    font-poppins"
            >
              {t("go_to_website")}
            </a>

            <div className="social-links flex mt-10">
              {socials?.map((social) => (
                <a className="mr-7" href={social.value} target="_blank">
                  <img src={socialsIcons[social.name]} alt="facebook" />
                </a>
              ))}
              {/*<a className="mr-7" href="#facebook">*/}
              {/*  <img src={facebook} alt="facebook" />*/}
              {/*</a>*/}
              {/*<a className="mr-7" href="#instagram">*/}
              {/*  <img src={instagram} alt="instagram" />*/}
              {/*</a>*/}
              {/*<a className="mr-7" href="#twitter">*/}
              {/*  <img src={twitter} alt="twitter" />*/}
              {/*</a>*/}
              {/*<a className="mr-7" href="#youtube">*/}
              {/*  <img src={youtube} alt="yotube" />*/}
              {/*</a>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClubMember;
