class productList {
    clickAddItemToCartButton(positionNumber) {
        return cy.get('article').eq(positionNumber)
            .trigger('mouseover')
            .within(() => {
                cy.get('a').eq(1).click();
            });
    }

    typeProductSearchInput(product) {
        return cy.get('#searchInput').type(product).type('{enter}');
    }

    clickAdvancedFiltersButton() {
        return cy.get('*[class^="dropdown-filter__btn dropdown-filter__btn--all"]').click();
    }

    checkProductCardItem(positionNumber) {
        return cy.get('article').eq(positionNumber).should('be.visible');
    }
}

export const productListPage = new productList();
