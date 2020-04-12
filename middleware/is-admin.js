//to check whether an user is admin or not
module.exports = (req, res, next) => {
    if (req.session.isAdmin) {
        next();
    }
    
}