import { DownloadSimple, FileText } from "phosphor-react"
import { useState } from "react";
import { SmallButton } from '../Styles';
import styled from "styled-components"

export function CVButton() {

    const [isHovering, setIsHovering] = useState(false); 


    return(
        <CVDownloadBtn href="/src/assets/file/CV-Giselle Ferreira-Dev FrontEnd" download
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >  
            { isHovering ? (
                <DownloadSimple size={32} color="#fff" />                
            ) : (
                <span>CV <FileText size={28} color="#fff" /></span>
            ) }         
                        
        </CVDownloadBtn>
    )
}


const CVDownloadBtn = styled(SmallButton)`
    text-decoration: none;

    span {
        color: #fff;
        display: flex;
        align-items: center;
        font-size: 20px;
        gap: 5px;        
    }
`;

