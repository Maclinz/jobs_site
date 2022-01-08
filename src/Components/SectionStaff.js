import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../Layouts';
import StaffCard from './StaffCard';
import Title from './Title';
import avatar1 from '../img/avatar1.png';
import avatar2 from '../img/avatar2.png';
import avatar3 from '../img/avatar3.png';
import avatar4 from '../img/avatar4.png';
import star from '../img/star.svg';
import star_half from '../img/star_half.svg';
import bookmark from '../img/bookmark.svg';

function SectionStaff() {
    return (
        <SectionStaffStyled>
            <InnerLayout>
                <div className="title-con">
                    <Title name={'Our Staff'} para={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'} />
                </div>
                <div className="staff-cards">
                    <StaffCard 
                        img={avatar1} 
                        bookmark={bookmark}
                        name={'Huan Nguyen'} 
                        tit={'Developer'} 
                        rating={star} 
                        rating_half={star_half}
                        stack={'C++, C#, Node, Express, MongoDB, JavaScript, Typescript'} 
                    />
                    <StaffCard 
                        img={avatar2} 
                        bookmark={bookmark}
                        name={'Gustavo Mikalia'} 
                        tit={'Software Engineer'} 
                        rating={star} 
                        rating_half={star_half}
                        stack={'React, Node, Express, MongoDB, JavaScript, Typescript'} 
                    />
                    <StaffCard 
                        img={avatar3} 
                        bookmark={bookmark}
                        name={'Gustavo Mikalia'} 
                        tit={'Mobile Developer'} 
                        rating={star} 
                        rating_half={star}
                        stack={'Java, Kotlin, Flutter, MongoDB, JavaScript, Typescript'} 
                    />
                    <StaffCard 
                        img={avatar4} 
                        bookmark={bookmark}
                        name={'Sunil Patel'} 
                        tit={'3d Artist'} 
                        rating={star} 
                        rating_half={star}
                        stack={'Autodesk Maya, Blender, Arnold, JavaScript, Python'} 
                    />
                </div>
            </InnerLayout>
        </SectionStaffStyled>
    )
}


const SectionStaffStyled = styled.section`
    .staff-cards{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 2rem ;
        padding-top: 3.5rem;
    }
`;


export default SectionStaff;
