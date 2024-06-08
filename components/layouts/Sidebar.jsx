"use client";

import AuthContext from "@/context/AuthContext";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useContext } from "react";

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  const logoutHandler = () => {
    signOut();
  };

  return (
    <aside className="md:w-1/3 lg:w-1/4 px-4">
      <ul className="sidebar">
        {user?.role === "admin" && (
          <>
            <li className="flex">
              {" "}
              <Link
                href="/admin/products/new"
                className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
              >
                Добавить товар
              </Link>
              <img height="25"
                width="35" src="/images/new.png"></img>
            </li>

            <li className="flex">
              {" "}
              <Link
                href="/admin/products"
                className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
              >
                Все товары
              </Link>
              <img height="25"
                width="45" src="/images/settings.png"></img>
            </li>

            <li className="flex">
              {" "}
              <Link
                href="/admin/orders"
                className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
              >
                Все заказы
              </Link>
              <img height="25"
                width="45" src="/images/settings.png"></img>
            </li>

            <li className="flex">
              {" "}
              <Link
                href="/admin/users"
                className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
              >
                Все пользователи
              </Link>
              <img  height="25"
                width="45" src="/images/settings.png"></img>
            </li>

            <hr />
          </>
        )}

        <li className="flex">
          {" "}
          <Link
            href="/me"
            className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
          >
            Ваш профиль
          </Link>
        </li>
        <li className="flex">
          {" "}
          <Link
            href="/me/orders"
            className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
          >
            Ваши заказы
          </Link>
        </li>
        <li className="flex">
          {" "}
          <Link
            href="/me/update"
            className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
          >
            Редактировать профиль
          </Link>
        </li>
        <li className="flex">
          {" "}
          <Link
            href="/me/update_password"
            className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
          >
            Изменить пароль
          </Link>
        </li>

        <li className="flex">
          {" "}
          <a
            className="block px-3 py-2 text-red-800 hover:bg-red-100 hover:text-white-500 rounded-md cursor-pointer"
            onClick={logoutHandler}
          >
            Выйти из учётной записи
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
