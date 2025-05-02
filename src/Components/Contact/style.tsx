import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: 1.7em;
    }

    section form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: .9em;
        line-height: 1.3em;
        color: #cbcbcb;
        width: 32em;
        /* outline: none; */

        label {
            margin: 1.2em 0 .6em 0;
            font-size: 1.1em;
        }

        @media (max-width: 500px) {
            width: 85vw;
        } 

        input[type="text"],
        input[type="email"]
         {
            height: 2.8em;
            /* outline: none; */
            font-size: 1.1em;
            padding: .5em;
            border-radius: .3em;
            border: none;
        }

        textarea {
            height: 8em;
            padding: .5em;
            font-size: 1.1em;
            border: none;
        }

        input[type="submit"] {
            margin-top: 1.2em;
            height: 2.8em;
            width: 100%;
            margin: 1.1em auto;
            cursor: pointer;
            border: none;
            outline: none;
            background: #28A745;
            color: #fff;
            border-radius: .2em;
            font-weight: 700;
        }

        input[type="submit"]:hover {
            background: #211b3c;            
            color: #fff;
        }

        button:active {
            transform: scale(.95);
        }

    } 


`;