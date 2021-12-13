import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
                <div className="footer-nav">
                    <a>FAQ</a>
                    <a>Contact Us</a>
                    <a>Privacy</a>
                </div>
                <div className="footer-image">
                    <img src="./img/patreon.png" alt="" />
                    <img src="./img/mail.png" alt="" />
                    <img src="./img/telegram.png" alt="" />
                </div>
                <div className="footer-copyright">
                    <span className="copyright-grey">ALL RIGHTS SERVED</span>

                    <div>
                        <img src="img/ceshka.png" />
                    <span className="copyright-red">2021</span>
                    </div>
                </div>
            </footer>
    )
}

export default Footer
