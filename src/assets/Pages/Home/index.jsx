import styles from "./Styles.module.css";
export default function Home() {
  return (
    <>
      <div className={styles.HomeContainer}>
        <div className={styles.ProfilePhotoContainer}>
          <img
            className={styles.ProfileImage}
            src="https://avatars.githubusercontent.com/u/74340272?v=4"
            alt="Crystian97"
          />
        </div>
        <div className={styles.SocialLinks}>
          <a
            className={styles.SocialLink}
            href="https://www.linkedin.com/in/crystian-veloso-98737519b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            className={styles.SocialLink}
            href="https://github.com/crystian97?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className={(styles.whatsapp, styles.SocialLink)}
            href="https://api.whatsapp.com/send?phone=31998414257&text=Ol%C3%A1%20Crystian%20Tudo%20bem?"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whatsapp
          </a>
        </div>
      </div>
    </>
  );
}
