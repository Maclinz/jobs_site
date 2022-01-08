import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../Layouts';
import logo from '../img/logo1.svg';
/*eslint-disable*/

function SectionFooter() {
    return (
        <SectionFooterStyled>
            <InnerLayout>
                <div className="f-inner">
                    <ul>
                        <div className="f-title logo">
                            <img src={logo} alt="" />
                            <h4>JobsFndr</h4>
                        </div>
                        <p className="f-text">
                            Lorem ipsum dolor sit,<br />
                            met consectetur <br />adipisicing elit.
                        </p>
                    </ul>
                    <ul>
                        <h4 className="f-title">Organization</h4>
                        <li className="nav-item">
                            <a href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">News</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">New App</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Email Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Our Partners</a>
                        </li>
                    </ul>
                    <ul>
                        <h4 className="f-title">Information</h4>
                        <li className="nav-item">
                            <a href="#">External</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Partners</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Quick Read</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Job Listings</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Request</a>
                        </li>
                    </ul>
                    <ul>
                        <h4 className="f-title">Marketing</h4>
                        <li className="nav-item">
                            <a href="#">Affiliate</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Blogs / News</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">New App</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Platforms</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Find Us</a>
                        </li>
                    </ul>
                    <ul>
                        <h4 className="f-title">Our Products</h4>
                        <li className="nav-item">
                            <a href="#">Job Finder</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Notes App</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </InnerLayout>
            <p className="footer">
                © 2022 <span>JobsFndr</span> Inc. All Rights Reserved.
            </p>
        </SectionFooterStyled>
    )
}

const SectionFooterStyled = styled.footer`
    background-color: #272A33;
    p{
        color:#d8dadf;
    }
    .f-inner{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        @media screen and (max-width: 1242px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media screen and (max-width: 841px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 530px) {
            grid-template-columns: repeat(1, 1fr);
            .f-title{
                padding: 1rem 0;
                overflow: hidden;
            }
        }
        p{
            color:#d8dadf;
            line-height: 1.9rem;
        }
        .logo{
            display: flex;
            img{
                width: 50px;
                margin-top: -13px;
            }
            h4{
                margin-left: 16px;
            }
        }
        .f-title{
            padding-bottom: 2rem;
            font-size: 1.8rem;
            cursor: default;
        }
        li{
            margin: 1rem 0;
            a{
                transition: all .3s ease-in-out;
                color: #d8dadf;
                font-size: 1.1rem;
                &:hover{
                    color: var(--color-primary);
                }
            }
        }
    }

    .footer{
        width: 70%;
        margin: 0 auto;
        text-align: center;
        padding: 2rem 0;
        color: #d8dadf;
        border-top: 1px solid #cccccc1c ;
        span{
            color: var(--color-primary);
        }
    }
`;
export default SectionFooter;
