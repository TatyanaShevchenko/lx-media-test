import Head from 'next/head'

import { Banner } from '../components/sections/banner'
import { AboutUs } from '../components/about-us'
import { Career } from '../components/career'
import { Slider } from '../components/sections/slider'
import { Footer } from '../components/footer'

// TODO:

// 2) loop in slider? repeatable bg
// 3) add sections to section folder

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
