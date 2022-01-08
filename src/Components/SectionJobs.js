import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../Layouts';
import JobCard from './JobCard';
import Title from './Title';
import logo1 from '../img/logo1.svg';
import logo2 from '../img/logo2.svg';
import logo3 from '../img/logo3.svg';
import logo4 from '../img/logo4.svg';
import logo5 from '../img/logo5.svg';
import logo6 from '../img/logo6.svg';
import logo7 from '../img/logo7.svg';

function SectionJobs() {
    return (
        <SectionJobsStyled>
            <InnerLayout>
                <div className="title-con">
                    <Title name={'Recent Job'} para={'Lorem, ipsum dolor sit amet consectetur adipisicing elit, excepturi inventore!'} />
                </div>
                <div className="cards-con">
                    <JobCard
                        logo={logo1}
                        bg={'#27AE60'}
                        name={'Maniac Tech'}
                        loc={'New York, NY'}
                        tit={'Software Engineer'} 
                        type={'Full Time'} 
                        stack={'Azure, C++, Python, CSV, MySQL or PostgreSQL'}
                        salary={'$70,000 - $90,000'}
                    />
                    <JobCard logo={logo2} 
                        bg={'#037FFF'}  
                        name={'Screaming Frog Inc.'} 
                        loc={'London, UK'} 
                        tit={'Game Developer'} 
                        type={'Remote'} 
                        stack={'ASP.Net, Node.js, Typescript, Unity or Unreal Engine'}
                        salary={'$79,000 - $150,000'}
                    />
                    <JobCard logo={logo3}
                        bg={'#27AE60'} 
                        name={'Gooble Inc.'} 
                        loc={'California, USA'} 
                        tit={'Web Developer'} 
                        type={'Full Time'} 
                        stack={'React, Node, Express, MongoDB, JavaScript, Typescript'}
                        salary={'$50,000 - $95,000'}
                    />
                    <JobCard logo={logo4}
                        bg={'#037FFF'}  
                        name={'Microsoft'} 
                        loc={'Cape Town, SA'} 
                        tit={'Data Scientist'} 
                        type={'Remote'} 
                        stack={'C++, Machine Learning, Python, CSV, MySQL or PostgreSQL'}
                        salary={'$70,000 - $90,000'}
                    />
                    <JobCard logo={logo5}
                        bg={'#EB5757'}
                        name={'Stacks Tech Inc.'} 
                        loc={'Reading, UK'} 
                        tit={'Software Developer'} 
                        type={'Part Time'} 
                        stack={'ASP.Net, Node.js, Typescript, VUE.js, C# or Python'}
                        salary={'$79,000 - $150,000'}
                    />
                    <JobCard logo={logo6}
                        bg={'#27AE60'}
                        name={'The Real Tech'} 
                        loc={'California, USA'} 
                        tit={'Web Developer'} 
                        type={'Full Time'} 
                        stack={'React, Node, Express, MongoDB, JavaScript, Typescript'}
                        salary={'$50,000 - $95,000'}
                    />
                    <JobCard logo={logo7}
                        bg={'#27AE60'} 
                        name={'Infomedia Corp.'} 
                        loc={'Cape Town, SA'} 
                        tit={'Software Engineer'} 
                        type={'Full Time'} 
                        stack={'C++, Python, CSV, MySQL or PostgreSQL, Web GL'}
                        salary={'$70,000 - $90,000'}
                    />
                    <JobCard logo={logo2}
                        bg={'#037FFF'}  
                        name={'Tech Mania'} 
                        loc={'London, UK'} 
                        tit={'Web Developer'} 
                        type={'Remote'} 
                        stack={'ASP.Net, Node.js, Typescrip, C# or Python, Menia Tech'}
                        salary={'$79,000 - $150,000'}
                    />
                    <JobCard logo={logo1}
                        bg={'#EB5757'} 
                        name={'Alphabet Inc'} 
                        loc={'California, USA'} 
                        tit={'Web Developer'} 
                        type={'Part Time'} 
                        stack={'React, Node, Express, MongoDB, JavaScript, Typescript'}
                        salary={'$50,000 - $95,000'}
                    />
                </div>
            </InnerLayout>
        </SectionJobsStyled>
    )
}

const SectionJobsStyled = styled.section`
    background-color: var(--color-neutral-3);
    .cards-con{
        padding-top: 3.5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
        grid-gap: 2rem;
    }
`;
export default SectionJobs;
