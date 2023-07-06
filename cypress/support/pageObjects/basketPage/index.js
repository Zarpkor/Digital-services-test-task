class basket {
    checkBasketItem(positionNumber) {
        return cy.get('*[class="accordion__list-item list-item j-b-basket-item"]').eq(positionNumber).should('be.visible');
    }

    checkBasketEmptyBlock() {
        return cy.get('*[class="basket-page__basket-empty basket-empty"]').should('be.visible');
    }

    checkBasketBlock(checkType) {
        return cy.get('*[class="basket-section__basket-list basket-list"]').should(checkType);
    }

    clickDeleteBasketItemButton(positionNumber) {
        return cy.get('*[class="btn__del j-basket-item-del"]').eq(positionNumber).click();
    }

    clickBasketButton() {
        cy.get('*[class="navbar-pc__item j-item-basket"]').click();
    }
}

export const basketPage = new basket();
