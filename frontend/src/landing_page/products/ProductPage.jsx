import Hero from "./Hero";
import LeftSec from "./LeftSec";
import RightSec from "./RightSec";
import Universe from "./Universe";

export default function ProductPage() {
    return (
        <>
            <Hero />
            <LeftSec
                imgURL="media/images/kite.png"
                productName="Kite"
                ProductDes="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo="https://example.com/try"
                learnMore="https://example.com/try"
                playStore="https://example.com/try"
                appStore="https://example.com/try"
            />
            <RightSec
                imgURL="media/images/console.png"
                productName="Console"
                ProductDes="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                learnMore="https://example.com/try"
                playStore="https://example.com/try"
                appStore="https://example.com/try" />
            <LeftSec
                imgURL="media/images/coin.png"
                productName="Coin"
                ProductDes="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                coin="https://example.com/try"
                playStore="https://example.com/try"
                appStore="https://example.com/try"
            />
            <RightSec
                imgURL="media/images/landing.svg"
                productName="Kite Connect API"
                ProductDes="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                kiteConnect="https://example.com/try"
                playStore="https://example.com/try"
                appStore="https://example.com/try" />
            <LeftSec
                imgURL="media/images/varsity.png"
                productName="Varsity mobile"
                ProductDes="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                playStore=""
                appStore=""
            />
            <Universe />
        </>
    );
}
