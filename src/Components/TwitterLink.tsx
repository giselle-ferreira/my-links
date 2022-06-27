import styled from "styled-components";
import { WrapperLink, Circle} from '../Styles';
import twitterIMG from "src/assets/images/twitter.svg"

export function TwitterLink() {
    return(
        <WrapperLink href="https://twitter.com/giferreira_dev" target="_blank">
            <CircleTwitter>            
                <img src={twitterIMG} alt="" />         
            </CircleTwitter>
        </WrapperLink>
    )
}

const CircleTwitter = styled(Circle)`
    background: #1DA1F2;
`;

