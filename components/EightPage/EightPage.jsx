import React from "react";
import { CiSearch } from "react-icons/ci";

export default function EightPage() {
    return (
        <div>
            <div>
                <h1>Dostavka i samovivoz</h1>
                <h2>Vibor goroda</h2>
            </div>
            <label className="input input-bordered flex items-center gap-2">
                <CiSearch size={20} />
                <input type="text" className="grow" placeholder="Search" />
            </label>
            <div className="muzaffar">
                <div className="">
                    <li>Москва</li>
                    <li>Санкт-Петербург</li>
                    <li>Нижний Новгород</li>
                    <li>Ростов-на-Дону</li>
                    <li>Самара</li>
                    <li>Казань</li>
                </div>
                <div>
                    <li>Екатеринбург</li>
                    <li>Тольятти</li>
                    <li>Омск</li>
                    <li>Волгоград</li>
                    <li>Ставрополь</li>
                    <li>Краснодар</li>
                </div>
                <div>
                    <li>Воронеж</li>
                    <li>Уфа</li>
                    <li>Ярославль</li>
                    <li>Саратов</li>
                    <li>Ижевск</li>
                    <li>Челябинск</li>
                </div>
                <div>
                    <li>Екатеринбург</li>
                    <li>Тольятти</li>
                    <li>Омск</li>
                    <li>Волгоград</li>
                    <li>Ставрополь</li>
                    <li>Краснодар</li>
                </div>
                <div>
                    <li>Воронеж</li>
                    <li>Уфа</li>
                    <li>Ярославль</li>
                    <li>Саратов</li>
                    <li>Ижевск</li>
                    <li>Челябинск</li>
                </div>
                <div>
                    <li>Екатеринбург</li>
                    <li>Тольятти</li>
                    <li>Омск</li>
                    <li></li>
                    <li>Ставрополь</li>
                    <li>Краснодар</li>
                </div>
            </div>
        </div>
    );
}
