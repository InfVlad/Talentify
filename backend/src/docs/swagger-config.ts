import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.3',
        info: {
            title: 'Talentify - API Documentation',
            version: '1.0.0',
            description: `This API provides a comprehensive solution for managing the recruitment process in the IT industry.
    It enables efficient handling of job postings, candidate applications, and interview scheduling.
    The platform is designed to streamline recruitment workflows, integrate with third - party services,
            and offer insightful metrics for hiring managers.`,
            contact: {
                name: 'Talentify - technical support',
                email: 'ttfy-tech-supp@gmail.com'
            },
        },
        servers: [
            {
                url: `http://localhost:3001`,
            },
            {
                url: `http://localhost:3000`
            },
            {
                url: `https://dev-talentify.vercel.app/`
            },
            {
                url: `https://c21-41-talentify.up.railway.app/api/`
            }
        ],
    },
    apis: ['src/docs/*.yaml'],
};


const specs = swaggerJSDoc(swaggerOptions)

export default specs




