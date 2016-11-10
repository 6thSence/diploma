const isDevelopment = process.env.NODE_ENV === 'development';
const app = isDevelopment ? require('./app.dev.js') : require('./app.prod.js');
const port = process.env.PORT || 3000;

app.listen(port, error => {
    if (error) {
        console.error(error);
    } else {
        console.info(`Listening on port ${port}.`);
    }
});
