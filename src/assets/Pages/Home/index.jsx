import {
  Browser,
  FileCss,
  FileHtml,
  FileJs,
  FileJsx,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "phosphor-react";
import styles from "./Styles.module.css";
export default function Home() {
  return (
    <div className={styles.HomeContainer}>
      <div className={styles.HomeProfile}>
        <div className={styles.ProfilePhotoContainer}>
          <img
            className={styles.ProfileImage}
            src="https://avatars.githubusercontent.com/u/74340272?v=4"
            alt="Crystian97"
          />
        </div>
        <small className={styles.title}>crystian de araújo veloso</small>
        <div className={styles.SocialLinks}>
          <a
            className={styles.SocialLink}
            href="https://www.linkedin.com/in/crystian-veloso-98737519b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo size={32} />
          </a>
          <a
            className={styles.SocialLink}
            href="https://github.com/crystian97?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo size={32} />
          </a>
          <a
            className={(styles.whatsapp, styles.SocialLink)}
            href="https://api.whatsapp.com/send?phone=31998414257&text=Ol%C3%A1%20Crystian%20Tudo%20bem?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappLogo size={32} />
          </a>
        </div>
      </div>
      <div className={styles.ProjectsContainer}>
        <h2>Projetos Recentes</h2>
        <div className={styles.ProjectsCardContainer}>
          <div className={styles.card}>
            <div className={styles.cardBorderTop}></div>
            <div className={styles.img}>
              <img
                src="https://github.com/crystian97/neflix-clone/raw/master/assets/cover_netflix_clone.png"
                alt=""
                className={styles.cardImage}
              />
            </div>
            <span> Netflix Clone</span>
            <div className={styles.job}>
              {" "}
              <FileJs size={32} />
              <FileHtml size={32} />
              <FileCss size={32} />
            </div>
            <div className={styles.cardFooter}>
              <a href="https://neflix-clone-three.vercel.app/">
                {" "}
                <Browser size={16} /> Acesar
              </a>
              <a href="https://github.com/crystian97/neflix-clone">
                {" "}
                <GithubLogo size={16} /> Repositório
              </a>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardBorderTop}></div>
            <div className={styles.img}>
              <img
                src="https://github.com/crystian97/weather-forecast/raw/master/weather.png"
                alt=""
                className={styles.cardImage}
              />
            </div>
            <span> Weather Forecast</span>
            <div className={styles.job}>
              {" "}
              <FileJs size={32} /> <FileJsx size={32} />
              <FileHtml size={32} />
              <FileCss size={32} />
            </div>
            <div className={styles.cardFooter}>
              <a href="https://weather-forecast-tau.vercel.app/">
                {" "}
                <Browser size={16} /> Acesar
              </a>
              <a href="https://github.com/crystian97/weather-forecast">
                {" "}
                <GithubLogo size={16} /> Repositório
              </a>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardBorderTop}></div>
            <div className={styles.img}>
              <img
                src="https://github.com/crystian97/todoApp/raw/master/todoApp.gif"
                alt=""
                className={styles.cardImage}
              />
            </div>
            <span> todoApp</span>
            <div className={styles.job}>
              <FileJs size={32} /> <FileJsx size={32} />
              <FileHtml size={32} />
              <FileCss size={32} />
            </div>
            <div className={styles.cardFooter}>
              <a href="https://todo-app-lac-kappa.vercel.app/">
                {" "}
                <Browser size={16} /> Acesar
              </a>
              <a href="https://github.com/crystian97/todoApp">
                {" "}
                <GithubLogo size={16} /> Repositório
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
