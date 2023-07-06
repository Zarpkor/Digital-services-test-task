class filters {
    clickBrandCheckBox(brand) {
        return cy.get('*[class^="filters-desktop__item j-filter-container filters-desktop__item--type-1 filters-desktop__item--fbrand open show"]')
            .eq(0)
            .within(() => {
                cy.get('*[class^="filter__show-all j-show-whole-filters"]').click();

                // # Выбираем нужный нам чекбокс в бренде
                cy.get('*[class="checkbox-with-text__text"]').contains(brand).click();
            })
    }

    clickVideoСardCheckBox(videoСard) {
        return cy.get('*[class="filters-desktop__item j-filter-container filters-desktop__item--type-1 filters-desktop__item--f116361 open show"]')
            .eq(0)
            .within(() => {
                cy.get('*[class="checkbox-with-text__text"]').contains(videoСard).click();
            })
    }

    clickShowButton() {
        return cy.get('*[class="filters-desktop__btn-main btn-main"]').contains('Показать').click();
    }
}

export const filtersPage = new filters();
