/* eslint jsx-a11y/label-has-for:0 */

import React from 'react'
import Helmet from 'react-helmet'
import { Layout } from '../components'

import config from '../../config'


const title = `Open Tech Will Save Us | ${config.siteTitle}`;

const SHOW_LIVE_STREAM = false;

let liveStream;
if (SHOW_LIVE_STREAM) {
    liveStream = <div>
        <video id="videoStream" style={{width: '640px', height: '360px'}} src="https://stream.matrix.org/hls/live.m3u8" controls></video>
        <script src="/js/hls.light.min.js"></script>
        <script src="/js/livestream.js"></script>
    </div>;
} else {
    liveStream = <img src="/images/Open-Tech-3-Light@2x.png" alt='Open Tech Will Save Us'/>;
}

const Legal = () => {
    return (<Layout hasNavPadding="true" excerptOverride="Open Tech Will Save Us is a virtual meetup, taking the form of a monthly live video stream broadcasting on the second Wednesday of every month at 5pm UTC"
    titleOverride={title}>
            <Helmet title={title}>
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:image" content="https://matrix.org/images/Open-Tech-3-Light-Social@2x.png" />
            </Helmet>
        <div>
            {liveStream}

            <h1>Open Tech Will Save Us</h1>

            <p><strong><a href="https://matrix.to/#/!AnacGSwlCZcUuAfcEU:matrix.org?via=matrix.org&via=bpulse.org&via=uhoreg.ca">Join the live chat now! #open-tech-meetup:matrix.org</a></strong></p>

            <p>Open Tech Will Save Us is a virtual meetup, taking the form of a monthly live video stream broadcasting on the second Wednesday of every month at 5pm UTC.</p>

            <p>We discuss issues relating to technology, especially the importance of Open, Interoperable standards, and how they can enable decentralised tech to keep our data private while still enabling communication.</p>

            <h2>Next Event</h2>
            <p>Following two great events, we're looking forward to presenting the third!</p>
            <p>The next event will be held on <b>Wednesday 10th June 2020</b> at <b>5PM UTC</b> (6PM UK time).
            Agenda and more details to follow, <strong><a href="https://matrix.to/#/!AnacGSwlCZcUuAfcEU:matrix.org?via=matrix.org&via=bpulse.org&via=uhoreg.ca">
                join the live chat</a></strong> or check back here for updates.
            </p>

            <h3>Agenda</h3>

            <ul>
                <li><strong><a href="https://annie.elequin.io/">Annie Elequin</a></strong>, creator
                    of <a href="https://dittochat.org/">Ditto Chat</a> will discuss her
                    work to produce great UX in an Open Source messenger with React Native.</li>
                <li>Our very own <strong>Erik Johnson</strong> will give an overview of the recent
                    sharding work being done to improve Synapse performance. Users of the Matrix.org
                    homeserver may have already seen these benefits!</li>
                <li>
                    PLUS (you know it!) special speakers who will proclaim, announce or inform on
                    topics that <em>you</em> will find exciting and insightful!
                </li>
            </ul>

            <h2>Previous Events</h2>

            <h3>13th May 2020</h3>

            <p>
                The second event was held on <b>Wednesday 13th May 2020</b>
                at <b>5PM UTC</b> (6PM UK time). <a href="/open-tech-will-save-us/2">Watch the recording here.</a>
            </p>

            <h4>Agenda</h4>
            <ul>
                <li><a href="http://exple.tive.org/blarg/" target="_blank" rel="noopener noreferrer">Mike Hoye</a> from Mozilla will be talking about "Verbs in the fediverse"</li>
                <li>Eugen (<a href="https://mastodon.social/@Gargron" target="_blank" rel="noopener noreferrer">@Gargron@mastodon.social</a>) will talk about "how we keep mastodon.social running at scale" as a Q&A</li>
                <li>... and a new VIP tour of Dendrite, the next-gen Matrix Homeserver!</li>
            </ul>

            <h3>8th April 2020</h3>

            <p>
                The first event was held on <b>Wednesday 8th April 2020</b> at <b>5PM UTC</b> (6PM UK time).  <a href="/open-tech-will-save-us/1">Watch the recording here.</a>
            </p>

            <h4>Agenda</h4>
            <ul>
                <li><a href="https://https://twitter.com/ara4n" target="_blank" rel="noopener noreferrer">Matthew Hodgson</a> technical co-founder of <a href="https://matrix.org" target="_blank" rel="noopener noreferrer">Matrix.org</a> to introduce and speak about the importance of decentralisation and privacy</li>
                <li><a href="https://twitter.com/saghul" target="_blank" rel="noopener noreferrer">Saúl Ibarra Corretgé</a> from <a href="https://jitsi.org" target="_blank" rel="noopener noreferrer">Jitsi</a> on the rapid growth they've experienced since the start of the 2020 crisis</li>
                <li><a href="https://twitter.com/daviddias" target="_blank" rel="noopener noreferrer">David Dias</a> from <a href="https://ipfs.io/" target="_blank" rel="noopener noreferrer">IPFS</a>  IPFS introducing gossipsub in libp2p, including the security hardening work that they've been putting into v1.1!</li>
                <li><a href="https://twitter.com/valereonmobile" target="_blank" rel="noopener noreferrer">Valère</a>, from <a href="https://matrix.org" target="_blank" rel="noopener noreferrer">Matrix</a> and <a href="https://riot.im" target="_blank" rel="noopener noreferrer">Riot</a>, who will present the importance of UX and cross-signing keys in end-to-end encrypted communications.</li>
            </ul>

            <h2>How to join</h2>
            <p><strong><a href="https://matrix.to/#/!AnacGSwlCZcUuAfcEU:matrix.org?via=matrix.org&via=bpulse.org&via=uhoreg.ca">Join the live chat now! #open-tech-meetup:matrix.org</a></strong></p>
            <p>From the live chat, you can ask questions to the presenters! We can invite you to join the broadcast, or if you prefer we'll read them out for you.</p>
            <p>Once we're live there will be a video stream available on this page. You can also <strong><a href="https://www.youtube.com/watch?v=O3YP1TU-L_8">join the stream via YouTube</a></strong>.</p>
            <p>Issues with this stream? Try <a href="https://stream.matrix.org/">https://stream.matrix.org/</a></p>

            <h3>Important note on timezones</h3>

            5pm UTC is:
            <ul>
                <li>7pm in Berlin</li>
                <li>6pm in the UK</li>
                <li>1pm in New York</li>
                <li>10am in California</li>
            </ul>
        </div>
    </Layout>)
}

export default Legal
