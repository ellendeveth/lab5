const logger = (req, res, next) => {
    console.log("🚀");
    next(); //gaat volgende middleware in gang zetten als die er is
}

module.exports = logger;