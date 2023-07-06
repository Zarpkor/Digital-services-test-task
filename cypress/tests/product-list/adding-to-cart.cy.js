import { mainPage } from "../../support/pageObjects/mainPage";
import { productListPage } from "../../support/pageObjects/productList";
import { filtersPage } from "../../support/pageObjects/filters";
import { basketPage } from "../../support/pageObjects/basketPage";
import { products } from "../../constants/products";
import { routes } from "../../constants/routes";

describe('Список товара', () => {
  it('Добавление и удаление товара из корзины неавторизованным пользователем', () => {
    // # Заходим на сайт
    cy.visit(routes.main);

    // # Ждём пока закончится загрузка элементов страницы
    mainPage.checkLoadPageItem();

    // #  В поиске набираем нужный товар и нажимаем Enter
    mainPage.typeProductSearchInput(products.laptop);

    // * Проверяем статус кода с ответом
    cy.checkStatusCode('GET', 'api/v2/search', 200);

    // # На странице результатов поиска выбираем первый товар из списка и добавляем его в корзину.
    productListPage.clickAddItemToCartButton(0);

    // * Проверяем статус кода с ответом
    cy.checkStatusCode('GET', 'cards/detail', 200);

    // # Раскрываем список всех брендов
    productListPage.clickAdvancedFiltersButton();

    // * Проверяем статус кода с ответом
    cy.checkStatusCode('GET', 'exactmatch/ru/common/v4/search', 200);

    // # Выбираем нужный нам чекбокс в бренде
    filtersPage.clickBrandCheckBox(products.brand);

    // * Проверяем статус кода с ответом
    cy.checkStatusCode('GET', 'exactmatch/ru/common/v4/search', 200);

    // # Выбираем нужный нам вид видеокарты
    filtersPage.clickVideoСardCheckBox(products.videoСard);

    // * Проверяем статус кода с ответом
    cy.checkStatusCode('GET', 'exactmatch/ru/common/v4/search', 200);

    // # Нажимаем на кнопку Показать
    filtersPage.clickShowButton();

    // * Проверяем статус кода с ответом
    cy.checkStatusCode('GET', 'api/v6/search', 200);

    // * Проверяем , что карточка товара появилась
    productListPage.checkProductCardItem(0);

    // * Проверяем статус кода с ответом
    cy.checkStatusCode('GET', 'exactmatch/ru/common/v4/search', 200);

    // # Добавляем в корзину нужный по счету товар, по условиям задачи нужно выбрать 3 элемент, но в выборке их только 2
    productListPage.clickAddItemToCartButton(1);

    // * Проверяем статус кода с ответом
    cy.checkStatusCode('GET', 'cards/detail', 200);

    // # Ждём пока закончится загрузка элементов страницы
    mainPage.checkLoadPageItem();

    // # Переходим в корзину
    mainPage.clickBasketButton();

    // * Проверяем статус кода с ответом
    cy.checkStatusCode('POST', 'lk/basket', 200);

    // * Проверяем отображение выбранного товара
    basketPage.checkBasketItem(0);
    basketPage.checkBasketItem(1);

    // Удаляем товары из корзины
    basketPage.clickDeleteBasketItemButton(0);

    // * Проверяем статус кода с ответом
    cy.checkStatusCode('POST', 'lk/basket', 200);

    basketPage.clickDeleteBasketItemButton(0);

    // * Проверяем статус кода с ответом
    cy.checkStatusCode('POST', 'lk/basket', 200);

    // Проверяем, что карточек товара нет
    basketPage.checkBasketEmptyBlock();
    basketPage.checkBasketBlock('not.exist')
  });
});

