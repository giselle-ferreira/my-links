import { DownloadSimple, FileText } from "phosphor-react"
import { useState } from "react";
import { SmallButton } from '../Styles';
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function CVButton() {

    const [isHovering, setIsHovering] = useState(false); 
    const message = () => toast.success('Download Realizado!', { theme: 'colored' })


    return(
        <CVDownloadBtn href='/file/CV-Giselle_Ferreira-Dev_FrontEnd.pdf' target='_blank' download
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={message}
        >  
            { isHovering ? (
                <DownloadSimple size={32} color="#fff" />                
            ) : (
                <span>CV <FileText size={28} color="#fff" /></span>
            ) } 

        <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        />        
                        
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

