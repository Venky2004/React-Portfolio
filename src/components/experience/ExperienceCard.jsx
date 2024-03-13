import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-scroll'
const Document = styled.h4`
    display: none;
    width: fit-content;
    color: var(--color-light);
    transition: var(--transition);
    &:hover{
        cursor: pointer;
        opacity: 0.8;
        color:var(--color-primary)
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 0.9rem;
    font-weight: 300;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 0.7rem;
        fonweight: 200;
        margin-top: 0.4rem;
    }
`

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
    width: 100%;
    padding: 20px 20px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;

    background: var(--color-bg-variant);
    border-radius: 1rem;
    border: 1px solid transparent;
    transition: var(--transition);

    &:hover{
        transform: translateY(-8px);
        backgroundcolor: transparent;
        background: transparent;
        border-color: var(--color-primary-variant);
        cursor: default;
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document}{
        display: flex;
        border-radius: 0.5rem;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 60px;
    width:60px;
    aspect-ratio:1/1;
    background-color: transparent;
    border-radius: 100rem;
    border: 1px solid transparent;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
        width:40px;
    }

`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 0.5rem; 
`


const Role = styled.div`
    font-weight: 500;
    font-size:20px;
    color: Var(--color-primary);
    
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: var(--color-white);
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: var(--color-light);
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
    @media only screen and (max-width: 768px){
        margin-top: 0.4rem;
    }
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 0.7rem;
        fonweight: 200;
    }
`



const ExperienceCard = ({ experience,val }) => {
    return (
        <Card>
            <Top>
                <Image src={experience.img} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience?.desc &&
                    <Span>{experience?.desc}</Span>

                }
                {experience?.skills &&
                    <>
                        <br />
                        <Skills>
                            <ItemWrapper>
                                {experience?.skills?.map((skill, index) => (
                                   <>
                                   {val % 2 === 0 ? (
                                     <Skill>⚡{skill}</Skill>
                                   ) : (
                                     <Skill>🔥{skill}</Skill>
                                   )}
                                 </>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
            {experience.doc &&
                <a href={experience.doc} target="new">
                    <Document>
                        View Certificate</Document>
                </a>
            }

        </Card>
    )
}

export default ExperienceCard