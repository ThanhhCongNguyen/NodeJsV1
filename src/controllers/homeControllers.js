const getHomePage = (req, res) => {
    res.send('Hello World')
}

const getImagePage = (req, res) => {
    res.render('sample')
}

module.exports = {
    getHomePage,
    getImagePage
}