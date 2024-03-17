import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    section form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: .9em;
        line-height: 1.3em;
        color: #cbcbcb;
        width: 32em;

        label {
            margin: 1.1em 0 .6em 0;
        }

        @media (max-width: 500px) {
            width: 85vw;
        } 

        input[type="text"],
        input[type="email"]
         {
            height: 2.5em;
            outline: none;
            font-size: 1em;
            padding: .5em;
            border-radius: .3em;
        }

        textarea {
            height: 7em;
            padding: .5em;
            outline: none;
        }

        input[type="submit"] {
            margin-top: 1.1em;
            height: 2.5em;
            width: 8em;
            margin: 1.1em auto;
            cursor: pointer;
            border: .2px solid #fff;
            background: transparent;
            color: #fff;
        }

        input[type="submit"]:hover {
            background: #211b3c;            
            /* background: #fff;             */
        }

        button:active {
            transform: scale(.95);
        }

    } 


`;