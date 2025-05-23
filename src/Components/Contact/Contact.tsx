import { useState } from 'react';
import { Container } from './style';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert2';

export const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            swal.fire({
                icon: "error",
                text: "Favor Preencher Todos os Campos.",
            });
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response: any) => {
                console.log("Email enviado", response.status, response.text)
                setName('')
                setEmail('')
                setMessage('')

                if (response.status === 200) {
                    swal.fire({
                        icon: "success",
                        title: "Email Enviado Com Sucesso!",
                        text: "Obrigada pelo contato. Retornarei em breve.",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }

            }, (err) => {
                console.error("ERRO: ", err)
                swal.fire({
                    icon: "error",
                    text: "Ocorreu um erro no envio do email. Tente novamente mais tarde.",
                });

            })
    }


    return (
        <Container>
            <h2>Contato</h2>
            <section>
                <form onSubmit={sendEmail}>
                    <label htmlFor="">Nome</label>
                    <input type="text"
                        placeholder='Digite seu nome'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        placeholder='Digite seu email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <label htmlFor="message">Mensagem</label>
                    <textarea
                        id="message"
                        placeholder='Digite sua mensagem...'
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                    <input type="submit" value="ENVIAR" />
                </form>
            </section>
        </Container>
    )
}