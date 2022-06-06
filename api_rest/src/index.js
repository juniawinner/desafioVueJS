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
            site: "https://einov.com/",
            linkedin: "https://www.linkedin.com/company/e-inov-solucoes-tecnologicas/",
        },
        {
            id: 2,
            name: "Verzel",
            country: "São Paulo/SP - Brasil",
            category: "Desenvolvimento de Sistemas",
            site: "https://www.verzel.com.br/",
            linkedin: "https://www.linkedin.com/company/verzel-solucoes-em-sistemas/",
        },
        {
            id: 3,
            name: "Speedio",
            country: "São Paulo/SP - Brasil",
            category: "Big Data",
            site: "https://speedio.com.br/",
            linkedin: "https://www.linkedin.com/company/speed-io/",
        },
        {
            id: 4,
            name: "Dev Superior",
            country: "Uberlândia/MG - Brasil",
            category: "Cursos EaD de Tecnologia",
            site: "https://devsuperior.com.br/cursos",
            linkedin: "https://www.linkedin.com/school/devsuperior/",
        },
        {
            id: 5,
            name: "Betta Global Partner",
            country: "São Paulo/SP - Brasil",
            category: "Soluções em TI e Telecom",
            site: "https://betta.gp/",
            linkedin: "https://www.linkedin.com/company/bettaglobalpartner/",
        },
        {
            id: 6,
            name: "Amazon",
            country: "Washington - EUA",
            category: "Comércio eletrônico e Cloud Computing",
            site: "https://www.amazon.com.br/",
            linkedin: "https://www.linkedin.com/company/amazon/",
        },
        {
            id: 7,
            name: "Microsoft",
            country: "Washington - EUA",
            category: "Desenvolvimento e comércio de Softwares",
            site: "https://www.microsoft.com/pt-br/",
            linkedin: "https://www.linkedin.com/showcase/microsoft-developers/",
        },
        {
            id: 8,
            name: "Oracle",
            country: "Texas - EUA",
            category: "Databases e Cloud Computing",
            site: "https://www.oracle.com/br/index.html",
            linkedin: "https://www.linkedin.com/company/oracle/",
        },
        {
            id: 9,
            name: "Capgemini",
            country: "Paris - França",
            category: "Consultoria, tecnologia e outsourcing",
            site: "https://www.capgemini.com/br-pt/",
            linkedin: "https://www.linkedin.com/company/capgemini/",
        },
        {
            id: 10,
            name: "IBM",
            country: "Nova York - EUA",
            category: "Hardware, software e Cloud Computing",
            site: "https://www.ibm.com/br-pt",
            linkedin: "https://www.linkedin.com/company/ibm/",
        },
    ];

    res.json(empresas);
});

app.listen(port, () => {
    console.log(`Express server has started: http://localhost:${port}`)
})