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

        emailjs.send(
            import.meta.env.SERVICE_ID,
            import.meta.env.TEMPLATE_ID,
            templateParams,
            import.meta.env.PUBLIC_KEY
        )
            .then((response: any) => {
                console.log("Email enviado", response.status, response.text)
                setName('')
                setEmail('')
                setMessage('')

            }, (err) => {
                console.error("ERRO: ", err)
            })

        swal.fire({
            icon: "success",
            title: "Email Enviado Com Sucesso!",
            text: "Obrigada pelo contato. Retornarei em breve.",
            showConfirmButton: false,
            timer: 2000
        });
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
                    <input type="submit" value="Enviar" />
                </form>
            </section>
        </Container>
    )
}