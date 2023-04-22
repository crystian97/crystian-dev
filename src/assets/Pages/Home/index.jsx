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
          <a href="" target="_blank" rel="noopener noreferrer">
            Linkedin
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Whatsapp
          </a>
        </div>
      </div>
    </>
  );
}
