import React from 'react'
import { graphql } from 'gatsby'

import Helmet from 'react-helmet'
import { Layout, MXContentMain } from '../../components'
import config from '../../../config'


const Guides = ({data}) => {
 
    return (<Layout navmode="develop">
        <MXContentMain>
          <Helmet title={`Guides | ${config.siteTitle}`} />
          <div class="mxblock mxblock--develop">
          <h1 class="mxblock__hx">Top Links</h1>
          <div class="mxgrid">
            <div class="mxgrid__item50">
              <div class="mxgrid__item__bg mxgrid__item__bg--develop">
<img src="/images/music_play_button.svg" alt="" class="mxgrid__item__bg__img mxgrid__item__bg__img--develop" />
                <div class="mxgrid__item__bg__vert mxgrid__item__bg__vert--develop">
                  <h4 class="mxgrid__item__bg__hx mxgrid__item__bg__hx--develop">Get Started</h4>
                  <p class="mxgrid__item__bg__p">How to get started with Matrix<br /></p>
                </div>
              </div>
            </div>
            <div class="mxgrid__item50">
              <div class="mxgrid__item__bg mxgrid__item__bg--develop">
<img src="/images/basic_server_upload.svg" alt="" class="mxgrid__item__bg__img mxgrid__item__bg__img--develop" />
                <div class="mxgrid__item__bg__vert mxgrid__item__bg__vert--develop">
                  <h4 class="mxgrid__item__bg__hx mxgrid__item__bg__hx--develop">Synapse Installation</h4>
                  <p class="mxgrid__item__bg__p">Installing Synapse, a homeserver implementation written in Python<br /></p>
                </div>
              </div>
            </div>
            <div class="mxgrid__item50">
              <div class="mxgrid__item__bg mxgrid__item__bg--develop">
<img src="/images/basic_server.svg" alt="" class="mxgrid__item__bg__img mxgrid__item__bg__img--develop" />
                <div class="mxgrid__item__bg__vert mxgrid__item__bg__vert--develop">
                  <h4 class="mxgrid__item__bg__hx mxgrid__item__bg__hx--develop">Synapse Management </h4>
                  <p class="mxgrid__item__bg__p">How to manage Synapse, and tips &amp; tricks<br /></p>
                </div>
              </div>
            </div>
            <div class="mxgrid__item50">
              <div class="mxgrid__item__bg mxgrid__item__bg--develop">
<img src="/images/basic_elaboration_message_happy.svg" alt="" class="mxgrid__item__bg__img mxgrid__item__bg__img--develop" />
                <div class="mxgrid__item__bg__vert mxgrid__item__bg__vert--develop">
                  <h4 class="mxgrid__item__bg__hx mxgrid__item__bg__hx--develop">Moderation</h4>
                  <p class="mxgrid__item__bg__p">How to manage and moderate Matrix rooms<br /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 id="recommended-by-matrixorg">Recommended by matrix.org</h2>

<table>
  <thead>
    <tr>
      <th>If you want to…</th>
      <th>Then read…</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Just get started!</td>
      <td><strong><a href="/docs/guides/getting-involved">Getting Involved</a></strong>, which explains various ways of getting started with Matrix<br /><br />or<br /><br /><strong><a href="./faq.html">the FAQ</a></strong>, where we try to answer all your questions relating to Matrix</td>
    </tr>
    <tr>
      <td>Understand the CS API</td>
      <td><strong><a href="https://matrix.org/docs/guides/client-server.html">How to use the client-server API</a></strong>, which explains in detail how to use the CS API.<br />Useful if you want to write a client (or modify an existing one) - or if you’re just interested in how it works “under the hood”</td>
    </tr>
    <tr>
      <td>Get started with the CS API using …</td>
      <td> </td>
    </tr>
    <tr>
      <td>   … JavaScript</td>
      <td><strong><a href="https://matrix.org/docs/guides/usage-of-the-matrix-js-sdk">Usage of the matrix-js-sdk</a></strong></td>
    </tr>
    <tr>
      <td>   … Python</td>
      <td><strong><a href="https://matrix-org.github.io/matrix-python-sdk/">Matrix Python SDK documentation</a></strong></td>
    </tr>
    <tr>
      <td>Understand Application Services</td>
      <td>The <strong><a href="./application_services.html">Application services</a></strong> guide introduces them and explains what they can be used for</td>
    </tr>
    <tr>
      <td>See an example of a simple bot</td>
      <td><strong><a href="https://github.com/4nd3r/tiny-matrix-bot">tiny-matrix-bot</a></strong> source code</td>
    </tr>
    <tr>
      <td>Create a complete working chatbot</td>
      <td><strong><a href="/docs/guides/elizabot">Using Matrix to make Chatbot software from the 1960s available in 2018</a></strong> goes from the basics, brings in <a href="https://github.com/turt2live/matrix-js-bot-sdk">matrix-js-bot-sdk</a>, and ends with deployment on a Raspberry Pi</td>
    </tr>
    <tr>
      <td>Work on Bridges to Matrix</td>
      <td><strong><a href="./types-of-bridging.html">Types of Bridging</a></strong> should be read by all bridge developers to ensure everyone has the same mental map of terminology when implementing bridges</td>
    </tr>
    <tr>
      <td>Migrate from the old v1 CS API</td>
      <td>the <strong><a href="./client-server-migrating-from-v1.html">v1 migration guide</a></strong> which justs lists the changes from v1 to r0</td>
    </tr>
    <tr>
      <td>Use E2E in a client application</td>
      <td>The <strong><a href="./e2e_implementation.html">End-to-end Encryption Implementation Guide</a></strong> is intended for client developers who wish to add support for end-to-end encryption to their clients</td>
    </tr>
    <tr>
      <td>Install Synapse</td>
      <td><strong><a href="/docs/guides/installing-synapse">Installing Synapse Guide</a></strong></td>
    </tr>
    <tr>
      <td>   …  using Docker</td>
      <td><strong><a href="https://github.com/matrix-org/synapse/tree/master/docker">the Synapse Docker README</a></strong></td>
    </tr>
    <tr>
      <td>Understand Moderation in Matrix</td>
      <td><strong><a href="/docs/guides/moderation">Moderation in Matrix</a></strong></td>
    </tr>
  </tbody>
</table>

<h2 id="guides-list">Guides List</h2>

<p>This collection of guides is taken from around the web. If you have used a guide, and recommend it, please go ahead and click “Recommend” on the right, and we’ll use this to sort the articles by recommendations.</p>

<table>
  <tbody>
    <tr>
    </tr>
  </tbody>
</table>

<h3 id="introduction-for-users">Introduction for Users</h3>

<table>
  <thead>
    <tr>
      <th>Article</th>
      <th>Author</th>
      <th>Language</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://www.snoyman.com/blog/2018/05/guide-to-matrix-riot">Guide to matrix.org and riot.im</a></td>
      <td>Michael Snoyman</td>
      <td>English</td>
      <td> </td>
    </tr>
    <tr>
      <td><a href="http://laforesta.net/riot-matrix/">Riot Matrix from La Foresta</a></td>
      <td>La Foresta team</td>
      <td>Italian</td>
      <td> </td>
    </tr>
    <tr>
      <td><a href="https://opensource.com/article/17/5/introducing-riot-IRC">IRC for the 21st Century: Introducing Riot</a></td>
      <td>Justin W. Flory</td>
      <td>English</td>
      <td> </td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr>
    </tr>
  </tbody>
</table>

<h3 id="introduction-for-developers">Introduction for Developers</h3>

<table>
  <thead>
    <tr>
      <th>Article</th>
      <th>Author</th>
      <th>Language</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://brendan.abolivier.bzh/enter-the-matrix/">Enter the Matrix</a></td>
      <td>Brendan</td>
      <td>English</td>
      <td> </td>
    </tr>
    <tr>
      <td><a href="https://t2bot.io/docs/access_tokens/">Obtain Access Tokens from Riot</a></td>
      <td>TravisR</td>
      <td>English</td>
      <td> </td>
    </tr>
    <tr>
      <td><a href="https://gist.github.com/RickCogley/69f430d4418ae5498e8febab44d241c9">Testing the matrix.org client-server API</a> using cURL</td>
      <td><a href="https://github.com/RickCogley">Rick Cogley</a></td>
      <td>English</td>
      <td> </td>
    </tr>
    <tr>
      <td><a href="https://matrix.org/docs/guides/made-for-matrix-badge">Made for Matrix Badge Guidelines</a> (add this to your project page)</td>
      <td>matrix.org</td>
      <td>English</td>
      <td> </td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr>
    </tr>
  </tbody>
</table>

<h3 id="installing-synapse">Installing Synapse</h3>

<p>To install Synapse, we recommend taking a look at the <a href="/docs/guides/installing-synapse">Installing Synapse</a> guide page. Other articles are listed below.</p>

<table>
  <thead>
    <tr>
      <th>Article</th>
      <th>Author</th>
      <th>Language</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://www.natrius.eu/dokuwiki/doku.php?id=digital:server:matrixsynapse">Install Matrix Synapse</a></td>
      <td><a href="https://matrix.to/#/#synapseguide:matrix.org">Stefan</a></td>
      <td>English</td>
      <td> </td>
    </tr>
    <tr>
      <td><a href="https://www.foxypossibilities.com/2018/02/04/running-matrix-synapse-on-nixos/">Running Matrix Synapse on NixOS</a></td>
      <td><a href="https://www.foxypossibilities.com/">Kiba Fox</a></td>
      <td>English</td>
      <td> </td>
    </tr>
    <tr>
      <td><a href="https://blog.cryptoaustralia.org.au/2017/03/21/run-your-end-to-end-encrypted-chat-server-matrix-riot/">Run your end-to-end encrypted chat server using Matrix and Riot</a></td>
      <td>Gabor Szathmari</td>
      <td>English</td>
      <td> </td>
    </tr>
    <tr>
      <td><a href="https://www.howtoforge.com/tutorial/how-to-install-matrix-synapse-on-ubuntu-1804/">How to Install Matrix Synapse Chat on Ubuntu 18.04 LTS</a></td>
      <td>Muhammad Arul</td>
      <td>English</td>
      <td> </td>
    </tr>
    <tr>
      <td><a href="https://www.vultr.com/docs/create-a-chat-server-using-matrix-synapse-and-riot-on-centos-7">Create a Chat Server Using Matrix Synapse and Riot on CentOS 7</a></td>
      <td>Vultr Docs</td>
      <td>English</td>
      <td> </td>
    </tr>
    <tr>
      <td><a href="https://www.alibabacloud.com/blog/how-to-create-a-chat-server-using-matrix-synapse-on-ubuntu-16-04_593809">How to Create a Chat Server Using Matrix Synapse on Ubuntu 16.04</a></td>
      <td>alibabacloud.com</td>
      <td>English</td>
      <td> </td>
    </tr>
    <tr>
      <td><a href="https://www.upcloud.com/support/install-matrix-synapse/">How to install Matrix Synapse Homeserver</a></td>
      <td>UpCloud Tutorials</td>
      <td>English</td>
      <td> </td>
    </tr>
    <tr>
      <td><a href="https://www.digitalocean.com/community/tutorials/how-to-install-matrix-synapse-on-ubuntu-16-04">How To Install Matrix Synapse on Ubuntu 16.04</a></td>
      <td>Oliver Lumby for DigitalOcean</td>
      <td>English</td>
      <td> </td>
    </tr>
    <tr>
      <td><a href="https://gist.github.com/attacus/cb5c8a53380ca755b10a5b37a636a0b9">Running your own encrypted chat service with Matrix and Riot</a></td>
      <td><a href="https://github.com/attacus">github.com/attacus</a></td>
      <td>English</td>
      <td> </td>
    </tr>
    <tr>
      <td><a href="https://www.gigenet.com/blog/how-to-secure-your-chats-with-matrix/">How to secure your chats with Matrix</a></td>
      <td>Zachary Muller</td>
      <td>English</td>
      <td> </td>
    </tr>
    <tr>
      <td><a href="https://wiki.giveth.io/tutorials/riot-migration/">Introduction and tutorials for Riot.im</a></td>
      <td><a href="https://matrix.to/#/@geleeroyale:matrix.org">@geleeroyale:matrix.org</a></td>
      <td>English</td>
      <td> </td>
    </tr>
    <tr>
      <td><a href="https://linuxconfig.org/install-riot-matrix-chat-client-on-debian-and-ubuntu">Install Riot Matrix Chat Client On Debian and Ubuntu</a></td>
      <td>Nick Congleton</td>
      <td>English</td>
      <td> </td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr>
    </tr>
  </tbody>
</table>

<h3 id="understanding-end-to-end-encryption">Understanding End-to-End Encryption</h3>

<table>
  <thead>
    <tr>
      <th>Article</th>
      <th>Author</th>
      <th>Language</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://www.uhoreg.ca/blog/20170910-2110">An introduction to end-to-end encryption in Matrix and Riot</a></td>
      <td>Hubert Chathi</td>
      <td>English</td>
      <td> </td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr>
    </tr>
  </tbody>
</table>

<h3 id="riot-customisation">Riot Customisation</h3>

<table>
  <thead>
    <tr>
      <th>Article</th>
      <th>Author</th>
      <th>Language</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://gist.github.com/turt2live/f7e33017e72a83905f7f6acae31f4143">Setting a default color scheme (tint) for Riot on your account</a></td>
      <td>TravisR</td>
      <td>English</td>
      <td> </td>
    </tr>
  </tbody>
</table>

<h2 id="video-guides">Video Guides</h2>

<table>
  <thead>
    <tr>
      <th>Article</th>
      <th>Author</th>
      <th>Language</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://www.youtube.com/watch?v=ZNEzgYRLj8g">Matrix Bridging to IRC, Slack and Telegram</a></td>
      <td>Jon Spriggs</td>
      <td>English</td>
      <td> </td>
    </tr>
    <tr>
      <td><a href="https://www.youtube.com/watch?v=TUgQ7Qh754w">Riot - Messagerie Instantanée Décentralisée &amp; Sécurisée !</a></td>
      <td>Nouts</td>
      <td>French</td>
      <td> </td>
    </tr>
  </tbody>
</table>

        </MXContentMain>
    </Layout>)
}


export const query = graphql`
{
    allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
        
        edges {
            node {
                childMdx {
                    frontmatter {
                        title
                        maturity
                        description
                        thumbnail
                        featured
                        categories
                        language
                        author
                        repo
                        room
                        e2e
                    }
                    code {
                      body
                    }
                }
                absolutePath
            }
        }
    }
}
`
export default Guides
