const config = {
  minRate: 20,
  rate: 60,
  priceDigitsNumber: 2,
  fetchInterval: 15000,
  catalog: {
    columns: {
      name: {
        header: 'Название товара',
        style: { width: '50%', 'margin-left': 0 },
      },
      P: {
        header: 'В наличии, шт.',
        style: { width: '20%' },
      },
      C: {
        header: 'Цена, руб.',
        style: { width: '20%' },
      },
      action: {
        header: '',
        style: { width: '40px' },
        icon: 'cart',
        disabledIcon: 'added',
        action: 'add-to-cart',
      }, 
    },
  },
  cart: {
    columnNames: {
      name: 'Название товара',
      count: 'Количество, шт.',
      C: 'Цена, руб. / шт.',
      action: null,
    },
    columns: {
      name: {
        header: 'Название товара',
        style: { width: '50%', 'margin-left': 0 },
      },
      count: {
        header: 'Количество, шт.',
        component: 'v-input',
        type: 'number',
        errors: {
          notEnough: {
            text: 'Осталось только: ',
            min: 'P',
            sub: 'count',
          },
          tooLittle: {
            text: 'Некорректный ввод. Введите число > 0',
            key: 'count',
          },
        },
        style: { width: '20%' },
        action: 'change-value',
      },
      C: {
        header: 'Цена, руб. / шт.',
        style: { width: '20%' },
      },
      action: {
        header: '',
        style: { width: '40px' },
        icon: 'trash',
        action: 'delete-from-cart',
      }, 
    },
  },
}

export default config
