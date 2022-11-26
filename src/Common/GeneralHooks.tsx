import { createEvent, createStore } from "effector";
import { Task_1_1 } from "Pages/ContentBlockGeneral/Ogranoids/1_1";
import React from "react";
//Список категорий
export interface IitemsListArrayAll_Item {
  Id?: string;
  Name?: string;
}
export interface IitemsListArrayAll_Items {
  value: IitemsListArrayAll_Item[];
}
export const $itemsListArrayAll = createStore<IitemsListArrayAll_Items>({
  value: [
    { Name: "Основы JavaScript ", Id: "1" },
    { Name: "Качество кода", Id: "2" },
    { Name: "Объекты: основы", Id: "3" },
    { Name: "Типы данных", Id: "4" },
    { Name: "Продвинутая работа с функциями", Id: "5" },
    { Name: "Свойства объекта, их конфигурация", Id: "6" },
    { Name: "Прототипы, наследование", Id: "7" },
    { Name: "Классы", Id: "8" },
    { Name: "Обработка ошибок", Id: "9" },
    { Name: "Промисы, async/await", Id: "10" },
    { Name: "Генераторы, продвинутая итерация", Id: "11" },
    { Name: "Модули", Id: "12" },
    { Name: "Разное", Id: "13" },
  ],
});
export const setitemsListArrayAll = createEvent<IitemsListArrayAll_Items>();
$itemsListArrayAll.on(setitemsListArrayAll, (_, val) => val);

export const $TaskLIst = createStore<any>([
  { shortName: "Привет, мир!", category: "Основы JavaScript", id: "1_1" ,Component:<Task_1_1 />},
  { shortName: "Привет, мир 2!", category: "Основы JavaScript", id: "1_1" ,Component:<Task_1_1 />},
]);
export const setTaskLIst = createEvent<IitemsListArrayAll_Items>();
$TaskLIst.on(setTaskLIst, (_, val) => val);
