const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()

const port = process.env.PORT || 3000

app.use(
    cors({
        origin: 'http://localhost:8080',
        optionsSuccessStatus: 200,
    })
);

app.use(bodyParser.json())

app.get('/companies', (req, res) => {
    const empresas = [
        {
            id: 1,
            name: "E-Inov",
            country: "Florianópolis/SC - Brasil",
            category: "Serviços e consultoria de TI",
            link: "https://einov.com/",
        },
        {
            id: 2,
            name: "Verzel",
            country: "São Paulo/SP - Brasil",
            category: "Desenvolvimento de Sistemas",
            link: "https://www.verzel.com.br/",
        },
        {
            id: 3,
            name: "Speedio",
            country: "São Paulo/SP - Brasil",
            category: "Big Data",
            link: "https://speedio.com.br/",
        },
        {
            id: 4,
            name: "Dev Superior",
            country: "Uberlândia/MG - Brasil",
            category: "Cursos EaD de Tecnologia",
            link: "https://devsuperior.com.br/cursos",
        },
        {
            id: 5,
            name: "Betta Global Partner",
            country: "São Paulo/SP - Brasil",
            category: "Soluções em TI e Telecom",
            link: "https://betta.gp/",
        },
        {
            id: 6,
            name: "Amazon",
            country: "Washington - EUA",
            category: "Comércio eletrônico e Cloud Computing",
            link: "https://www.amazon.com.br/",
        },
        {
            id: 7,
            name: "Microsoft",
            country: "Washington - EUA",
            category: "Desenvolvimento e comércio de Softwares",
            link: "https://www.microsoft.com/pt-br/",
        },
        {
            id: 8,
            name: "Oracle",
            country: "Texas - EUA",
            category: "Databases e Cloud Computing",
            link: "https://www.oracle.com/br/index.html",
        },
        {
            id: 9,
            name: "Capgemini",
            country: "Paris - França",
            category: "Consultoria, tecnologia e outsourcing",
            link: "https://www.capgemini.com/br-pt/",
        },
        {
            id: 10,
            name: "IBM",
            country: "Nova York - EUA",
            category: "Hardware, software e Cloud Computing",
            link: "https://www.ibm.com/br-pt",
        },
    ];

    res.json(empresas);
});

app.listen(port, () => {
    console.log(`Express server has started: http://localhost:${port}`)
})