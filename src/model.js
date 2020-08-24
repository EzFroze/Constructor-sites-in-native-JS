import image from "./assets/cat.jpg"
import {ImageBlock, TextBlock, TextColumnsBlock, TitleBlock} from "./classes/blocks"
import {css} from "./utils";

const text = `
Я студент Московского Политеха. 3 курс :) Обучаюсь на факультете информацестовое задание включает два подзадания, которые позволят вампродемонстрировать ваши навыки. ионных технлогий. Специальность: прикладная информатика. Учу ReactJS, VueJS, и сам чистый JS
`

export const model = [
  new TitleBlock("Конструктов сайтов на чистом JS", {
    tag: "h2",
    styles: css({
      background: "linear-gradient(to right, #ff0099, #493240)",
      padding: "padding: 1.5rem",
      color: "#fff",
      "text-align": "center"
    })
  }),
  new ImageBlock(image, {
    styles: "padding: 2rem 0; display: flex; justify-content: center",
    alt: "my image",
    imageStyles: "width: 500px; height: auto"
  }),
  new TextColumnsBlock([
    'Приложение на чистом JavaScript, без использования библиотек',
    'Спасибо за курс Владилену',
    'JavaScript - это просто, интересно.'
  ],
    {
      styles: css({
        padding: "2rem 0",
        color: "#fff",
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        "font-weight": "bold"
      })
  }),
  new TextBlock(text, {
    styles: css({
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      "font-weight": "bold",
      padding: "1rem"
    })
  }),
]