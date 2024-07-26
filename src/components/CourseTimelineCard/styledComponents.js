import styled from 'styled-components/macro'

export const CourseTitleAndDurationContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items: flex-start;
    width:100%;
    @media screen and (min-width:768px){
        flex-direction:row;
        align-items:center;
    }
`
export const CourseTitle = styled.h1``
