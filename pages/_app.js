import Head from 'next/head'

import { Banner } from '../components/banner'
import styles from '../styles/index.module.scss'

export default function Home() {
    return (
        <div>
            <Head>
                <title>LX media test</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/reset.css" />
                <link
                    rel="preload"
                    href="/fonts/Proxima-Nova.otf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/Proxima-Nova-Bold.otf"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <div className={styles.wrapper}>
                <Banner />
            </div>
        </div>
    )
}
