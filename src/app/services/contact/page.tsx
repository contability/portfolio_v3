'use client';

import { palette } from '@styles/theme';
import styled from 'styled-components';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { SiKakaotalk } from 'react-icons/si';

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

        a {
          text-decoration: underline;
        }
      }

      .contact_section-contents__footer {
        display: flex;
        gap: 1vw;
        margin-top: 10%;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 0 5% 0 2%;
  }
`;

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <div className="contact_section-wrapper">
        <section className="contact_section-contents">
          <h2 className="contact_section-contents__header">Hi.</h2>
          <div className="contact_section-contents__main">
            <p>Let&apos;s work together</p>
            <div>
              <div>
                <span>Email:</span>
                <Link href="/">fontability@gmail.com</Link>
              </div>
              <div>
                <span>Phone:</span>
                <span>+82 1099929822</span>
              </div>
            </div>
          </div>
          <div className="contact_section-contents__footer">
            <Link href="https://github.com/contability" target="_blank">
              <BsGithub size={50} />
            </Link>
            <Link href="https://open.kakao.com/o/swjepgJf" target="_blank">
              <SiKakaotalk size={50} />
            </Link>
          </div>
        </section>
      </div>
    </ContactPageContainer>
  );
};

export default ContactPage;
