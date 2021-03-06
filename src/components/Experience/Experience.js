import React from "react";
import stylesExp from "./Experience.module.scss";
import 'font-awesome/css/font-awesome.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Experience() {
  AOS.init();
  return (
    <>
      <section id="experience" >
        <div data-aos="fade-up" className={stylesExp.container} >
          <div className="row">
            <div className={stylesExp.toptext} >
              <h2>This is my <span>Education</span></h2>
              <p>Final year Network & media management</p>
            </div>

            <div className={stylesExp.educationcontainer}>
              <div className={stylesExp.education}>
                <div className={stylesExp.texteducation}>
                  <h3> <i className="fa fa-graduation-cap" aria-hidden="true"></i></h3> <span>Education</span>
                </div>
                <ul>
                  <li>
                    <span>HBO ICT </span>
                    <small>The Hague University of Applied Sciences</small> <small> 2022-Current</small>
                  </li>
                </ul>
                <ul>
                  <li>
                  <span>Network & Media management - IT </span>
                  <small>Grafisch Lyceum Rotterdam </small> <small> 2018-2022</small>

                  </li>
                </ul>

                <ul>
                  <li>
                    <span>Mavo VMBO-TL</span>
                    <small>Melanchthon de Blesewic </small> <small> 2014-2018</small>

                  </li>
                </ul>

              </div>

              <div className={stylesExp.education}>
                <div className={stylesExp.texteducation}>
                  <h3> <i className="fa fa-briefcase" aria-hidden="true"></i></h3> <span>Work experience</span>
                </div>
                <ul>
                  <li>
                    <span>De Pannekoek en De Kale (DPDK)</span>
                    <small>DevOps Intern </small> <small> 2021-2022</small>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>Albert Heijn</span>
                    <small>Part-time </small> <small> 2018-2021</small>

                  </li>
                </ul>

                <ul>
                  <li>
                    <span>...</span>
                    <small>...</small>

                  </li>
                </ul>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
