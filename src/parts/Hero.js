import React from 'react';
import ImageHero from 'assets/images/hero/picture.jpg';
import ImageFrame from 'assets/images/hero/hero-frame.jpg';
import ic_cities from 'assets/images/icons/ic_cities.svg';
import ic_traveler from 'assets/images/icons/ic_traveler.svg';
import ic_treasure from 'assets/images/icons/ic_treasure.svg';
import Button from 'elements/Button';
import numberFormat from 'utils/formatNumber';
export default function Hero(props) {
    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        });
    }

    return (
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{ width: 530 }}>
                    <h1 className="font-weight-bold line-height-1 mb-3" style={{ lineHeight: '170%' }}>
                        Forget Busy Work,<br />
                        Start Next Vacation
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75">
                        We provide what you need to enjoy your
                        holiday with family. Time to make another
                        memorable moments.
                    </p>
                    <Button className="btn px-5" isPrimary hasShadow onClick={showMostPicked}>Show Me Now</Button>

                    <div className="row" style={{ marginTop: '80px' }}>
                        <div className="col-auto" style={{ marginRight: 35 }}>
                            <img width="36" height="36" src={ic_traveler} alt={`${props.data.travelers} Traveler`} />
                            <h6 className="mt-3">
                                {numberFormat(props.data.travelers)} <span className="text-gray-500 font-weight-light">Travelers</span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{ marginRight: 35 }}>
                            <img width="36" height="36" src={ic_treasure} alt={`${props.data.treasures} Treasure`} />
                            <h6 className="mt-3">
                                {numberFormat(props.data.treasures)} <span className="text-gray-500 font-weight-light">Treasure</span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img width="36" height="36" src={ic_cities} alt={`${props.data.cities} Cities`} />
                            <h6 className="mt-3">
                                {numberFormat(props.data.cities)} <span className="text-gray-500 font-weight-light">Cities</span>
                            </h6>
                        </div>
                    </div>
                </div>
                {/* Kanan */}

                <div className="col-6 pl-5">
                    <div style={{ width: 520, height: 410 }}>
                        <img className="img-fluid position-absolute" src={ImageHero} style={{ margin: '-30px 0 0 -30px', zIndex: 1 }} alt="room with chheese" />
                        <img className="img-fluid position-absolute" src={ImageFrame} style={{ margin: '0 -15px -15px 0' }} alt="room with chheese" />
                    </div>
                </div>
            </div>
        </section>
    );
}
