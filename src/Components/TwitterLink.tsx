import styled from "styled-components";
import { WrapperLink, Circle} from '../Styles';

export function TwitterLink() {
    return(
        <WrapperLink href="https://twitter.com/giferreira_dev" target="_blank">
            <CircleTwitter>            
                <img src='/media/twitter.svg' alt="Twitter Icon" />         
            </CircleTwitter>
        </WrapperLink>
    )
}

const CircleTwitter = styled(Circle)`
    background: #1DA1F2;
`;

