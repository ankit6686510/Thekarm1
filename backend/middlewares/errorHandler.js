export default function errorHandler(err, req, res, next) {
    console.error(err.stack); // Log the error stack trace to the console

    // Set a generic error message and status code
    res.status(err.status || 500).json({
        message: err.message || 'Something went wrong!',
        // Optionally include more details in development
        ...(process.env.NODE_ENV === 'development' && { error: err.stack })
    });
}