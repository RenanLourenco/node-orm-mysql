# node-orm-mysql

# Objectives

- Create an API with Sequelize
- Understand how ORM works with the database
- Organize with MVC pattern
- CRUD With Sequelize


# Tutorial

- First of all we need to install our database

In this project i use MySQL but you can use whatever database you prefer

- Creating database

In the CLI of your DB, create the database with the name of 'escola_ingles' 
  SQL Command: create database escola_ingles;

- Creating Models

Lets create our first model, mock of the SQL Command: npx sequelize-cli model:create --name "Table_name" --attributes "name_attribute":"type_attribute"

We need to create our tables based on this diagram 

![Click Here](https://github.com/RenanLourenco/node-orm-mysql/blob/main/image.png)

Based in the diagram: 
npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string 
npx sequelize-cli model:create --name Turmas --attributes data_inicio:dateonly  
npx sequelize-cli model:create --name Níveis --attributes descr_nivel:string  
npx sequelize-cli model:create --name Matrículas --attributes status:string 


