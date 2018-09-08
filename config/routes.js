module.exports = function(router) {
    //rendering the homepage
    router.get("/", function(req, res) {
        res.render("home");
    });
    //rendering the saved handlebars page
    router.get("/saved", function(req, res) {
        res.render("saved");
    })
}