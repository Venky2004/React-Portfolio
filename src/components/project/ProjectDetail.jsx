import { BsLinkedin,BsGithub,BsDoorClosed } from 'react-icons/bs';
import { Modal } from '@mui/material';
import React from 'react'
import styled from 'styled-components'


const StyledComponent = styled.div`
  .social_icon{
    color:red;
  }
`;

const Container = styled.div`
width: 100%;
height: 100vh;
position: absolute;
top: 0;
left: 0;
background-color: var(--color-bg-variant);
display: flex;
align-items: top;
justify-content: center;
transition: all 400ms ease-in-out;
padding: 2rem;

`;

const Wrapper = styled.div`
max-width: 800px;
width: 100%;
border-radius: 16px;
height: 100vh;
background-color: ${({ theme }) => theme.card};
color: ${({ theme }) => theme.text_primary};
padding: 2rem;
display: flex;
flex-direction: column;
overflow-x: hidden;
overflow-y: auto;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`;

const Date = styled.div`
    font-size: 16px;
    margin: 2px 6px;
    color: var(--color-light);
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`



const Desc = styled.div`
    width:100%;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
        text-align: justify;
    }
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    margin-top: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
`;

const Label = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
        margin: 8px 6px;
    }
`;

const Tags = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin: 0px 0px;
    @media only screen and (max-width: 600px) {
        margin: 0px 0px;
        width: 100%;
    }
`;

const Tag = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    height:max-content;
    margin: 2px;
    padding: 4px 8px;
    background-color: ${({ theme }) => theme.primary + 20};
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const Members = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-wrap: wrap;
    margin: 12px 6px;
    @media only screen and (max-width: 600px) {
        margin: 4px 6px;
    }
`;

const Member = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const MemberImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 4px;
    background:transparent;

    @media only screen and (max-width: 600px) {
        width: 32px;
        height: 32px;
    }
`;

const MemberName = styled.div`
    font-size: 16px;
    font-weight: 500;
    width: 200px;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 600px) {
        font-size: 0.75rem;
        padding: 0 1rem ;
    }
`;


const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 12px 0px;
    gap: 12px;
`;

const Button = styled.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
    ${({ dull, theme }) => dull && `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${({ theme }) => theme.primary + 99};
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;


const ProjectDetail = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    const isMobile = window.innerWidth <= 600;
    const width = isMobile ? '100%' : '48%';
    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })} onClick={() => setOpenModal({ state: false, project: null })}>
            <Container>
                <Wrapper>
                    <Image src={project?.image} />
                    <Title>{project?.title}</Title>
                    <Date>{project.date}</Date>
                    <Desc>{project?.description}</Desc>
                    <div style={{display:"flex",gap:'1rem',flexWrap:'wrap',flexDirection:'row'}}>

                    {project.member && (
                        <div style={{ width }}>
                            <Label>Members</Label>
                            <Members>
                                {project?.member.map((member) => (
                                   <Member>
                                   <MemberImage src={member.img} />
                                   <MemberName>{member.name}</MemberName>
                                 
                                   {/* Render GitHub link and icon if member has GitHub profile */}
                                   {member.github && (
                                     <a href={member.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                       <BsGithub />
                                     </a>
                                   )}
                                 
                                   {/* Render LinkedIn link and icon if member has LinkedIn profile */}
                                   {member.linkedin && (
                                     <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                       <BsLinkedin />
                                     </a>
                                   )}
                                 </Member>
                                ))}
                            </Members>
                        </div>
                    
                    )}
                     <div style={{ width }}>
                    <Label>Technologies Used</Label>
                    <Tags>
                        {project?.tags.map((tag) => (
                            <Tag> ⚡{tag}</Tag>
                        ))}
                    </Tags>
                    </div>
                    
                    </div>
                    <ButtonGroup>
  {project?.github && (
    <Button dull href={project?.github} target='new'>
      View Code
    </Button>
  )}
  {project?.webapp && (
    <Button href={project?.webapp} target='new'>
      View Live App
    </Button>
  )}
</ButtonGroup>

    </Wrapper>
            </Container>

        </Modal>
    )
}

export default ProjectDetail