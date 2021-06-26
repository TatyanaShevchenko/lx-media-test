import Head from 'next/head'

import { Banner } from '../components/banner'
import { AboutUs } from '../components/about-us'
import { Career } from '../components/career'
import { Slider } from '../components/slider'
import { Footer } from '../components/footer'

// TODO:

// 3) add slider navigation arrow desktop and mobile
// 4) loop in slider? repeatable bg

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
            <div className="root__container">
                <Banner />
                <AboutUs />
                <Career />
                <Slider />
                <Footer />
            </div>
        </div>
    )
}
