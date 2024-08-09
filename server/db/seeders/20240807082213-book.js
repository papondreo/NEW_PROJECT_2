'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Властелин колец",
          description: "фентази",
          cover: "твердый переплет",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Гарри Поттер и Философский камень",
          description: "фэнтези",
          cover: "мягкий переплет",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Преступление и наказание",
          description: "классика",
          cover: "твердый переплет",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Анна Каренина",
          description: "классика",
          cover: "твердый переплет",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "1984",
          description: "научная фантастика",
          cover: "твердый переплет",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Война и мир",
          description: "классика",
          cover: "твердый переплет",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Дневник Анны Франк",
          description: "автобиография",
          cover: "мягкий переплет",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};