function errorHandler(error, req, res, next) {
    let code = 500
    let msg = 'Internal Server Error'

    if(error.name == 'Data Not Found'){
        msg = error.name
        code = 401
    }else if(error.name == 'SequelizeValidationError'){
        let errors = []
        error.errors.forEach((e) => {
            errors.push(e.message);
        });
        code = 400
        msg = errors.join(', ')
    }else if(error.name == 'SequelizeUniqueConstraintError'){
        let errors = []
        error.errors.forEach((e) => {
            errors.push(e.message);
        });
        code = 400
        msg = errors.join(', ')
    }

    res.status(code).json({msg})
}

module.exports = errorHandler