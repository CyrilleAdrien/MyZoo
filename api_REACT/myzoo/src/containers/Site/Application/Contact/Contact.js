import './contact.css';

const Contact = (props) =>(
    <>
        <div />
            <header>
                <h1>Contactez-nous</h1>
            </header>
            <form id="contactForm"/>
                <label for="name">Nom:</label>
                <input type="text" id="name" name="name" required />
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                <button type="submit">Envoyer</button>
            <form/>
            <footer>
                <p>&copy; MyZoo </p>
            </footer>
            <script src="script.js"></script>
    </>
);

export default Contact;