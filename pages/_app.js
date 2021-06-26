import Head from 'next/head'

import { Banner } from '../components/sections/banner'
import { AboutUs } from '../components/sections/about-us'
import { Career } from '../components/sections/career'
import { Slider } from '../components/sections/slider'
import { Footer } from '../components/sections/footer'

// TODO: repeatable bg in slider

export default function Home() {
    return (
        <div>
            <Head>
                <title>LX media test</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/reset.css" />
                <link rel="stylesheet" href="/common.css" />
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
