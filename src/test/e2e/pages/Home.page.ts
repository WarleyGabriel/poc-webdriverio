class HomePage {
    get logoSite() {
        return $('img.logo.img-responsive');
    }

    get cart() {
        return $('.shopping_cart > a');
    }
}

export default new HomePage();
