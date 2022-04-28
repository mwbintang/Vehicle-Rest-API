function errorHandler(error, req, res, next) {
    let code = 500
    let msg = 'Internal Server Error'

    if(error.name == 'Data Not Found' || error.name == 'User Not Found'){
        msg = error.name
        code = 404
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
    }else if(error.name == 'email/password is required' || error.name == "email/password not valid"){
        code = 400
        msg = error.name
    }else if(error.name == 'Please Login First'){
        code = 401
        msg = error.name
    }else if(error.name == `You're Not Admin`){
        code = 403
        msg = error.name
    }

    res.status(code).json({msg})
}

module.exports = errorHandler