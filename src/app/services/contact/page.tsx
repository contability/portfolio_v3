'use client';

import { palette } from '@styles/theme';
import styled from 'styled-components';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { SiKakaotalk } from 'react-icons/si';
import { RxNotionLogo } from 'react-icons/rx';
import { SiVelog } from 'react-icons/si';
import CopyBox from '@component/CopyBox';

const ContactPageContainer = styled.article`
  height: 100vh;
  width: 100vw;
  background-color: ${palette.BACK_BLACK};
  color: ${palette.LINE_WHITE};
  overflow: hidden;

  .contact_section-wrapper {
    padding-left: 10%;
    padding-right: 20%;
    display: flex;

    @media (max-width: 1024px) {
      flex-direction: column;
      height: fit-content;
    }

    * {
      font-family: Montserrat, sans-serif;
    }

    .contact_section-contents {
      padding-top: 30%;

      .contact_section-contents__header {
        font-size: 15vw;
        letter-spacing: -1.8vw;

        @media (max-width: 1024px) {
          font-size: 35vw;
        }

        @media (max-width: 600px) {
          font-size: 50vw;
        }
      }

      .contact_section-contents__main {
        display: flex;
        flex-direction: column;
        gap: 2vw;

        .contact_section-contents__email {
          text-decoration: underline;
          margin-bottom: 4px;
        }

        .contact_section-contents__phone {
          white-space: nowrap;
        }
      }

      .contact_section-footer {
        display: flex;
        gap: 1vw;
        margin-top: 10%;

        @media (max-width: 600px) {
          gap: 2vw;
        }

        .contact_section-footer__link {
          display: block;
          transition: transform 0.3s ease-in-out;

          &:hover {
            transform: translate(0, -4px);
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    padding: 0 5% 0 2%;
  }
`;

const ContactPage = () => {
  const openEmail = () => {
    window.location.href = `mailto:fontability@gmail.com?subject=Can I get your resume?&body=message%20goes%20here`;
  };

  return (
    <ContactPageContainer>
      <div className="contact_section-wrapper">
        <section className="contact_section-contents">
          <h2 className="contact_section-contents__header">Hi.</h2>
          <div className="contact_section-contents__main">
            <p>Let&apos;s work together</p>
            <div>
              <div>
                <span>Email:&nbsp;</span>
                <button onClick={() => openEmail()} className="contact_section-contents__email">
                  fontability@gmail.com
                </button>
              </div>
              <div className="contact_section-contents__phone">
                <span>Phone:&nbsp;</span>
                <CopyBox contents="+82 10-9992-9822" />
              </div>
            </div>
          </div>
          <div className="contact_section-footer">
            <Link className="contact_section-footer__link" href="https://github.com/contability" target="_blank">
              <BsGithub size={50} />
            </Link>
            <Link className="contact_section-footer__link" href="https://open.kakao.com/o/swjepgJf" target="_blank">
              <SiKakaotalk size={50} />
            </Link>
            <Link
              className="contact_section-footer__link"
              href="https://www.notion.so/furium/Dev-9254371bc7a84df5a25aad0bea2ad916?pvs=4"
              target="_blank"
            >
              <RxNotionLogo size={50} />
            </Link>
            <Link className="contact_section-footer__link" href="https://velog.io/@furium" target="_blank">
              <SiVelog size={50} />
            </Link>
          </div>
        </section>
      </div>
    </ContactPageContainer>
  );
};

export default ContactPage;
