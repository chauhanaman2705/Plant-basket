import React from 'react'
import './Footer.css';
function Footer() {
    return (
        <footer class="footer">
            <div class="upper">
                <div class="item">
                    <h2>About Us</h2>
                    <p>We are here to deliver best services</p>
                </div>
                <div class="item">
                    <h2>Links</h2>
                    <ul>
                        <li><a href="/ourteam/">Our Team</a></li>
                        <li><a href="/overview">Overview</a></li>
                        <li><a href="">Link</a></li>
                        <li><a href="">Link</a></li>
                    </ul>
                </div>
                <div class="item">
                    <h2>Social Links</h2>
                    <ul>
                        <li><a href="" class="fa fa-facebook"></a></li>
                        <li><a href="" class="fa fa-instagram"></a></li>
                        <li><a href="" class="fa fa-twitter"></a></li>
                        <li><a href="" class="fa fa-linkedin"></a></li>
                    </ul>
                </div>
                <div class="item">
                    <h2>Contact Us</h2>
                    <p>
                        <i class="fa fa-map-marker"></i> <b>B 16/31, Los Vegas, USA</b><br/>
                            mail : abc@example.com<br/>
                                phone : +91-XXXXXXXX36
                </p>
            </div>
        </div>
                    <div class="lower">
                        <span>&copy; All rights are reserved, 2021</span>
                    </div>
    </footer>
    )
}

export default Footer
