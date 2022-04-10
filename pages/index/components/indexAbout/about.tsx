import styles from "../../../index.module.css"; // Import CSS styles from corresponding CSS module

const AboutComponent = (): JSX.Element => {
    return (
        <section className={styles.description}>
            <div className={styles.contrastingColor}>
                <div className={styles.parent}>
                    <div className={styles.yosemite}>
                    </div>
                    <div className={styles.about}>
                        <div className={styles.aboutFlex}>
                            <h2 className={styles.aboutHeading}>About Me</h2>
                            <div className={styles.divider} />
                            <span className={styles.subtitle}>
                                <p>Hi, I&#39;m Matthew and I love working with computers.</p>
                            </span>
                            <span className={styles.aboutParagraph}>
                                <p>
                                            I&#39;ve lived in Berkshire all my life, and from the very beginning I&#39;ve loved technology.
                                    <br />
                                            I began simple programming with Python at age 7 and since then my interest has only grown.
                                            Some of my first programs involved rudimentary experimentation with core
                                            programming and computer science concepts such as selection and iteration.
                                            One of the more complex programs I was working on at the time involved
                                            simple user interface components with <code>JavaFX.Swing</code> to create a
                                            basic, insecure login window that replied with
                                            &quot;<code>Hello, &#123;username&#125;</code>&quot;.
                                    <br />
                                    <br />
                                            Since then, my interests have developed into a deep love of Linux and all
                                            things open-source since I first used a Raspberry Pi at age 8, just one short
                                            year after the Model B&#39;s initial release. I still use Raspberry Pis and
                                            Linux regularly to this day - my operating system of choice is currently a mix of
                                            Arch Linux, Windows and macOS via a Hackintosh, and I use a Raspberry Pi to host films and video for me
                                            and my family to watch using Plex, as well as for a Samba storage server.
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.yosemiteBuffer} />
        </section>
    );
};

export default AboutComponent;
