import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import LeftBg from '../assets/left_bg_landing_header.svg'
import RightBg from '../assets/right_bg_landing_header.svg'
import invite from '../assets/invite_only_landing.svg'
import hanging from '../assets/voice.svg'
import coach from '../assets/coach.svg'
import friends from '../assets/friends.svg'
import { BiDownload } from 'react-icons/bi'
    ;


export default function Home() {
    return (
        <>
            <div className='thumbnail'>
                <Nav />
                <h1>IMAGINE A PLACE...</h1>
                <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
                <img src={LeftBg} className='leftBg' alt='img' />
                <img src={RightBg} className='rightBg' alt='img' />
                <div className="flex">
                    <button className='btn btn-light download_btn'><BiDownload className='dwn_logo' /> Download for Windows</button>
                    <button className='btn btn-dark browser_btn'>Open Discord in your browser</button>
                </div>
            </div>
            <div className="content">
                <div className="invite-only">
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                            <img src={invite} alt="invite_only_icon" />
                        </div>
                        <div class="flex-grow-1 ms-3">
                            <h1>
                                Create an invite-only place where you belong
                            </h1>
                            <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
                        </div>
                    </div>
                </div>
                <div className="hanging">
                    <div class="d-flex align-items-center">
                        <div class="flex-grow-1 ms-3">
                            <h1>
                                Where hanging out is easy
                            </h1>
                            <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
                        </div>
                        <div class="flex-shrink-0">
                            <img src={hanging} alt="invite_only_icon" className='qr_img' />
                        </div>
                    </div>
                </div>
                <div className="fandom">
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                            <img src={coach} alt="invite_only_icon" />
                        </div>
                        <div class="flex-grow-1 ms-3">
                            <h1>
                                From few to a fandom
                            </h1>
                            <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
                        </div>
                    </div>
                </div>
                <div className="highlight">
                    <div className="center">
                        <h1>
                            RELIABLE TECH FOR STAYING CLOSE
                        </h1>
                        <p>
                            Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
                        </p>
                        <img src={friends} alt="img" />
                    </div>
                    <div className="click">
                        <h1>
                            Ready to start your journey?
                        </h1>
                        <button className='btn btn-primary download_btn'><BiDownload className='dwn_logo' /> Download for Windows</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
