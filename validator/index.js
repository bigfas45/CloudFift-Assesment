exports.categoryValidator = (req, res, next) => {
req.check('title', 'Category title is required').notEmpty()

    const errors = req.validationErrors()
    if (errors){
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({errors: firstError});
    }

    next();
};



exports.examValidator = (req, res, next) => {
    req.check('questions', 'Questions is required').notEmpty()
    req.check('category', 'category is required').notEmpty()
    req.check('option1', 'Option 1 is required').notEmpty()
    req.check('option2', 'Option 2 is required').notEmpty()
    req.check('option3', 'Option 3 is required').notEmpty()
    req.check('option4', 'Option 1 is required').notEmpty()
    
        const errors = req.validationErrors()
        if (errors){
            const firstError = errors.map(error => error.msg)[0];
            return res.status(400).json({errors: firstError});
        }
    
        next();
    };