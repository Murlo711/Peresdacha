// Получаем элементы страницы
var nameInput = document.getElementById("name");
var priceInput = document.getElementById("price");
var productsBlock = document.getElementById("products");


// Создать новый товар
function createProduct() {
    // Получаем значения
    var name = nameInput.value;
    var price = priceInput.value;

    // Если значения не пусты, создаем новый товар
    if (name !== "" && name !== " " && price !== "" && price != " ") {
        var newProduct = document.createElement("div");
        newProduct.className = "product";

        var productName = document.createElement("p");
        productName.className = "name";
        productName.textContent = name;
        
        var productPrice = document.createElement("p");
        productPrice.className = "price";
        productPrice.textContent = "Price: " + price;

        var buttonsDiv = document.createElement("div");
        buttonsDiv.className = "product-buttons";

        // Создаем кнопку минуса
        var minusButton = document.createElement("button");
        minusButton.textContent = "-";
        // Привязываем на нажатие кнопки вызов уменьшения кол-ва товара,
        // в нем передаем саму нажатую кнопку
        minusButton.addEventListener("click", function(event) {
            subProduct(this);
        });
        
        // Создаем кнопку плюса
        var plusButton = document.createElement("button");
        plusButton.textContent = "+";
        // Привязываем на нажатие кнопки вызов увеличения кол-ва товара,
        // в нем передаем саму нажатую кнопку
        plusButton.addEventListener("click", function(event) {
            addProduct(this);
        });
        
        // Создаем элемент с кол-вом товара
        var quantity = document.createElement("span");
        quantity.id = "quantity";
        quantity.innerText = "1";


        // Добавляем внутрь блока кнопок кол-во товара и его кнопки
        buttonsDiv.appendChild(minusButton);
        buttonsDiv.appendChild(quantity);
        buttonsDiv.appendChild(plusButton);

        // Добавляем внутрь блока с товаром название, цену и блок кнопок
        newProduct.appendChild(productName);
        newProduct.appendChild(productPrice);
        newProduct.appendChild(buttonsDiv);

        // Добавляем внутрь блока со всеми товарами новый товар
        productsBlock.appendChild(newProduct);

        // Очищаем поля ввода
        nameInput.value = "";
        priceInput.value = "";
    }
    // Иначе, поля пусты, выводим ошибку 
    else {
        alert("Не все поля заполнены!");
    }
}

// Уменьшить количество нажатого товара
function subProduct(minusButton) {
    // Найти ближайший к нажатой кнопке блок с классом product-buttons
    var buttonsDiv = minusButton.closest(".product-buttons");
    // Найти в этом блоке элемент с количеством товара
    var quantitySpan = buttonsDiv.querySelector("#quantity");
    // Получить текст внутри элемента с кол-вом товара
    var quantityValue = quantitySpan.innerText;

    // Преобразовать текст в число
    var quantity = parseInt(quantityValue);
    
    // Если кол-во больше 1, уменьшить его
    if (quantity > 1) {
        quantity = quantity - 1;

        // Обновить текст элемента с кол-вом товаров
        quantitySpan.innerText = quantity;
    }
    // Иначе если кол-во равно 1, удаляем этот товар
    else if (quantity == 1) {
        // Найти ближайший к нажатой кнопке блок с классом product
        var product = minusButton.closest(".product");
        // Удаляем товар
        product.remove();
    }
}

// Увеличить количество нажатого товара
function addProduct(plusButton) {
    // Найти ближайший к нажатой кнопке блок с классом product-buttons
    var buttonsDiv = plusButton.closest(".product-buttons");
    // Найти в этом блоке элемент с количеством товара
    var quantitySpan = buttonsDiv.querySelector("#quantity");
    // Получить текст внутри элемента с кол-вом товара
    var quantityValue = quantitySpan.innerText;

    // Преобразовать текст в число
    var quantity = parseInt(quantityValue);
    
    // Добавить к кол-ву единицу
    quantity = quantity + 1;

    // Обновить текст элемента с кол-вом товаров
    quantitySpan.innerText = quantity;
}