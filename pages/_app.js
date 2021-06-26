import Head from 'next/head'

import { Banner } from '../components/banner'
import { AboutUs } from '../components/about-us'
import { Career } from '../components/career'
import { Slider } from '../components/slider'
import { Footer } from '../components/footer'

// TODO:

// 1) add slider navigation arrow mobile
// 2) loop in slider? repeatable bg
// 3) add sections to section folder
// 4) slider width and left padding

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
