import React from 'react';
import CookieConsent from 'react-cookie-consent';
import './style/cookie.scss'

const Cookie = () => {
    return (
        <CookieConsent
            debug={false}
            buttonText="Sutinku"
            enableDeclineButton
            declineButtonClasses="button"
            declineButtonText="Nesutinku"
            style={{background: "#fff", color: 'rgba(0, 0, 0, 0.87)'}}
            buttonClasses="button"
            contentStyle={{textAlign: 'center'}}
            flipButtons
        >
            Mes naudojame slapukus, kurie užtikrina, kad Jums bus patogu naudotis tinklalapiu. Jei toliau naršysite mūsų
            tinklalapyje, tai tolygu Jūsų sutikimui su slapukų naudojimu.
        </CookieConsent>
    );
}

export default Cookie;