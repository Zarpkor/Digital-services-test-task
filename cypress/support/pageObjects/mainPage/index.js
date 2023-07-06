export class main {
    checkLoadPageItem() {
        return cy.get('*[class^="general-preloader"]').should('not.visible');
    }

    typeProductSearchInput(product) {
        return cy.get('#searchInput').type(product).type('{enter}');
    }

    clickBasketButton() {
        return cy.get('*[class="navbar-pc__item j-item-basket"]').click();
    }
}

export const mainPage = new main();

