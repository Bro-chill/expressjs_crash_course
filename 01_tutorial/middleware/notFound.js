const notFound = (req, res, next) => {
    const error = new Error('Not Found');
    error.status = 400;
    next(error);
}

export default notFound;