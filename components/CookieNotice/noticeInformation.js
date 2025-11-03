"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import styles from "./NoticeInformation.module.css";

const NoticeInformation = () => {
    return (
        <section className={styles.NoticeCookie}>
            <div className="container mb-20">
                <div className="row">
                    <div className={styles.Cokinotichead}>
                        <h1 className="text-2xl font-bold text-black">Export Genius – Cookie Notice</h1>
                    </div>
                </div>
                <div className={styles.CoociesTextnote}>
                    <h3 className="mb-3 mt-4">Introduction</h3>
                    <p>Export Genius Cookie Notice describes how Export Genius (“Export Genius”, “we”, “us” or “our”) uses third-party cookies on our Website, and the choices users have.  </p>
                    <p>If users do not accept these cookies or similar technologies, they can disable them by following the instructions in this policy below or by changing their browser settings so that cookies or similar technologies from the Website cannot be placed on their computer or mobile device.</p>
                    <p>This Cookie Notice provides visitors with clear and comprehensive information about the cookies used and the purposes for using them. To review the privacy policies that apply to users of  <a href="https://www.exportgenius.com/">https://www.exportgenius.com/</a> , please read our privacy policy, which is available here: <a href="https://www.exportgenius.com/privacy-policy">https://www.exportgenius.com/privacy-policy</a>.   </p>

                    <h3 className="mb-3 mt-4">What does cookie mean</h3>
                    <p>A cookie is a small data file that is sent to the device of users when users first visit a website. Cookies usually include an identification number that is unique to the device or browser of user is using. Such identifier can help us better understand our users and how they are using the Website. Cookies also enable recognition of users when they re-visit the Website, keeping their settings and preferences and ability to offer customized features. If users prefer, however, at any time users can reset their browser, so it refuses all cookies, or notifies users when a cookie is being sent. </p>

                    <h3 className="mb-3 mt-4">How cookies are categorized</h3>
                    <p>Cookies are categorized into:</p>

                    <h5 className="mb-3 mt-4">On-site cookies</h5>
                    <p>On-site cookies are cookies, which are served directly by us to computer or device of users.</p>

                    <h5 className="mb-3 mt-4">Cookies from external sources</h5>
                    <p>Third-party cookies are cookies, which are served by a third party on our behalf. We use third-party cookies for functionality, performance/analytics, and social media purposes.</p>
                    <p>Cookies can remain on computer or mobile device of users for different periods of time. Some cookies are ‘session (essential) cookies’, meaning that they exist only while their browser is open. These are deleted automatically once users close their browser.</p>

                    <h5 className="mb-3 mt-4">Lifetime Cookies</h5>
                    <p>Lifetime cookies survive after browser of users is closed. These can be used by the Website to recognize computer activity of users when they open their browser and visit the webpage again. </p>
                    <p>We also use cookies and similar technologies in some emails, SMS and push notifications which enable us to understand whether users have opened the message we sent to them or via our services to their recipients and how the recipient interacted with it. If users have enabled images, cookies will also be set on their computer or mobile device and will also be set if they click on any link within the email.</p>

                    <h5 className="mb-3 mt-4">How users can change cookie settings</h5>
                    <p>We use cookies on this Website to make sure users can use the Website easily and enjoy the services. Some of these cookies are essential and we can’t provide our service without them, but there are others that can be turned off. Users have the right to choose whether to accept or not these optional cookies and they may remove the cookies by following the instructions of their device preferences. However, please note that if users choose to refuse or disable cookies, they may not be able to use the full functionality of our Website and their online experience may be limited.</p>
                    <p>Users can also change their preferences by changing the settings in their browser. Most browsers will allow users to select the level of privacy settings they desire.  This lets users to control their cookie settings so that they can:</p>

                    <ul className={styles.uliofCookies}>
                        <li>See what cookies or other locally stored data they’ve got and delete all non-essential cookies on a collective basis;</li>
                        <li>Block third party cookies or similar technology;</li>
                        <li>Block cookies or similar technology from particular websites;</li>
                        <li>Block all cookies or similar technologies from being set; or</li>
                        <li>Delete all cookies or similar technologies when they close their browser.</li>
                    </ul>
                    <p>These settings are usually found in the ‘options’ or ‘preferences’ menu of their internet browser.</p>
                    <p>Deleting cookies means that any preference settings users have made on a Website will be lost. If users have set their preferences to opt out of cookies, this setting will be lost too, as that information is stored in a cookie. If users choose to reject cookies, as noted above, they may not be able to use certain features of our Website. We do not recommend turning off all cookies when using our Website as we cannot guarantee that user’s experience on our Website will be as good as it could otherwise be.</p>

                    <h3 className="mb-3 mt-4">Cookie settings</h3>
                    <h5 className="mb-3 mt-4">Privacy preference point</h5>
                    <p>When users visit our Website, it may store or retrieve information on their browser, mostly in the form of cookies. This information might be about users, their preferences or their device and is mostly used to make the site work as they expect it to.</p>

                    <h5 className="mb-3 mt-4">Manage cookies based on preference</h5>

                    <ul className={styles.uliofCookies}>
                        <li> <b>Strictly necessary cookies:</b> These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by users which amount to a request for services, such as setting user’s privacy preferences, logging in or filling in forms. Users can set their browser to block or alert users about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.</li>

                        <li> <b>Performance cookies:</b> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our website. They help us to know which pages are the most and least popular and see how users move around the website. All information these cookies collect is aggregated and therefore anonymous. If users do not allow these cookies we will not know when they have visited our website, and will not be able to monitor its performance.</li>
                        <li> <b>Functional Cookies:</b> These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If users do not allow these cookies, then some or all these services may not function properly.</li>
                        <li> <b>Targeting Cookies:</b> These cookies may be set through our website by our marketing partners. They may be used by those companies to build a profile of user’s interests and show them relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying their browser and internet device. If users do not allow these cookies, they will experience less targeted advertising.</li>
                    </ul>

                    <h3 className="mb-3 mt-4">Contact Us</h3>
                    <p>If you have any questions or comments regarding our Cookie Notice, please contact us at:
                        <a href="mailto:info@exportgenius.in"> info@exportgenius.in </a> or <a href="tel:+91 8003 8003 57"> +91 8003 8003 57</a>
                    </p>

                </div>
            </div>
        </section>
    );
};

export default NoticeInformation;
