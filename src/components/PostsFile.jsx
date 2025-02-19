import { useState } from "react";


// array di posts
const posts = [
  {
    id: 1,
    titolo: "Introduzione a JavaScript",
    autore: "Mario Rossi",
    contenuto: "JavaScript è un linguaggio di programmazione versatile e potente...",
    categoria: "Programmazione"
  },
  {
    id: 2,
    titolo: "Come migliorare la SEO del tuo sito web",
    autore: "Luca Bianchi",
    contenuto: "La SEO è fondamentale per migliorare la visibilità di un sito web...",
    categoria: "Marketing"
  },
  {
    id: 3,
    titolo: "I benefici dello sport sulla salute mentale",
    autore: "Giulia Verdi",
    contenuto: "Lo sport non è solo utile per il fisico, ma anche per la mente...",
    categoria: "Salute"
  },
  {
    id: 4,
    titolo: "Guida completa a React.js",
    autore: "Andrea Neri",
    contenuto: "React.js è una libreria JavaScript per costruire interfacce utente...",
    categoria: "Programmazione"
  },
  {
    id: 5,
    titolo: "10 ricette veloci per una cena perfetta",
    autore: "Carla Fabbri",
    contenuto: "Se hai poco tempo e vuoi preparare una cena deliziosa...",
    categoria: "Cucina"
  }
];

const initialFormData = {
    titolo: "",
    autore: "",
    contenuto: "",
    categoria: ""
};

const PostsFile = () => {

    const [post, setPost] = useState(posts);
    const [formData, setFormData] = useState(initialFormData);

    // gestisco info nei campi form
    function handleFormData(e) {

    }

    return (
        <>
            <h1>BLOG</h1>

            <form action="#">
                <input
                 type="text" 
                 name="titolo"
                 onChange={handleFormData}
                 value={formData.titolo}
                 placeholder="Titolo Articolo"
                />

                <input
                 type="text" 
                 name="autore"
                 onChange={handleFormData}
                 value={formData.autore}
                 placeholder="Nome Autore"
                />

                <input
                 type="text" 
                 name="contenuto"
                 onChange={handleFormData}
                 value={formData.contenuto}
                 placeholder="Contenuto"
                />

                <input
                 type="text" 
                 name="categoria"
                 onChange={handleFormData}
                 value={formData.categoria}
                 placeholder="Categoria"
                />

                <button>Aggiungi</button>
            </form>

            {
                post.map((articolo) => (
                    <div className="card" key={articolo.id}>
                        <div className="card-header">
                        <h3 className="card-title">Articolo</h3>
                        </div>

                        <div className="card-body">
                            <h5 className="card-title">{articolo.autore}</h5>
                            <p className="card-text">{articolo.contenuto}</p>
                            <div>{articolo.categoria}</div>
                        </div>
                    </div>

                ))
            }
        </>
    )

}

export default PostsFile